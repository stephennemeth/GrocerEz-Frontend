import { Box, Button, CircularProgress, Modal, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'


const EditListItemProxyModal = () => {

    const [openModal, setOpenModal] = useState<boolean>(false)

    const [listName, setListName] = useState<string>('')
    const [listDescription, setListDescription] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [showErrorMessage , setShowErrorMessage] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    return (
        <>
           <Button onClick={() => setOpenModal(true)}>Edit List Item</Button>
           <Modal open={openModal} onClose={() => setOpenModal(false)} sx={{background: "white", m: "0px auto", justifyContent: "center", justifySelf: "center", borderRadius: "10px", width: "50%", height: "50%", mt: "5%"}}>
               <Box sx={{background: "white", height: "100%", borderRadius: "10px", border: "solid blue", display: "flex", justifyContent: "center", justifyItems: "center"}}>
                   <Stack spacing={2} sx={{mt: "5.2rem"}}>
                       <TextField label={"List Name"} variant={"outlined"} value={listName} onChange={(e) => setListName(e.target.value)} />
                       <TextField label={"List Description"} variant={"outlined"} value={listDescription} onChange={(e) => setListDescription(e.target.value)} />
                       <Button variant={"contained"} onClick={() => {}}>Edit List Item</Button>
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

export default EditListItemProxyModal