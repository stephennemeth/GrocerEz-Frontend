import { Box, Button, CircularProgress, Modal, Stack, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import AddListModalProps from '../interfaces/AddListModalProps'
import { createGroceryList } from '../api/grocerylist'
import UserContext from '../context/UserContext'

const AddListModal = (props : AddListModalProps) => {

    const [listName, setListName] = useState<string>('')
    const [listDescription, setListDescription] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [showErrorMessage , setShowErrorMessage] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    
    const userContext = useContext(UserContext)

    if (userContext === null || userContext === undefined) {
        throw new Error("User context is null or undefined")
    }

    const addList = async () => {
        try {
            setLoading(true)
            if (listName === '' || listDescription === '') {
                throw new Error("List name and description cannot be empty")
            }

            const list = await createGroceryList(userContext.getUserId() as number, listName, listDescription)
            props.setLists([...props.lists, list])
            setListName('')
            setListDescription('')
            setOpenModal(false)
        } catch (error : any) {
            setErrorMessage(error.message)
            setShowErrorMessage(true)
        } finally {
            setLoading(false)
        }
    }

    const [openModal, setOpenModal] = useState<boolean>(false) 
    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Add List</Button>
            <Modal 
                open={openModal} 
                onClose={() => setOpenModal(false)} 
                sx={{background: "white", m: "0px auto", justifyContent: "center", justifySelf: "center", borderRadius: "10px", width: "50%", height: "50%", mt: "5%"}}
                >
                <Box sx={{background: "white", height: "100%", borderRadius: "10px", border: "solid blue", display: "flex", justifyContent: "center", justifyItems: "center"}}>
                    <Stack spacing={2} sx={{mt: "5.2rem"}}>
                        <TextField label={"List Name"} variant={"outlined"} value={listName} onChange={(e) => setListName(e.target.value)} />
                        <TextField label={"List Description"} variant={"outlined"} value={listDescription} onChange={(e) => setListDescription(e.target.value)} />
                        <Button variant={"contained"} onClick={addList}>Add List</Button>
                        {loading &&
                            <CircularProgress />
                        }

                        {showErrorMessage &&
                            <Typography variant={"h6"} color={"red"}>
                                {errorMessage}
                            </Typography>
                        }
                    </Stack>
                </Box>
            </Modal>
        </>
    )
}

export default AddListModal