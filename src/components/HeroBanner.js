import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Banner from "../assets/images/banner.png";

const HeroBanner = () => {
    return (
        <Box
            p="20px"
            position="relative"
            sx={{
                mt: { xs: "50px", lg: "100px" },
            }}
        >
            <Typography
                color="#FF2625"
                fontWeight="700"
                fontSize="46px"
                fontFamily="Josefin Sans"
                textTransform="uppercase"
            >
                fitness club
            </Typography>
            <Typography
                fontWeight="600"
                fontFamily="Josefin Sans"
                sx={{ fontSize: { lg: "40px", xs: "36px" } }}
                m="30px 0 23px 0"
            >
                Sweat, Smile <br /> And Repeat
            </Typography>
            <Typography
                fontFamily="Josefin Sans"
                fontWeight="300"
                fontSize="20px"
                lineHeight="35px"
            >
                Check out the most effective exercises <br /> personalized to
                you
            </Typography>
            <Stack>
                <a
                    href="#exercises"
                    style={{
                        marginTop: "45px",
                        textDecoration: "none",
                        width: "200px",
                        textAlign: "center",
                        backgroundColor: "#FF2625",
                        padding: "14px",
                        fontSize: "18px",
                        color: "white",
                        borderRadius: "4px",
                    }}
                >
                    Explore Exercises
                </a>
            </Stack>
            <Typography
                fontWeight={700}
                color="transparent"
                sx={{
                    marginLeft: "-18px",
                    marginTop: "15px",
                    opacity: "0.2",
                    textTransform: "uppercase",
                    display: { xs: "none", md: "block" },
                    fontSize: "250px",
                    WebkitTextStroke: "2px #FF2625",
                }}
            >
                Exercise
            </Typography>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
                <img src={Banner} alt="Woman Gym" className="hero-banner" />
            </Box>
        </Box>
    );
};

export default HeroBanner;
