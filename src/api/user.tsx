export const getUserId = () : number | null => {
    const id = localStorage.getItem("userId")

    if (id !== null) {
        return parseInt(id)
    } else {
        return null
    }
}

export const setUserId =(id: number) : void => {

    const userId = id.toString() 

    localStorage.setItem("userId", userId)
}