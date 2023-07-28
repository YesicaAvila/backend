import inquirer from "inquirer";
import { createNewBills, getAllBills } from "./helpers/listOptions";


const main = async () => {

    let run = true;

    while (run) {
        const action = await inquirer.prompt([
            {
                type: "list",
                name: "chosenItem",
                message: "Seleccione una acción",
                choices: [
                    {
                        value: 1,
                        name: "Ver todos los gastos"
                    },
                    {
                        value: 2,
                        name: "Crear nueva lista de gastos"
                    },
                    {
                        value: 99,
                        name: "Salir"
                    },
                ]
            }
        ])

        switch (action.chosenItem) {
        case 1: 
            await getAllBills();
            break;
        case 2:
            await createNewBills();
            break;
        case 99:
            run = false;
            break;
        default:
            run = false;;
            break
        }
    }
};

main()




// const main = async () => {

//     const answers = await inquirer.prompt([
//         {
//             type: "input",
//             name: "nombre",
//             message: "Ingresa tu nombre:"
//         },
//         {
//             type: "input",
//             name: "apellido",
//             message: "Ingresa tu apellido:"
//         }
//     ]);

//     console.log(answers);

//     console.log(`Tu nombre es ${answers.nombre} ${answers.apellido}`);
// };

// main()