import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Link } from "react-router-dom"

import { Icon } from "@iconify/react"

import { useFormik } from "formik"

import { useState } from "react"

import { loginSchema } from "../../utils/schemas/Login"
import { Login, recoveryPasswordFunction } from "../../services/AuthService"
import { useLogin } from "../../hooks/useLogin"
import { recoveryPasswordSchemaEmail } from "@/auth/utils/schemas/RecoveryPassword"

const LoginPage = () => {
  const { loading, login } = useLogin()
  const [showPassword, setShowPassword] = useState(false)
  const [success, setSuccess] = useState("")
  const [recoveryPassword, setRecoveryPassword] = useState(false)
  const [loginError, setLoginError] = useState("")

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState)
  }

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      loginFunction(values)
    },
  })

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: recoveryPasswordSchemaEmail,
    onSubmit: async (values: { email: string }) => {
      try {
        const response = await recoveryPasswordFunction(values.email)
        if (response.data?.error) return
        setSuccess("Correo enviado con exito")
        return response
      } catch (error) {
        throw error
      }
    },
  })

  async function loginFunction(values: Login) {
    try {
      await login(values)
    } catch (error: any) {
      setLoginError(error.message)
    }
  }

  return (
    <section className="flex items-center justify-center w-full min-h-screen">
      <div className="w-full sm:w-96 bg-main/20 rounded-lg shadow p-6 sm:p-8 flex flex-col gap-3 bg-yellow-50">
        {success ? (
          <h1>
            Se le envio un correo de recuperacion a su correo, por favor revise
            su bandeja de entrada o spam
          </h1>
        ) : (
          <div>
            {!recoveryPassword ? (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col gap-5 mx-auto">
                  <div className="flex flex-col gap-4 md:gap-6">
                    <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                      Ingrese su email
                    </h1>

                    <div className="flex flex-col gap-4 md:gap-6">
                      <div className="flex flex-col gap-2">
                        <Label>Email</Label>

                        <Input
                          className="bg-light"
                          type="email"
                          placeholder="email"
                          {...getFieldProps("email")}
                          disabled={loading}
                        />

                        {touched.email && errors.email && (
                          <small className="font-bold text-[#ff4444]">
                            {errors.email}
                          </small>
                        )}
                      </div>

                      <div className="flex flex-col gap-2">
                        <Label>Contraseña</Label>

                        <div className="relative">
                          <Input
                            className="bg-light"
                            type={showPassword ? "text" : "password"}
                            placeholder="•••••••••••••"
                            {...getFieldProps("password")}
                            disabled={loading}
                          />

                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            onClick={togglePasswordVisibility}
                          >
                            <Icon
                              className={`h-5 w-5 text-main transition-opacity duration-200 ${
                                showPassword ? "opacity-100" : "opacity-0"
                              }`}
                              icon="ph:eye-bold"
                            />
                            <Icon
                              className={`h-5 w-5 text-main transition-opacity duration-200 absolute ${
                                showPassword ? "opacity-0" : "opacity-100"
                              }`}
                              icon="ph:eye-closed-bold"
                            />
                          </button>
                        </div>

                        {touched.password && errors.password && (
                          <small className="font-bold text-[#ff4444]">
                            {errors.password}
                          </small>
                        )}
                      </div>

                      {loginError && (
                        <small className="font-bold text-center text-[#ff4444]">
                          {loginError}
                        </small>
                      )}

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
                          {loading ? "Cargando..." : "Iniciar sesión"}
                        </Button>
                      </div>

                      <p className="text-sm font-light text-center">
                        ¿Olvidaste tu contraseña?{" "}
                        <button
                          className="font-semibold text-main hover:underline"
                          onClick={() => setRecoveryPassword(true)}
                        >
                          Recuperar
                        </button>
                      </p>

                      <p className="text-sm font-light text-center">
                        ¿No tienes una cuenta?{" "}
                        <Link
                          to="/auth/registrarse"
                          className="font-semibold text-main hover:underline"
                        >
                          Registrarse
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-4 md:gap-6">
                  <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Recuperar contraseña
                  </h1>

                  <div className="flex flex-col gap-4 md:gap-6">
                    <div className="flex flex-col gap-2">
                      <Label>Email</Label>

                      <Input
                        className="bg-light"
                        type="email"
                        placeholder="email"
                        {...formik.getFieldProps("email")}
                        disabled={loading}
                      />

                      {formik.touched.email && formik.errors.email && (
                        <small className="font-bold text-[#ff4444]">
                          {formik.errors.email}
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
                      {loading ? "Cargando..." : "Enviar email"}
                    </Button>
                  </div>
                  <button
                    className="font-semibold text-main hover:underline"
                    onClick={() => setRecoveryPassword(false)}
                  >
                    Volver
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default LoginPage
