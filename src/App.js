import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
    return (
        <Box
            width="400px"
            sx={{ width: { md: "1288px", xl: "1488px" } }}
            m="auto"
        >
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </Box>
    );
};

export default App;
