import { createBrowserRouter } from "react-router-dom"
import { Root } from "../Root"

// Enpatados
import { MainLayout } from "@/enpatados/layout/MainLayout"
import HomePage from "@/enpatados/pages/home/HomePage"
import { ProductsPage } from "@/enpatados/pages/productos/ProductsPage"

// Auth
import { AuthLayout } from "@/auth/layout/AuthLayout"
import { AuthProtectedRoute } from "@/components/AuthProtectedRoute"
import LoginPage from "@/auth/pages/login/LoginPage"

// DashboardAdmin
import { DashboardAdminLayout } from "@/dashboardAdmin/layout/DashboardAdminLayout"
// import { DashboardAdminMainPage } from '@/dashboardAdmin/pages/DashboardAdminMainPage';
import { DashboardAdminCategoriesPage } from "@/dashboardAdmin/pages/DashboardAdminCategoriesPage"
import RegisterPage from "@/auth/pages/register/RegisterPage"
import PasswordRecovery from "@/auth/pages/password-recovery/PasswordRecovery"
import GooglePage from "@/auth/pages/google/GooglePage"
import AboutPage from "@/enpatados/pages/about/AboutPage"
import PromotionsPage from "@/enpatados/pages/promotions/PromotionsPage"
import ContactPage from "@/enpatados/pages/contact/ContactPage"
import NotFoundPage from "@/enpatados/pages/notFound/NotFoundPage"
import ProfilePage from "@/enpatados/pages/profile/ProfilePage"
import { DashboardAdminProductsPage } from "@/dashboardAdmin/pages/DashboardAdminProducts/DashboardAdminProductsPage"
import { DashboardAdminOrdersPage } from "@/dashboardAdmin/pages/DashboardAdminOrders/DashboardAdminOrdersPage"
import { DashboardAdminUsersPage } from "@/dashboardAdmin/pages/DashboardAdminUsers/DashboardAdminUsersPage"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      // Enpatados
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/productos",
            element: <ProductsPage />,
          },
          {
            path: "/contacto",
            element: <ContactPage />,
          },
          {
            path: "/sobre-nosotros",
            element: <AboutPage />,
          },
          {
            path: "/promociones",
            element: <PromotionsPage />,
          },
          {
            path: "/perfil",
            element: <ProfilePage />,
          },
          {
            path: "*",
            element: <NotFoundPage/>,
          },
        ],
      },

      /// Auth Routes
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "iniciar-sesion",
            element: (
              <AuthProtectedRoute>
                <LoginPage />
              </AuthProtectedRoute>
            ),
          },
          {
            path: "google",
            element: (
              <AuthProtectedRoute>
                <GooglePage />
              </AuthProtectedRoute>
            ),
          },
          {
            path: "registrarse",
            element: (
              <AuthProtectedRoute>
                <RegisterPage />
              </AuthProtectedRoute>
            ),
          },
          {
            path: "password-recovery",
            element: (
              <AuthProtectedRoute>
                <PasswordRecovery />
              </AuthProtectedRoute>
            ),
          },
        ],
      },

      /// Dashboard Routes
      {
        path: "admin",
        element: <DashboardAdminLayout />,
        children: [
          // {
          //   path: '',
          //   element: <DashboardAdminMainPage />
          // },
          {
            path: "productos",
            element: <DashboardAdminProductsPage />,
          },
          {
            path: "categorias",
            element: <DashboardAdminCategoriesPage />,
          },
          {
            path: "ordenes-de-compra",
            element: <DashboardAdminOrdersPage />,
          },
          {
            path: "usuarios",
            element: <DashboardAdminUsersPage />,
          },
        ],
      },
    ],
  },
])
