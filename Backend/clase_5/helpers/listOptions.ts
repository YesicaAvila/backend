import { getWithFS, saveWithFS } from "./fsMethods"
import { newUserPrompts } from "./userPrompts";

export const getAllBills = async() => {

        const currentBills = await getWithFS("bills");
        console.log(currentBills);
};

export const createNewBills = async() => {
    const newUserData = await newUserPrompts();

    const currentBills = await getWithFS("bills");

    currentBills.push(newUserData);

    await saveWithFS("bills", currentBills)
}

