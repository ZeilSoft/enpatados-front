export default function NotFound({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="max-w-md w-full bg-gray-main shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">¡Oops!</h1>

        <p className="text-xl text-gray-600 mb-6">
          Parece que esta página se ha perdido en nuestro cajón de medias.
        </p>

        <p className="text-lg text-gray-500 mb-8">
          No te preocupes, incluso con los mejores anteojos a veces es difícil
          encontrar lo que buscamos.
        </p>

        {children}
      </div>
    </div>
  )
}
