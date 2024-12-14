"use client";
import apiFetch from "../../axios/config";
import {
    Box, Button,
    Grid2,
    Stack, TextField,
    Typography
} from "@mui/material";
import MainContainer from "../../ui/Util/main-container.tsx";
import ReturnButton from "../../ui/Util/returnButton.tsx";
import {useState} from "react";

export default function VoteResult() {
    const [sessionId, setSessionId] = useState("");
    const [voteResult, setVoteResult] = useState<{ voteYes: string; voteNo: string; totalVotes: string }[]>([]);

    const getVoteResult = async () => {
        setVoteResult([]); // Reset voteResult state
        try {
            const response = await apiFetch.get(`/agenda/session/associated/result`, {
                params: { sessionId }
            });

            const data = response.data.body;
            setVoteResult(data);

            // { voteYes: "2", voteNo: "1", totalVotes: "3" }
            console.log(voteResult);
            console.log(voteResult.length);

            console.log(data);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <MainContainer>
            <Grid2 display="flex" justifyContent="center" alignItems="center" size="grow">
                <h1>Resultado das Votações</h1>
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
                            id="sessionID"
                            label="Indique o ID da Sessão"
                            variant="filled"
                            color="success"
                            value={sessionId}
                            onChange={(e) => setSessionId(e.target.value)}
                        />
                        <Button
                            variant="outlined"
                            color="success"
                            onClick={getVoteResult}
                        >
                            Pesquisar Resultado
                        </Button>

                        <Box sx={{'& .MuiTextField-root': {m: 1, width: '35ch'}}}>
                            {voteResult.length === 0 ? (
                                <Typography variant="body2" gutterBottom>
                                    <br/><br/><br/>
                                    Nenhuma votação foi realizada.
                                    <br/><br/><br/>
                                </Typography>
                            ) : (
                                <Typography variant="body2" gutterBottom>
                                    <br/><br/><br/>
                                    Votos Sim: {voteResult[1]?.voteYes}<br/>
                                    Votos Não: {voteResult[0]?.voteNo}<br/>
                                    Total de Votos: {voteResult[0]?.totalVotes}
                                </Typography>
                            )}
                        </Box>
                    </Stack>
                </Grid2>

                <Grid2 display="flex" justifyContent="center" alignItems="center" size="grow">
                    <Stack spacing={2}>
                        <ReturnButton />
                    </Stack>
                </Grid2>
            </Box>
        </MainContainer>
    );
}