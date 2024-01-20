import {Container, Typography, Stack, Box, TextField, Button, Link, CircularProgress} from '@mui/material'
import React, {useState} from 'react'
import axios from "axios";

const LoginPage = () => {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)


    const login = async () => {

        try {

            setLoading(true)
            const response = await axios.post("http://localhost:5065/api/v1/users/login", {
                "username" : username,
                "password" : password
            })

            if (response.status !== 200) {
                throw new Error("Could not login")
            }

            setErrorMessage("Logged in successfully")

            setShowErrorMessage(true)
            setLoading(false)

        } catch (error : any) {
            setLoading(false)
            clearData()
            setErrorMessage(error.message)
            setShowErrorMessage(true)
        }
    }

    const clearData = () => {
        setUsername('')
        setPassword('')
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
                    <Button variant={"contained"} onClick={login} disabled={loading}>
                        Login
                    </Button>
                    <Button variant={"contained"} disabled={loading}>
                        <Link href="/signup" underline={"none"} sx={{color : "white"}}>Sign Up</Link>
                    </Button>
                </Stack>
                {loading &&
                    <CircularProgress />
                }

                {showErrorMessage &&
                    <Typography variant={"h6"} sx={{color : "red"}}>
                        {errorMessage}
                    </Typography>
                }
            </Stack>
        </Container>
    )
}

export default LoginPage