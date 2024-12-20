import { Input } from "@/components/ui/input"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce"
import { motion } from "framer-motion"
import usePagination from "@/enpatados/hooks/usePagination"

const SearchBar = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const search = urlParams.get("search")
  const { handleSearch, searchParams } = usePagination()
  const [text, setText] = useState<string>(search?.toString() || "")
  const [value] = useDebounce(text, 350)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const search = urlParams.get("search")
    const currentPageParams = Number(searchParams.get("currentPage"))
    if (search === text) {
      return
    }
    handleSearch(value, currentPageParams)
  }, [value])

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky z-30 top-[125px] flex flex-1 h-10 justify-end md:justify-center "
    >
      <div
        className={`w-full md:w-[80%] flex rounded-md outline outline-1 outline-black ${
          isFocused ? "outline-[2px] outline-black" : ""
        }`}
      >
        <div
          className={`bg-white rounded-l-md pl-1 pr-0.5 w-10 grid place-content-center border-r border-black ${
            isFocused ? "border-r-[2px] border-black" : ""
          } `}
        >
          <Icon icon="material-symbols:search-rounded" width="24" height="24" />
        </div>

        <div className="w-full relative">
          <Input
            className={`w-full h-full border-none rounded-l-none bg-white text-black ${
              isFocused ? "focus-visible:ring-0" : ""
            }`}
            placeholder="Buscar una libreria"
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          {text && (
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 z-0"
              onClick={() => setText("")}
            >
              <Icon icon="material-symbols:close" width="24" height="24" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
export default SearchBar
