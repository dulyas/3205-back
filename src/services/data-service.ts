import { readFileSync } from "fs"
import { join } from "path"

interface IUser {
    email: string
    number: string
}


export const getDataService = async (email: string, num?: string): Promise<IUser[]> => {
    
    const database: IUser[] = JSON.parse(readFileSync(join(__dirname, '../', 'db/db.json')).toString())

    const result = database.filter(user => user.email.includes(email) && (!num || user.number.includes(num)))

    return result
}