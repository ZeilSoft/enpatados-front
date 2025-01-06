import { Navigate } from "react-router-dom"
import { useAuthContext } from "@/auth/context/auth-context"

const AuthAdminProtectedRoute = ({ children }: any) => {
  const { authUser } = useAuthContext()
  return authUser?.user.role !== "admin" ? <Navigate to="/" /> : children
}
export default AuthAdminProtectedRoute
