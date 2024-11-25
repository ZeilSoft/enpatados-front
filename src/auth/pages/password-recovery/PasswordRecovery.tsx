import { putPassword } from "@/auth/services/AuthService"
import { recoveryPasswordSchemaPassword } from "@/auth/utils/schemas/RecoveryPassword"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormik } from "formik"
import { useState } from "react"
import { Link } from "react-router-dom"

const PasswordRecovery = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const params = new URLSearchParams(window.location.search)
  const token = params.get("token")

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: recoveryPasswordSchemaPassword,
    onSubmit: async (values: { password: string }) => {
      try {
        setLoading(true)
        if (token === undefined) setError(true)
        const response = await putPassword(values.password, token!)
        if (response.data?.error) return setError(true)
        window.location.href = "/auth/iniciar-sesion"
      } catch (error) {
        setError(true)
        throw error
      } finally {
        setLoading(false)
      }
    },
  })
  return (
    <section className="flex items-center justify-center w-full min-h-screen">
      {token == undefined || error ? (
        <div className="flex flex-col items-center gap-4">
          <h4>
            Algo a salido mal pruebe volver a recuperar la contraseña aqui
          </h4>
          <div>
            <Button variant="authButton">
              <Link to="/auth/iniciar-sesion">Volver a recuperar contraseña</Link>
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <div className="w-full sm:w-96 bg-main/20 rounded-lg shadow p-6 sm:p-8 flex flex-col gap-3 bg-yellow-50">
            <div className="flex flex-col gap-4 md:gap-6">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Recuperar contraseña
              </h1>

              <div className="flex flex-col gap-4 md:gap-6">
                <div className="flex flex-col gap-2">
                  <Label>Nueva contraseña</Label>

                  <Input
                    className="bg-light"
                    type="password"
                    placeholder="Nueva contraseña"
                    {...formik.getFieldProps("password")}
                    disabled={loading}
                  />

                  {formik.touched.password && formik.errors.password && (
                    <small className="font-bold text-[#ff4444]">
                      {formik.errors.password}
                    </small>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <Button
                  variant="authButton"
                  className="w-full rounded-lg"
                  type="submit"
                  id="login"
                  aria-label="login"
                  role="button"
                  disabled={loading}
                >
                  {loading ? "Cargando..." : "Generar nueva contraseña"}
                </Button>
              </div>
            </div>
          </div>
        </form>
      )}
    </section>
  )
}
export default PasswordRecovery
