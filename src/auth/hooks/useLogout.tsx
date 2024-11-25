import { useState } from "react";
import { useAuthContext } from "../context/auth-context";

export const useLogout = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuthContext()

  const logOut = () => {
    try {
      setLoading(true);
      localStorage.removeItem("library-user");
      localStorage.removeItem("user-token");
      setAuthUser(null);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logOut };
};