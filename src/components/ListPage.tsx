import React, { useContext, useState } from "react";
import GroceryList from "../types/GroceryList";
import { Stack } from "@mui/material";
import UserContext from "../context/UserContext";

const ListPage = () => {

    const [lists, setLists] = useState<GroceryList[]>([])

    const {getUserId} = useContext(UserContext) as UserContextType

    const getLists = async () => {
        const response = await fetch(`http://localhost:5065/api/v1/grocerylists/lists/${getUserId()}`)

        
    }

    return (
        <Stack direction={"row"} sx={{height: "100%", width: "100%", mt:"1.02rem", justifyContent: "space-around"}} spacing={2}>
            <Stack sx={{height: "50rem", width: "30%", border:"solid blue", borderRadius: "10px"}}>

            </Stack>
            <Stack sx={{height: "50rem", width: "30%", border:"solid blue", borderRadius: "10px"}}>

            </Stack>

            <Stack sx={{height: "50rem", width: "30%",border:"solid blue", borderRadius: "10px"}}>

            </Stack>
        </Stack>
    )
}

export default ListPage