import React from 'react'
import AppBar from '@mui/material/AppBar';
import {Container, FormControlLabel, Stack, Switch} from "@mui/material";
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const options = ["My Lists", "Recipes", "Login"]
const NavBar = () => {

    return (
        <AppBar position="static">
            <Container
                sx={{ml : '0px', mr : '0px' }}>
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="space-around">
                   <Stack
                       direction="row">
                       <Button
                           sx={{color : 'white'}}>
                           GrocerEz
                       </Button>
                   </Stack>
                   <Stack
                        direction="row"
                        spacing={5}>
                       {options.map((option) => (
                                <Button
                                    sx={{color: 'white'}}>
                                    {option}
                                </Button>
                           ))}
                   </Stack>
                    <Stack>
                        <FormControlLabel control={<Switch color="default"/>} label="Dark mode" />
                        <AccountCircleIcon fontSize="large" />
                    </Stack>
                </Stack>
            </Container>
        </AppBar>
    )
}

export default NavBar