import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
    return (
        <Link to={`/exercise/${exercise.id}`} className="exercise-card">
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
            <Stack direction="row">
                <Button
                    sx={{
                        ml: "21px",
                        color: "#fff",
                        background: "#FFA9A9",
                        fontSize: "14px",
                        fontFamily: "Josefin Sans",
                        textTransform: "capitalize",
                    }}
                >
                    {exercise.bodyPart}
                </Button>
                <Button
                    sx={{
                        ml: "21px",
                        color: "#fff",
                        background: "#FFA9A9",
                        fontSize: "14px",
                        fontFamily: "Josefin Sans",
                        textTransform: "capitalize",
                    }}
                >
                    {exercise.target}
                </Button>
            </Stack>
            <Typography
                ml="21px"
                color="#000"
                fontWeight="400"
                fontFamily="Josefin Sans"
                sx={{ fontSize: { lg: "24px", xs: "20px" } }}
                mt="11px"
                pb="10px"
                textTransform="capitalize"
            >
                {exercise.name}
            </Typography>
        </Link>
    );
};

export default ExerciseCard;
