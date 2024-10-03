"use client";
import About from "@/pages/About"
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "@/pages/Login";
import Menu from "@/components/Menu";
import RegisterProduct from "@/pages/RegisterProduct";
import RegisterUser from "@/pages/RegisterUser"
import Store from "@/pages/Store";

const MainRoutes = () => {
    return (
        <>
            <Router>
                <Menu />
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/About" element={<About />}/>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/RegisterProduct" element={<RegisterProduct />}/>
                    <Route path="/RegisterUser" element={<RegisterUser />}/>
                    <Route path="/Store" element={<Store />}/>
                </Routes>
            </Router>
        </>
    );
};

export default MainRoutes;
