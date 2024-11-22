import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "./contexts/theme-provider.tsx"
import { BrowserRouter } from "react-router-dom"
import { AuthContextProvider } from "./contexts/auth-context.tsx"
import App from "./App.tsx"
import "./index.css"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
)
