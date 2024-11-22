import { useState } from "react"
import axiosInstance from "@/api/axiosInstance";
import { useAuthContext } from "@/contexts/auth-context";
import { decodeJwt } from "@/utils/decode-jwt";

interface LoginParams {
  email : string;
  password : string;
}

const useLogin = () => {
  const [ loading, setLoading ] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({ email, password }: LoginParams) => {
    setLoading(true);

    try {
      const response = await axiosInstance.post("user/login", {email, password});

      const data = response.data.token;
      console.log(data)
      let storage
      if(data){
        const user = decodeJwt(data)
        storage = {
          user,
          token: data
        }
      }
      localStorage.setItem("user-token", JSON.stringify(storage));
      setAuthUser(data);

      return null;
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        throw new Error("Incorrect credentials. Please try again.");
      } else {
        throw new Error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return { loading, login }
}

export default useLogin