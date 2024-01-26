import { createContext } from 'react'

const UserContext = createContext<UserContextType | null>(null)

export default UserContext