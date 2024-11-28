import { Outlet } from "react-router-dom"

export const Root = () => {

  return (
    <main className="font-rubik">
      <Outlet />
    </main>
  )
}