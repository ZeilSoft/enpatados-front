import axiosInstance from "@/api/axiosInstance"
import { useAuthContext } from "@/contexts/auth-context"
import { decodeJwt } from "@/utils/decode-jwt"
import { useState } from "react"

interface RegisterParams {
  name: string
  surname: string
  email: string
  password: string
  dob: string
}

export const useRegister = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuthContext() || {}

  const register = async ({
    name,
    surname,
    email,
    dob,
    password,
  }: RegisterParams) => {
    setLoading(true)

    try {
      const res = await axiosInstance.post("user/register", {
        name,
        surname,
        dob,
        email,
        password,
      })
      const data = res.data.token
      let storage
      if (data) {
        const user = decodeJwt(data)
        storage = {
          user,
          token: data,
        }
      }
      localStorage.setItem("user-token", JSON.stringify(storage))
      setAuthUser(data)
      window.location.href = "/"
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  return { loading, register }
}
