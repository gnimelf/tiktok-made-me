import React, { useState } from "react";
import Home from "./pages/Home";
import Navi from "./components/Navi";
import Login from "./pages/Login";
import Header from "./components/Header";


export default function BodyContainer() {
    const [mainSection, setMainSection] = useState("Home");

    const renderMainSection = () => {
        if (mainSection === "Home") {
            return <Home />;
        }
        if (mainSection) {
            return <Login />;
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
