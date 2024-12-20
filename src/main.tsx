import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "react-router-dom"
import "./index.css"
import { router } from "./router/router.tsx"
import { AuthContextProvider } from "./auth/context/auth-context.tsx"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <RouterProvider router={ router } />
      </AuthContextProvider>
    </QueryClientProvider>
  </StrictMode>
)