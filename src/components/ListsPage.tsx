import React, {useState} from 'react'
import {Container, Typography, Stack, Box, TextField, Button, Link} from '@mui/material'

const ListsPage = () => {

    const [lists, setLists] = useState<[]>([])
    const [items, setItems] = useState<[]>([])
    const [recipes, setRecipes] = useState<[]>([])

    return (
        <Container>
            <Stack direction="row">
                <Stack>
                    {lists.map((list) => (
                        <Button>
                            {list}
                        </Button>
                    ))}
                </Stack>
                <Stack>
                    {items.map((item) => (
                        <Typography variant={"h6"}>
                            {item}
                        </Typography>
                    ))}
                </Stack>
                <Stack>
                    {recipes.map((recipe) => (
                        <Typography>
                            {recipe}
                        </Typography>
                    ))}
                </Stack>
            </Stack>
        </Container>
    )
}