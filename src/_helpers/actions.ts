"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { addNewUser, deleteUserById, updateUserById } from "./model"

export const addUser = async (form: FormData) => {
  const name = form.get("name") as string
  const surname = form.get("surname") as string
  const age = +(form.get("age") as string)
  const salary = +(form.get("salary") as string)

  await addNewUser({
    name, surname, age, salary
  })
  redirect("/")
}

export const deleteUser = async (id: number, data: FormData) => {
  await deleteUserById(id)
  revalidatePath("/")
}

export const updateUser = async (formData: FormData) => {
  const id = +(formData.get("id") as string)
  const name = formData.get("name") as string
  const surname = formData.get("surname") as string
  const age = +(formData.get("age") as string)
  const salary = +(formData.get("salary") as string)
  await updateUserById(id, { name, surname, age, salary })
  redirect("/")
}