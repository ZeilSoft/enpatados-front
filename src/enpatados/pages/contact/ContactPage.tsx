import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { contactSchema } from "@/enpatados/utils/schemas/contact"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useFormik } from "formik"
import { useState } from "react"
function getMessage(message: string, name: string) {
  if (message === "" || name === "") throw new Error("Faltan datos")
  const messageWhatsapp = `Hola, quiero ponerme en contacto con ustedes me llamo ${name} %0A%0A${message}%0A%0A Muchas gracias!`
  return messageWhatsapp
}
const phone = import.meta.env.VITE_PHONE_NUMBER
export const ContactPage = () => {
  const [error, setError] = useState("")

  const { getFieldProps, touched, errors, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: async (values) => {
      try {
        const message = getMessage(values.message, values.name)
        window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
      } catch (error) {
        setError("Algo ha salido mal, pruebe de nuevo")
        throw error
      }
    },
  })
  return (
    <main className="flex items-center justify-center w-full">
      <section className="flex flex-col w-full max-w-[800px] rounded-none md:rounded-lg shadow p-6 sm:p-8 bg-yellow-50 gap-4">
        <div>
          <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-green-main md:text-2xl">
            Contactanos
          </h1>
          <p className="text-center font-normal">¿Cómo podemos ayudarte?</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-4 md:gap-6">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 md:gap-6">
                  <div className="flex flex-col gap-2">
                    <Label>Nombre</Label>

                    <Input
                      type="text"
                      placeholder="Ingrese su nombre y apellido"
                      className="ring-1 ring-green-main"
                      {...getFieldProps("name")}
                    />

                    {touched.name && errors.name && (
                      <small className="font-bold text-[#ff4444]">
                        {errors.name}
                      </small>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label>Mensaje</Label>

                    <Textarea
                      placeholder="Escriba su mensaje"
                      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 ring-green-main border border-green-main"
                      {...getFieldProps("message")}
                    />

                    {touched.message && errors.message && (
                      <small className="font-bold text-[#ff4444]">
                        {errors.message}
                      </small>
                    )}
                  </div>
                  {error && <small className="text-red">{error}</small>}
                  <div className="flex flex-col gap-5">
                    <Button
                      variant="green"
                      className="w-full rounded-lg"
                      type="submit"
                      role="button"
                    >
                      Enviar whatsapp
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-4">
            <img src="/contact.webp" alt="" height={220} width={220} />
            <div className="flex flex-col items-center justify-center gap-2">
              <a
                className="flex text-green-main items-center gap-2"
                href="https://www.instagram.com/enpatados"
                target="_blank"
              >
                <Icon icon="simple-icons:instagram" width={20} height={20} />
                <span>@EnPatados</span>
              </a>
              <a
                className="flex text-green-main items-center gap-2"
                href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlDSvTcvwbKsgxpTwJFjGhxSmBvxPqNQKXdcbGtHmpXkPgGljBCpmVbMqRKrxmmZclHNXB"
                target="_blank"
              >
                <Icon icon="logos:google-gmail" width="24" height="24" />
                <span>enpatadosmedias@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
