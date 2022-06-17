import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import { fetchData, exerciseOptions } from "../utils/fetchData";

const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [bodyParts, setBodyParts] = useState([]);

    // this method is used to find all the body parts associated with an exercise, all, shoulder, back...
    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData(
                "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
                exerciseOptions
            );
            setBodyParts(["all", ...bodyPartsData]);
        };

        fetchExercisesData();
    }, []);

    // searching for exercises
    const handleSearchSubmit = async () => {
        if (searchTerm) {
            // first of all, we search for all exercises from the api
            const exerciseData = await fetchData(
                "https://exercisedb.p.rapidapi.com/exercises",
                exerciseOptions
            );
            // we then filter the response and bring out the exercises that matches the searchTerm input
            const searchedExercises = exerciseData.filter(
                (exercise) =>
                    exercise.name.toLowerCase().includes(searchTerm) ||
                    exercise.target.toLowerCase().includes(searchTerm) ||
                    exercise.equipment.toLowerCase().includes(searchTerm) ||
                    exercise.bodyPart.toLowerCase().includes(searchTerm)
            );

            setSearchTerm("");
            setExercises(searchedExercises);
        } else {
            return;
        }
    };

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography
                fontWeight={700}
                fontFamily="Josefin Sans"
                textAlign="center"
                mb="49px"
                sx={{
                    fontSize: { lg: "44px", xs: "30px" },
                }}
            >
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    height="76px"
                    type="text"
                    value={searchTerm}
                    placeholder="Search Exercises..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{
                        input: {
                            fontWeight: "400",
                            border: "none",
                            borderRadius: "4px",
                        },
                        width: { lg: "1170px", xs: "350px" },
                        backgroundColor: "#FFF",
                        borderRadius: "40px",
                    }}
                />
                <Button
                    className="search-btn"
                    onClick={handleSearchSubmit}
                    sx={{
                        backgroundColor: "#FF2625",
                        color: "#FFF",
                        textTransform: "none",
                        width: { lg: "173px", xs: "80px" },
                        height: "56px",
                        position: "absolute",
                        right: "0px",
                        fontSize: { lg: "20px", xs: "14px" },
                    }}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
                <HorizontalScrollbar
                    data={bodyParts}
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart}
                />
            </Box>
        </Stack>
    );
};

export default SearchExercises;
