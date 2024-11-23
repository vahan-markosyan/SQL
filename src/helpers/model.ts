import Database from "better-sqlite3"
import { InputUser, IUser } from "./types";

const sql = new Database("crud.db")

export const getAllUsers = async():Promise<IUser[]> => {
    return  sql.prepare("SELECT * FROM users").all() as IUser[]
}

export const getUserById = async(id:number):Promise<IUser | null> => {
    const stm = `
    SELECT * FROM users WHERE id = ?
    `
    const user = sql.prepare(stm).get(id)
    return user as IUser || null
}

export const addNewUser = async(user:InputUser) => {
    const stm = `
    INSERT INTO users(name, surname, age, salary)
    VALUES(@name, @surname, @age, @salary)
    `
    return sql.prepare(stm).run(user)
}

export const deleteUserById = async(id:number) => {
    const stm = `DELETE FROM users WHERE ID = ?`
    return sql.prepare(stm).run(id)
}


export const editUser = async (id: number, updatedUser: InputUser) => {
    const stm = `
    UPDATE users
    SET 
        name = @name,
        surname = @surname,
        age = @age,
        salary = @salary
    WHERE id = @id
    `
    const params = { id, ...updatedUser }
    return sql.prepare(stm).run(params)
};







