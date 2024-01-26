type UserContextType = {
    userId: number | null
    setUserId: (userId: number) => void
    getUserId: () => number
}