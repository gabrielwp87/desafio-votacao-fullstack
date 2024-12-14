"use client";
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid2,
    Radio, RadioGroup,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import MainContainer from "../../ui/Util/main-container.tsx";
import ReturnButton from "../../ui/Util/returnButton.tsx";
import {FormEvent, useState} from "react";
import {green, pink} from "@mui/material/colors";
import apiFetch from "../../axios/config.ts";

export default function Vote() {
    const [id, setId] = useState("");
    const [associatedId, setAssociatedId] = useState("");
    const [agendaId, setAgendaId] = useState("");
    const [sessionId, setSessionId] = useState("");
    const [vote, setVote] = useState("");

    const registerVote = async (e: FormEvent) => {
        e.preventDefault()
        console.log('Votando ...')
        console.log('ID do Voto: ', id)
        console.log('ID do Associado: ', id)
        console.log('ID da Pauta: ', agendaId)
        console.log('ID da Sessão: ', id)
        console.log('Voto: ', vote)

        const response = {id, associatedId, agendaId, sessionId, vote};
        await apiFetch.post('/agenda/session/associated/vote', {
            body: response,
        });
    }

    return (

        <MainContainer>
            <Grid2 display="flex" justifyContent="center" alignItems="center" size="grow">
                <h1>Votar</h1>
            </Grid2>

            <Box
                component="form"
                sx={{'& .MuiTextField-root': {m: 1, width: '45ch'}}}
                noValidate
                autoComplete="off"
                onSubmit={registerVote}
            >
                <Grid2 display="flex" justifyContent="center" alignItems="center" size="grow">
                    <Box sx={{'& .MuiTextField-root': {m: 1, width: '25ch'}}}>
                        <Typography variant="body2" gutterBottom >
                            Lembre-se que você só pode votar uma única vez,
                            precisando identificar o ID da pauta, da sessão e o seu
                            para que seja possível realizar seu voto.
                        </Typography>

                    </Box>
                </Grid2>

                <Grid2 display="flex" justifyContent="center" alignItems="center" size="grow">
                    <Stack spacing={2}>
                        <TextField
                            required
                            id="filled-required"
                            label="ID do Voto"
                            variant="filled"
                            onChange={(e) => setId(e.target.value)}
                        />
                        <TextField
                            required
                            id="filled-required"
                            label="ID do Associado"
                            variant="filled"
                            onChange={(e) => setAssociatedId(e.target.value)}
                        />
                        <TextField
                            required
                            id="filled-required"
                            label="ID da Pauta"
                            variant="filled"
                            onChange={(e) => setAgendaId(e.target.value)}
                        />
                        <TextField
                            required
                            id="filled-required"
                            label="ID da Sessão"
                            variant="filled"
                            onChange={(e) => setSessionId(e.target.value)}
                        />
                        <TextField
                            id="filled-required"
                            label="Descrição da Pauta"
                            multiline
                            rows={4}
                            slotProps={{
                                input: {
                                    readOnly: true,
                                },
                            }}
                            variant="filled"
                        />

                        <Grid2 display="flex" justifyContent="center" alignItems="center" size="grow">
                            <Box sx={{'& .MuiTextField-root': {m: 1, width: '25ch'}}}>
                                <Typography variant="body2" gutterBottom >
                                    Espaço onde deve ir a descrição da pauta que se está votando.
                                </Typography>

                            </Box>
                        </Grid2>

                        <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">Votar: </FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                onChange={(e) => setVote(e.target.value)}
                            >
                                <FormControlLabel  value="SIM" control={<Radio  sx={{
                                    color: green[800],
                                    '&.Mui-checked': {
                                        color: green[600],
                                    },
                                }}/>} label="SIM"
                                    onChange={() => setVote("SIM")}
                                />
                                <FormControlLabel color="danger" value="NÃO" control={<Radio sx={{
                                    color: pink[800],
                                    '&.Mui-checked': {
                                        color: pink[600],
                                    },
                                }}/>} label="NÃO"
                                    onChange={() => setVote("NÃO")}
                                />
                            </RadioGroup >
                        </FormControl>

                        <Button variant="contained" color="success" type="submit">
                            Votar
                        </Button>

                        <ReturnButton />
                    </Stack>

                </Grid2>
            </Box>


        </MainContainer>
    );
}