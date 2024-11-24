import { createBrowserRouter } from 'react-router-dom';

import { Root } from '../Root';
import LoginPage from '@/pages/login/LoginPage';
import RegisterPage from '@/pages/register/RegisterPage';
import { AuthLayout } from '@/components/AuthLayout';
import { AdminDashboardLayout } from '@/components/AdminDashboardLayout';
import HomePage from '@/pages/home/HomePage';
import { MainLayout } from '@/components/MainLayout';
import { ProductsPage } from '@/pages/products/ProductsPage';
import { PromotionsPage } from '@/pages/promotions/PromotionsPage';
import { ContactPage } from '@/pages/contact/ContactPage';
import { DashboardMainPage } from '@/pages/DashboardMainPage';
import { DashboardProductsPage } from '@/pages/DashboardProductsPage';
import { DashboardCategoriesPage } from '@/pages/DashboardCategoriesPage';
import { DashboardOrdersPage } from '@/pages/DashboardOrdersPage';
import { DashboardUsersPage } from '@/pages/DashboardUsersPage';

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
            element: <LoginPage />
          },
          {
            path: 'registrarse',
            element: <RegisterPage />
          }
        ]
      },


      /// Dashboard Routes
      {
        path: 'admin',
        element: <AdminDashboardLayout />,
        children: [
          {
            path: '',
            element: <DashboardMainPage />
          },
          {
            path: 'productos',
            element: <DashboardProductsPage />
          },
          {
            path: 'categorias',
            element: <DashboardCategoriesPage />
          },
          {
            path: 'ordenes-de-compra',
            element: <DashboardOrdersPage />
          },
          {
            path: 'usuarios',
            element: <DashboardUsersPage />
          },
        ]
      },
    ],
  },
]);