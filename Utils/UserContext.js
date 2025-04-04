
import { createContext } from "react";


const UserContext=createContext({loggedInUser:"default user",age: 89})
export const foodContent=createContext({breakfast:"idly"})
export default UserContext