import Categories from "./components/Categories"
import Hero from "./components/Hero"

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12 w-full">
      <Hero />
      <Categories />
    </div>
  )
}
export default HomePage