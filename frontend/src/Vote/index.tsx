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
import MainContainer from "../ui/Util/main-container.tsx";
import ReturnButton from "../ui/Util/returnButton.tsx";
import React from "react";
import {green, pink} from "@mui/material/colors";

export default function Agenda() {
    const [value, setValue] = React.useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

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
                            label="ID do Associado"
                            variant="filled"
                        />
                        <TextField
                            required
                            id="filled-required"
                            label="ID da Pauta"
                            variant="filled"
                        />
                        <TextField
                            required
                            id="filled-required"
                            label="ID da Sessão"
                            variant="filled"
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
                            variant="filled"/>

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
                                value={value}
                                onChange={handleChange}
                            >
                                <FormControlLabel  value="YES" control={<Radio  sx={{
                                    color: green[800],
                                    '&.Mui-checked': {
                                        color: green[600],
                                    },
                                }}/>} label="SIM" />
                                <FormControlLabel color="danger" value="NO" control={<Radio sx={{
                                    color: pink[800],
                                    '&.Mui-checked': {
                                        color: pink[600],
                                    },
                                }}/>} label="NÃO" />
                            </RadioGroup>
                        </FormControl>

                        <Button variant="contained" color="success">
                            Votar
                        </Button>

                        <ReturnButton />
                    </Stack>

                </Grid2>
            </Box>


        </MainContainer>
    );
}