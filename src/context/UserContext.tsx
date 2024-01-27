import { createContext } from 'react'
import UserContextType from '../types/UserContext'

const UserContext = createContext<UserContextType | null>(null)

export default UserContext