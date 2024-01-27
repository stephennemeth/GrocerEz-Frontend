import React, { useContext, useEffect, useState } from "react";
import GroceryList from "../types/GroceryList";
import { CircularProgress, Stack, Typography } from "@mui/material";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { getGroceryLists } from "../api/grocerylist";
import AddListModal from "./AddListModal";

const ListPage = () => {

    const [lists, setLists] = useState<GroceryList[]>([])
    const [listLoading, setListLoading] = useState<boolean>(false)
    const [listErrorMessage, setListErrorMessage] = useState<string>('')

    const navigate = useNavigate()
    const userContext = useContext(UserContext)

    if (userContext === null || userContext === undefined) {
        throw new Error("User context is null or undefined")
    }


    const getLists = async () => {

        try {
            setListLoading(true)
            const lists = await getGroceryLists(userContext.getUserId() as number)
            setLists(lists)
        } catch (error : any) {
            setListErrorMessage(error.message)
        } finally {
            setListLoading(false)
        }
    }

    useEffect(() => {

        if (userContext.getUserId() === null) {
            navigate("/")
        } else {
            if (lists.length === 0) {
                getLists()
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Stack direction={"row"} sx={{height: "100%", width: "100%", mt:"1.02rem", justifyContent: "space-around"}} spacing={2}>
            <Stack sx={{height: "50rem", width: "30%", border:"solid blue", borderRadius: "10px"}}>
                {listLoading &&
                    <CircularProgress />
                }

                {listErrorMessage !== '' &&
                    <Typography variant={"h6"} color={"red"}>
                        {listErrorMessage}
                    </Typography>
                }

                {lists.length > 0 &&
                    <Stack>
                        {lists.map((list) => (
                            <Typography variant={"h6"} key={list.listId}>
                                {list.listId}
                            </Typography>
                        ))}
                    </Stack>
                }

            <AddListModal lists={lists} setLists={setLists}/>
            </Stack>
            <Stack sx={{height: "50rem", width: "30%", border:"solid blue", borderRadius: "10px"}}>

            </Stack>

            <Stack sx={{height: "50rem", width: "30%",border:"solid blue", borderRadius: "10px"}}>

            </Stack>
        </Stack>
    )
}

export default ListPage