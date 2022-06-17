import React from "react";
import { Stack } from "@mui/material";
import { Oval } from "react-loader-spinner";

const Loader = () => {
    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            width="100%"
        >
            <Oval
                color="black"
                secondaryColor="grey"
                height="70"
                width="70"
                strokeWidth="5"
            />
        </Stack>
    );
};

export default Loader;
