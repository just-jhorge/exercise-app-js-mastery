import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#FFF3F4">
            <Stack
                gap="40px"
                sx={{ alignItems: "center" }}
                flexWrap="wrap"
                px="40px"
                pt="24px"
            >
                <img src={Logo} alt="Gold Gym" />
            </Stack>
            <Typography
                variant="h5"
                sx={{ fontSize: { lg: "18px", xs: "16px" }, color: "gray" }}
                mt="41px"
                textAlign="center"
                pb="40px"
            >
                Made with ❤️ by George
            </Typography>
        </Box>
    );
};

export default Footer;
