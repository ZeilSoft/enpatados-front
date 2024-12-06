const AboutPage = () => {
  return (
    <main className="flex flex-col w-full">
      <section className="flex flex-col items-center justify-center bg-gray-main min-h-96 p-8 w-full gap-6">
        <h2 className="text-4xl md:text-6xl xl:text-7xl font-bold text-yellow-main leading-normal max-w-[900px]">
          Calzate con enpatados
        </h2>
        <h3 className="text-xl">
          Destaca con accesorios que reflejan tu estilo único.
        </h3>
      </section>
      <section className="flex items-center justify-center bg-yellow-main min-h-96 p-8 w-full">
        <div className="flex flex-col gap-8 max-w-[700px]">
          <span>Nuestra historia</span>
          <h1 className="text-5xl font-bold text-black-main ">Enpatados</h1>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              aspernatur nisi saepe id quis esse consequuntur, obcaecati totam
              vitae voluptas ea? Voluptatibus et asperiores reprehenderit aut at
              eveniet quae voluptates?
            </p>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              aspernatur nisi saepe id quis esse consequuntur, obcaecati totam
              vitae voluptas ea? Voluptatibus et asperiores reprehenderit aut at
              eveniet quae voluptates?
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
export default AboutPage
