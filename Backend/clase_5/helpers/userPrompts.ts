import inquirer from "inquirer"
import { IUser } from "../interfaces/interfaces"

export const newUserPrompts = async(): Promise<IUser> => {
    return await inquirer.prompt([
        {
            type: "input",
            name: "metodo",
            message:"Ingrese su metodo de pago:",
        },
        {
            type: "input",
            name: "categoria",
            message:"Ingrese la categoria:",
        },
        {
            type: "number",
            name: "monto",
            message:"Ingrese su monto:",
        },
    ])

}