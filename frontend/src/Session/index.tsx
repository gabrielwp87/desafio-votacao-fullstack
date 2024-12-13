"use client";
import {Box, Button, Grid2, Stack, TextField, Typography} from "@mui/material";
import MainContainer from "../ui/Util/main-container.tsx";
import ReturnButton from "../ui/Util/returnButton.tsx";

export default function Agenda() {


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
                        />
                        <TextField
                            required
                            id="filled-required"
                            label="ID da Pauta"
                            variant="filled"
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
                        />

                        <Button variant="contained" color="success">
                            Abrir Sessão
                        </Button>

                        <ReturnButton />
                    </Stack>

                </Grid2>
            </Box>


        </MainContainer>
    );
}