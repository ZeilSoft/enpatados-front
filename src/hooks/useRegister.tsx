import axiosInstance from "@/api/axiosInstance";
import { useAuthContext } from "@/contexts/auth-context";
import { useState } from "react"

interface RegisterParams {
  name : string
  surname: string
  email    : string
  password : string
  dob: string
}

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext() || {};

  const register = async ({ name, surname, email, dob , password }: RegisterParams) => {
    setLoading(true);

    try {
      const res = await axiosInstance.post("user/register", {name, surname, dob, email, password});
      const data = res.data;
      
      if (data.error) throw new Error(data.error)
      localStorage.setItem("user-token", data.accesToken);
      setAuthUser(data)
    } catch (error) {
      
    } finally {
      setLoading(false);
    }
  };

  return { loading, register }
}