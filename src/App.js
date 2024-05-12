import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import ScrollToTop from "./components/common/ScrollToTop";

import "./app.css";

function App() {

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
			</Routes>
            <ScrollToTop />
		</div>
	);
}

export default App;
