import Database from 'better-sqlite3'
import { IUser, InputUser } from './types'

const sql = new Database("crud.db")

export const getAllUsers = async (): Promise<IUser[]> => {
  return sql.prepare("SELECT * FROM users").all() as IUser[]
}
export const addNewUser = async (user: InputUser) => {
  const stm = `INSERT INTO users(name, surname, age, salary)
               VALUES(@name, @surname, @age, @salary)`

  return sql.prepare(stm).run(user)
}

export const deleteUserById = async (id: number) => {
  const stm = `DELETE FROM users WHERE ID = ?`
  return sql.prepare(stm).run(id)
}

export const getUserById = async (id: number): Promise<IUser | null> => {
  const stm = `SELECT * FROM users WHERE id = ?`
  return sql.prepare(stm).get(id) as IUser | null
}

export const updateUserById = async (id: number, user: InputUser) => {
  const stm = `
    UPDATE users
    SET name = ?, surname = ?, age = ?, salary = ?
    WHERE id = ?
  `
  return sql.prepare(stm).run(user.name, user.surname, user.age, user.salary, id)
}