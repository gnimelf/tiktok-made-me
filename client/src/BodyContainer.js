import React, { useState } from "react";
import Home from "./pages/Home";
import Navi from "./components/Navi";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";


export default function BodyContainer() {
    const [mainSection, setMainSection] = useState("Home");

    const renderMainSection = () => {
        if (mainSection === "Home") {
            return <Home />;
        }
        if (mainSection === "Login") {
            return <Login />;
        }
        if (mainSection === "Signup") {
            return <Signup />;
        }
    };

    const handlePageChange = (page) => setMainSection(page);

    return (
        <div>
            <Header />
            <Navi handlePageChange={handlePageChange}/>

            {renderMainSection()}
        </div>
    );
}
