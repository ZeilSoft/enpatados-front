import { useAuthContext } from "@/auth/context/auth-context"
import { Order } from "@/enpatados/interfaces/Order"
import { getOrderById } from "@/enpatados/services/orderService"
import { useQuery } from "@tanstack/react-query"
import { motion } from "framer-motion"
import ProfileCard from "./components/ProfileCard"
import NotFound from "@/components/shared/NotFound"
import ProfileCardSkeleton from "@/enpatados/components/ProfileCardSkeleton"
import usePaginationProfile from "@/enpatados/hooks/usePaginationProfile"
import { Pagination } from "../productos/components/Pagination"
import { useEffect } from "react"

const ProfilePage = () => {
  const { authUser } = useAuthContext()
  const { totalPages, handlePageChange, currentPage, setTotalPages } =
    usePaginationProfile()

  const { data, isPending, error } = useQuery({
    queryKey: ["profile"],
    queryFn: () => {
      if (authUser != null) {
        return getOrderById(authUser!.user.id)
      } else {
        window.location.href = "/"
      }
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  })
  console.log(data)

  useEffect(() => {
    setTotalPages(data?.data.pagination.totalPages)
  }, [data])

  return (
    <main className="flex flex-col items-center w-full gap-8 min-h-screen">
      <section className="flex flex-col items-center justify-center gap-8 p-8 bg-white w-full min-h-[200px]">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-yellow-main leading-normal max-w-[850px] text-center"
        >
          Mi perfil
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl text-center max-w-[850px]"
        >
          Aquí podras encontrar todas las ordenes de tus compras.
        </motion.p>
      </section>

      {isPending ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10 place-items-center">
          {Array.from({ length: 9 }).map((_) => (
            <ProfileCardSkeleton key={crypto.randomUUID()} />
          ))}
        </div>
      ) : (
        <div className="w-full">
          {error ? (
            <NotFound>{""}</NotFound>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10 place-items-center">
              {data?.data.data.map((order: Order) => (
                <ProfileCard order={order} key={crypto.randomUUID()} />
              ))}
            </div>
          )}
        </div>
      )}
      <Pagination
        currentPage={currentPage!}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        disabled={isPending}
        key={currentPage}
      />
    </main>
  )
}
export default ProfilePage
