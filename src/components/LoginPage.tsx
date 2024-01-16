import {Container, Typography, Stack, Box, TextField, Button, Link} from '@mui/material'
import React, {useState} from 'react'
import axios from "axios";

const LoginPage = () => {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const login = async () => {
        const response = await axios.post("https://localhost:7164/api/v1/users/login", {
            "username" : username,
            "password" : password
        })

        if (response.status === 201) {
            alert("Login Successful")
        } else {
            alert("You are a failure stephen")
        }
    }

    return (
        <Container sx={{border : 'solid blue', mt:"2.2rem", borderRadius:3, p : "2rem"}}>
            <Stack alignItems={"center"} spacing={3}>
                <Box>
                    <Typography variant={'h4'}>
                        Login
                    </Typography>
                </Box>
                <Stack spacing={4}>
                    <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <TextField label="Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)}/>
                </Stack>
                <Stack direction="row" spacing={4}>
                    <Button variant={"contained"} onClick={login}>
                        Login
                    </Button>
                    <Button variant={"contained"}>
                        <Link href="/signup" underline={"none"} sx={{color : "white"}}>Sign Up</Link>
                    </Button>
                </Stack>
            </Stack>
        </Container>
    )
}

export default LoginPage