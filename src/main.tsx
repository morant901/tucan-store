import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import ListFavorites from "./pages/ListFavorites.tsx";
import Navbar from "./components/Navbar.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter basename="/tucan-store">
            <Navbar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/favorites" element={<ListFavorites />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
