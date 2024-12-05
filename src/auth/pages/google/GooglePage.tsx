/* import { useEffect } from "react"
import { LoaderIcon } from "lucide-react"
import { useAuthContext } from "@/auth/context/auth-context"
import { decodeJwt } from "@/auth/utils/decode-jwt"

const GooglePage = () => {
  const searchParams = new URLSearchParams(window.location.search)
  const { setAuthUser } = useAuthContext()

  async function loginFunction() {
    const token = searchParams.get("token")
    if (token === null) return (window.location.href = "/auth/iniciar-sesion")
    let storage
    if (token) {
      const user = decodeJwt(token)
      storage = {
        user,
        token: token,
      }
    }
    localStorage.setItem("user-token", JSON.stringify(storage))
    setAuthUser(storage as any)
    window.location.href = "/"
  }
  useEffect(() => {
    loginFunction()
  }, [])
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <LoaderIcon className="animate-spin" />
    </div>
  )
}
export default GooglePage
 */