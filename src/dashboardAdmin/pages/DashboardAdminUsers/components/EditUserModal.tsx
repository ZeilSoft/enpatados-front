import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useFormik } from "formik"
import { updateUserSchema } from "@/dashboardAdmin/utils/schemas/updateUser"
import { updateRole } from "@/dashboardAdmin/services/userService"
import { useMutation } from "@tanstack/react-query"
import { Label } from "@/components/ui/label"
import { AxiosError } from "axios"

interface EditUserModalProps {
  id: number
  role: string
  refetch: Function
}

export const EditUserModal: React.FC<EditUserModalProps> = ({
  id,
  role,
  refetch,
}) => {
  const [success, setSuccess] = useState(false)
  const { handleSubmit, errors, touched, values, resetForm } = useFormik({
    initialValues: {
      role: role,
    },
    validationSchema: updateUserSchema,
    onSubmit: () => {
      mutate()
    },
  })

  const { mutate, error } = useMutation({
    mutationKey: ["createProduct"],
    mutationFn: async () => {
      await updateRole(id, values.role)
    },
    onSuccess: () => {
      setSuccess(true)
      resetForm()
      refetch()
    },
  })

  return (
    <form className="flex flex-col gap-4 text-white" onSubmit={handleSubmit}>
      {success ? (
        <div className="flex flex-col gap-4">
          <h1 className="text-white">Usuario editado con éxito</h1>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-2">
            <Label>Roles</Label>
            <Select
              defaultValue={role}
              onValueChange={(v) => (values.role = v)}
            >
              <SelectTrigger className="bg-[#334155] ring-white border border-[#455166] text-white rounded-md py-2 px-3 focus:ring-offset-0 focus-visible:ring-2 focus:ring-white">
                <SelectValue placeholder="Seleccione un rol" />
              </SelectTrigger>
              <SelectContent className="bg-[#334155] text-white z-[12222]">
                <SelectGroup onMouseDown={(e) => e.stopPropagation()}>
                  <SelectItem value="customer">User</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {touched.role && errors.role && (
              <small className="font-bold text-[#ff4444]">{errors.role}</small>
            )}
          </div>
          {error && (
            <small className="font-bold text-[#ff4444]">
              Error al crear el producto:{" "}
              {error instanceof AxiosError
                ? error.response?.data?.error
                : error.message}
            </small>
          )}
          <Button type="submit" variant="goBack">
            Guardar cambios
          </Button>
        </>
      )}
    </form>
  )
}
