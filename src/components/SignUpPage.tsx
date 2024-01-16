import React, {useState} from 'react'
import {Container, Typography, Stack, Box, TextField, Button, Link} from '@mui/material'

const SignUpPage = () => {

    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirm, setConfirm] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const checkPassword = () : boolean => {
        return password === confirm
    }

    const signUp = async () => {
        try {
            if (!checkPassword()) {
                throw new Error("Passwords must be the same")
            }
        } catch (error : any) {
            setErrorMessage(error.message)
            setShowErrorMessage(true)
        }
    }

    return (
        <Container sx={{border : "solid blue", mt:"2.2rem", borderRadius:3, p : "2rem"}}>
            <Stack alignItems={"center"} spacing={3}>
                <Box>
                    <Typography variant={"h4"}>
                        Sign Up
                    </Typography>
                </Box>
                <Stack direction={"row"} spacing={4}>
                    <TextField label={"First Name"} value={firstName} onChange={e => setFirstName(e.target.value)} />
                    <TextField label={"Last Name"} value={lastName} onChange={e => setLastName(e.target.value)} />
                </Stack>
                <Stack direction={"row"} spacing={4}>
                    <TextField label={"Email"} value={email} onChange={e => setEmail(e.target.value)} />
                    <TextField label={"Username"} value={username} onChange={e => setUsername(e.target.value)} />
                </Stack>
                <Stack direction={"row"} spacing={4}>
                    <TextField label={"Password"} value={password} type="password" onChange={e => setPassword(e.target.value)} />
                    <TextField label={"Confirm Password"} value={confirm} type="password" onChange={e => setConfirm(e.target.value)} />
                </Stack>
                <Stack direction={"row"} spacing={4}>
                    <Button variant={"contained"}>
                        <Link href="/" sx={{color: 'white'}} underline={"none"}>Login</Link>
                    </Button>
                    <Button variant={"contained"}>
                        Sign Up
                    </Button>
                </Stack>
            </Stack>
        </Container>
    )
}

export default SignUpPage