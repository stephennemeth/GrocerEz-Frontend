import { Box, Button, Modal, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

const AddListModal = () => {

    const [listName, setListName] = useState<string>('')
    const [listDescription, setListDescription] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('') 
    const [loading, setLoading] = useState<boolean>(false)
    

    const [openModal, setOpenModal] = useState<boolean>(false) 
    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Add List</Button>
            <Modal 
                open={openModal} 
                onClose={() => setOpenModal(false)} 
                sx={{background: "white", m: "0px auto", justifyContent: "center", justifySelf: "center", borderRadius: "10px", width: "50%", height: "50%", mt: "5%"}}
                >
                <Box sx={{background: "white", height: "100%", borderRadius: "10px", border: "solid blue"}}>
                    <Stack spacing={2}>
                        <TextField label={"List Name"} variant={"outlined"} value={listName} onChange={(e) => setListName(e.target.value)} />
                        <TextField label={"List Description"} variant={"outlined"} value={listDescription} onChange={(e) => setListDescription(e.target.value)} />
                        <Button>Add List</Button>
                    </Stack>
                </Box>
            </Modal>
        </>
    )
}

export default AddListModal