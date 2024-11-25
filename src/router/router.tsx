import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../Root';

// Enpatados
import { MainLayout } from '@/enpatados/layout/MainLayout';
import HomePage from '@/enpatados/pages/home/HomePage';
import { ProductsPage } from '@/enpatados/pages/ProductsPage';
import { PromotionsPage } from '@/enpatados/pages/PromotionsPage';
import { ContactPage } from '@/enpatados/pages/ContactPage';

// Auth
import { AuthLayout } from '@/auth/layout/AuthLayout';
import { AuthProtectedRoute } from '@/components/AuthProtectedRoute';
import LoginPage from '@/auth/pages/LoginPage';
import RegisterPage from '@/auth/pages/RegisterPage';

// DashboardAdmin
import { DashboardAdminLayout } from '@/dashboardAdmin/layout/DashboardAdminLayout';
import { DashboardAdminMainPage } from '@/dashboardAdmin/pages/DashboardAdminMainPage';
import { DashboardAdminProductsPage } from '@/dashboardAdmin/pages/DashboardAdminProductsPage';
import { DashboardAdminCategoriesPage } from '@/dashboardAdmin/pages/DashboardAdminCategoriesPage';
import { DashboardAdminOrdersPage } from '@/dashboardAdmin/pages/DashboardAdminOrdersPage';
import { DashboardAdminUsersPage } from '@/dashboardAdmin/pages/DashboardAdminUsersPage';

export const router = createBrowserRouter( [
  {
    path: '/',
    element: <Root />,
    children: [
      // Enpatados
      {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            path: '/',
            element: <HomePage />
          },
          {
            path: '/productos',
            element: <ProductsPage />
          },
          {
            path: '/promociones',
            element: <PromotionsPage />
          },
          {
            path: '/contacto',
            element: <ContactPage />
          },
        ]
      },

      /// Auth Routes
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          {
            path: 'iniciar-sesion',
            element: (
              <AuthProtectedRoute>
                <LoginPage /> 
              </AuthProtectedRoute>
            )
          },
          {
            path: 'registrarse',
            element: (
              <AuthProtectedRoute>
                <RegisterPage />
              </AuthProtectedRoute>
            )
          }
        ]
      },

      /// Dashboard Routes
      {
        path: 'admin',
        element: <DashboardAdminLayout />,
        children: [
          {
            path: '',
            element: <DashboardAdminMainPage />
          },
          {
            path: 'productos',
            element: <DashboardAdminProductsPage />
          },
          {
            path: 'categorias',
            element: <DashboardAdminCategoriesPage />
          },
          {
            path: 'ordenes-de-compra',
            element: <DashboardAdminOrdersPage />
          },
          {
            path: 'usuarios',
            element: <DashboardAdminUsersPage />
          },
        ]
      },
    ],
  },
]);