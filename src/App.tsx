import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { useAuthContext } from "./contexts/auth-context"
import HomePage from "./pages/home/HomePage"
import LoginPage from "./pages/login/LoginPage"
import RegisterPage from "./pages/register/RegisterPage"
import NotFoundPage from "./pages/notFound/NotFoundPage"
import Footer from "./components/shared/Footer"
import Navbar from "./components/shared/Navbar"
function App() {
  const location = useLocation()
  const noPadding = ["/", "/login", "/signup", "/home"].includes(
    location.pathname
  )
  const { authUser } = useAuthContext()

  return (
    <main className="bg-lilac-main text-black">
      <section className="w-full font-rubik flex flex-col justify-center items-center min-h-screen">
        <Navbar />

        <div
          className={`flex flex-1 max-w-8xl w-full ${!noPadding ? "py-7 px-4" : ""}`}
        >
          <Routes location={location} key={location.pathname}>
            {/* RUTAS NO PROTEGIDAS */}
            <Route path="/" element={<HomePage />} />

            {/* RUTAS PROTEGIDAS */}
            {/* <Route
              path="/favorites"
              element={
                <ProtectedRoute>
                  <FavoritesPage />
                </ProtectedRoute>
              }
            /> */}

            <Route
              path="/login"
              element={authUser ? <Navigate to="/home" /> : <LoginPage />}
            />
            {/* <Route path="/login/auth" element={<AuthPage />} /> */}
            <Route
              path="/signup"
              element={authUser ? <Navigate to="/home" /> : <RegisterPage />}
            />

            <Route path="/404" element={<NotFoundPage />} />
            <Route path="/*" element={<Navigate to="/404" replace />} />
          </Routes>
        </div>

        <Footer />
      </section>
    </main>
  )
}

export default App
