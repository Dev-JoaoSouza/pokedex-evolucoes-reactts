import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { Evolution } from "../pages/evolution";

const AppRouter = () => {
    return (
        <HashRouter basename="/">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/evolution" element={<Evolution />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </HashRouter>
    )
};

export { AppRouter };