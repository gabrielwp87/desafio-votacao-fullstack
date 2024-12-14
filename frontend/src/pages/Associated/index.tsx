"use client";
import {Box, Button, Grid2, Stack, TextField} from "@mui/material";
import MainContainer from "../../ui/Util/main-container.tsx";
import ReturnButton from "../../ui/Util/returnButton.tsx";
import apiFetch from "../../axios/config";
import {FormEvent, useState} from "react";

export default function Associated() {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [cpf, setCPF] = useState("");

    const createAssociated = async (e: FormEvent) => {
        e.preventDefault()
        console.log('Criando associado...')
        console.log('ID: ', id)
        console.log('Nome: ', name)
        console.log('Descrição: ', cpf)

        const response = {id, name, cpf};
        await apiFetch.post('/associated', {
            body: response,
        });
    }

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
                onSubmit={createAssociated}
                >
                <Grid2 display="flex" justifyContent="center" alignItems="center" size="grow">
                <Stack spacing={2}>
                    <TextField
                        required
                        id="filled-required"
                        label="ID do Associado"
                        variant="filled"
                        fullWidth
                        onChange={(e) => setId(e.target.value)}
                    />

                    <TextField
                        required
                        id="filled-required"
                        label="Nome"
                        variant="filled"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                        required
                        id="filled-required"
                        label="CPF"
                        variant="filled"
                        onChange={(e) => setCPF(e.target.value)}
                    />

                    <Button variant="contained" color="success" type="submit">
                        Cadastrar
                    </Button>

                    <ReturnButton />
                </Stack>

                </Grid2>
            </Box>


            </MainContainer>
        );
}