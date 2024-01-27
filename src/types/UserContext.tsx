import UserContext from "../context/UserContext"

type UserContextType = {
    setUserId: (userId: number) => void
    getUserId: () => number | null
}

export default UserContextType