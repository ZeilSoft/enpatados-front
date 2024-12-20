import Advantage from "./components/Advantage"
import Categories from "./components/Categories"
import Hero from "./components/Hero"
import Marketing from "./components/Marketing"

const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Categories />
      <Advantage />
      <Marketing />
    </div>
  )
}
export default HomePage