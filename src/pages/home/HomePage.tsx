import Categories from "./components/Categories"
import Hero from "./components/Hero"
import Products from "./components/Products"

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12 w-full">
      <Hero />
      <Categories />
      <Products />
    </div>
  )
}
export default HomePage