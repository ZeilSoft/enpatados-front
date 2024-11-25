import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Link } from "react-router-dom"

import { Icon } from "@iconify/react"

import { useFormik } from "formik"

import { useState } from "react"

import { loginSchema } from "../utils/schemas/Login"
import { Login } from "../services/AuthService"
import { useLogin } from "../hooks/useLogin"


const LoginPage = () => {
  const { loading, login } = useLogin()
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      loginFunction(values);
    },
  })

  async function loginFunction(values: Login) {
    try {
      await login(values);
    } catch (error: any) {
      setLoginError(error.message);
    }
  }


  return (
    <div className="flex my-auto">
      <form
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="flex flex-col gap-5 items-center justify-center px-4 py-7 mx-auto">
          <div className="w-full sm:w-96 bg-main/20 rounded-lg shadow p-6 sm:p-8 flex flex-col gap-3">
            <div className="flex flex-col gap-4 md:gap-6">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
              >
                Ingrese a su cuenta
              </h1>

              <div className="flex flex-col gap-4 md:gap-6">
                
                <div className="flex flex-col gap-2">
                  <Label>Nombre de usuario</Label>
                  
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
                      type={showPassword ? 'text' : 'password'}
                      placeholder="•••••••••••••"
                      {...getFieldProps('password')}
                      disabled={loading}
                    />

                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={togglePasswordVisibility}
                    >
                      <Icon
                        className={`h-5 w-5 text-main transition-opacity duration-200 ${showPassword ? 'opacity-100' : 'opacity-0'}`}
                        icon='ph:eye-bold'
                      />
                      <Icon
                        className={`h-5 w-5 text-main transition-opacity duration-200 absolute ${showPassword ? 'opacity-0' : 'opacity-100'}`}
                        icon='ph:eye-closed-bold'
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
                  <small className="font-bold text-center text-[#ff4444]">{loginError}</small>
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

                  <div
                    className="flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-main after:mt-0.5 after:flex-1 after:border-t after:border-main dark:before:border-light dark:after:border-light">
                    <p className="mx-4 mb-0 text-center dark:text-white">o</p>
                  </div>

                </div>

                <p className="text-sm font-light text-center">
                  ¿No tienes una cuenta?{" "}
                  <Link
                    to="/registrarse"
                    className="font-semibold text-main hover:underline"
                  >
                    Registrarse
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginPage