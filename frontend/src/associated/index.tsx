"use client";
import {Box, Button, Grid2, Stack, TextField} from "@mui/material";
import MainContainer from "../ui/Util/main-container.tsx";
import ReturnButton from "../ui/Util/returnButton.tsx";

export default function Associated() {


        return (

            <MainContainer>
                <Grid2 display="flex" justifyContent="center" alignItems="center" size="grow">
                <h1>Criar Associado</h1>
                </Grid2>

                <Box
                component="form"
                sx={{'& .MuiTextField-root': {m: 1, width: '45ch'}}}
                noValidate
                autoComplete="off"
                >
                <Grid2 display="flex" justifyContent="center" alignItems="center" size="grow">
                <Stack spacing={2}>
                    <TextField
                        required
                        id="filled-required"
                        label="ID do Associado"
                        variant="filled"
                        fullWidth />

                    <TextField
                        required
                        id="filled-required"
                        label="Nome"
                        variant="filled"/>

                    <TextField
                        required
                        id="filled-required"
                        label="CPF"
                        variant="filled"/>

                    <Button variant="contained" color="success">
                        Cadastrar
                    </Button>

                    <ReturnButton />
                </Stack>

                </Grid2>
            </Box>


            </MainContainer>
        );
}