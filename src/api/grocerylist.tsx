import GroceryList from "../types/GroceryList";
import { BASE_URL } from "./url";


export const getGroceryLists = async (userId: number) : Promise<GroceryList[]> => {
    const response = await fetch(`${BASE_URL}/grocerylist/lists/${userId}`)

    if (response.status === 204) {
        throw new Error("No lists found")
    }

    if (response.status !== 200) {
        throw new Error("Could not get lists")
    }

    const data = await response.json()
    return data
}

export const createGroceryList = async (userId: number, listName: string, listDescription: string) : Promise<GroceryList> => {
    const response = await fetch(`${BASE_URL}/grocerylist/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": listName,
            "description": listDescription,
            "userId": userId,
            "numItems": 0
        })
    })

    if (response.status !== 200) {
        throw new Error("Could not create list, try again later")
    }

    const data = await response.json()

    return data
}

const editGroceryList = async (listId : number, listName: string, listDescription: string) : Promise<GroceryList> => {
    const response = await fetch(`${BASE_URL}/grocerylist/edit/${listId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": listName,
            "description": listDescription
        })
    })

    if (response.status !== 200) {
        throw new Error("Could not edit list, try again later")
    }

    const data = await response.json()

    return data
}