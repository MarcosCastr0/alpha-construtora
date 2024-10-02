"use client";
import About from "@/pages/About"
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "@/pages/Login";
import Menu from "@/components/Menu";
import RegisterProduct from "@/pages/RegisterProduct";

const MainRoutes = () => {
    return (
        <>
            <Router>
                <Menu />
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/About" element={<About />}/>
                    <Route path="/login" element={<Login />} />
                    <Route path="/RegisterProduct" element={<RegisterProduct />}/>
                </Routes>
            </Router>
        </>
    );
};

export default MainRoutes;
