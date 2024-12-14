"use client";
import {Box, Button, Grid2, Stack, TextField, Typography} from "@mui/material";
import MainContainer from "../../ui/Util/main-container.tsx";
import ReturnButton from "../../ui/Util/returnButton.tsx";
import {FormEvent, useState} from "react";
import apiFetch from "../../axios/config.ts";

export default function Agenda() {

    const [id, setId] = useState("");
    const [agendaId, setAgendaId] = useState("");
    const [duration, setDuration] = useState("");

    const createSession = async (e: FormEvent) => {
        e.preventDefault()
        console.log('Criando sessão...')
        console.log('ID da Sessão: ', id)
        console.log('ID da Pauta: ', agendaId)
        console.log('Duração: ', duration)

        const response = {id, agendaId, duration};
        await apiFetch.post('/associated', {
            body: response,
        });
    }

    return (

        <MainContainer>
            <Grid2 display="flex" justifyContent="center" alignItems="center" size="grow">
                <h1>Abrir uma Sessão de Votação</h1>
            </Grid2>

            <Box
                component="form"
                sx={{'& .MuiTextField-root': {m: 1, width: '45ch'}}}
                noValidate
                autoComplete="off"
                onSubmit={createSession}
            >
                <Grid2 display="flex" justifyContent="center" alignItems="center" size="grow">
                <Box sx={{'& .MuiTextField-root': {m: 1, width: '25ch'}}}>
                    <Typography variant="body2" gutterBottom >
                        Para abrir uma sessão de votação, é necessário informar o ID da sessão e o ID da pauta.
                    </Typography>

                </Box>
                </Grid2>

                <Grid2 display="flex" justifyContent="center" alignItems="center" size="grow">
                    <Stack spacing={2}>
                        <TextField
                            required
                            id="filled-required"
                            label="ID da Sessão"
                            variant="filled"
                            onChange={(e) => setId(e.target.value)}
                        />
                        <TextField
                            required
                            id="filled-required"
                            label="ID da Pauta"
                            variant="filled"
                            onChange={(e) => setAgendaId(e.target.value)}
                        />
                        <TextField
                            id="filled-number"
                            label="Duração da Sessão (em minutos)"
                            type="number"
                            variant="filled"
                            inputProps={{ min: 1 }}
                            slotProps={{
                                inputLabel: {
                                    shrink: true,

                                },
                            }}
                            onChange={(e) => setDuration(e.target.value)}
                        />

                        <Button variant="contained" color="success" type="submit">
                            Abrir Sessão
                        </Button>

                        <ReturnButton />
                    </Stack>

                </Grid2>
            </Box>


        </MainContainer>
    );
}