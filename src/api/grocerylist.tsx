import GroceryList from "../types/GroceryList";
import { BASE_URL } from "./url";


export const getGroceryLists = async (userId: number) : Promise<GroceryList[]> => {
    const response = await fetch(`${BASE_URL}/grocerylist/lists/${userId}`)

    if (response.status == 204) {
        throw new Error("No lists found")
    }

    if (response.status !== 200) {
        throw new Error("Could not get lists")
    }

    const data = await response.json()
    return data
}


