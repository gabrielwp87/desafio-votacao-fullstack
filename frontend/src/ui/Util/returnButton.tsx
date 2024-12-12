"use client";

import {Navigate} from "react-router-dom";
import {Button} from "@mui/material";
import React from "react";

function ReturnButton() {
    const [goToHome, setGoToHome] = React.useState(false);
    if (goToHome) {
        return <Navigate to="/" />;
    }
    return (
    <Button variant="contained" color="success" onClick={() => {
        setGoToHome(true);
    }}>
        Voltar
    </Button>

    );
}

export default ReturnButton;
