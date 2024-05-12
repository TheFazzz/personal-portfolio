import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import ScrollToTop from "./components/common/ScrollToTop";

import "./app.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter basename="/personal-portfolio">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <ScrollToTop />
            </BrowserRouter>
        </div>
    );
}

export default App;
