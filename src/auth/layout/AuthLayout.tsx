import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
  return (
    <main className="bg-lilac-main text-black">
      <section className="w-full font-rubik flex flex-col justify-center items-center min-h-screen">
        <Navbar />
        <div className="flex flex-1 max-w-8xl w-full">
          <Outlet />
        </div>
        <Footer />
      </section>
    </main>
  )
}