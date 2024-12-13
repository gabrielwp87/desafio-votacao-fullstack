"use client";
import {
    Box,
    Grid2,
    Stack,
    Typography
} from "@mui/material";
import MainContainer from "../ui/Util/main-container.tsx";
import ReturnButton from "../ui/Util/returnButton.tsx";

export default function VoteResult() {


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
                    <Box sx={{'& .MuiTextField-root': {m: 1, width: '25ch'}}}>
                        <Typography variant="body2" gutterBottom >
                            Aqui você pode conferir o resultado de todas as votações realizadas.
                        </Typography>

                    </Box>
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