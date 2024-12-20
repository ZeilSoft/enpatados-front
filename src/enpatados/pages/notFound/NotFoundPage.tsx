import NotFound from "@/components/shared/NotFound"
import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <main className="flex items-center justify-center w-full min-h-screen">
      <NotFound>
        <div className="flex items-center justify-center w-full">
          <Link to="/">
            <Button
              variant="blue"
              className="font-normal py-6 px-8 text-base flex gap-2"
            >
              Ir al inicio
              <Icon icon="lucide:arrow-right" />
            </Button>
          </Link>
        </div>
      </NotFound>
    </main>
  )
}
export default NotFoundPage
