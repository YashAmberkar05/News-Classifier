import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import { About } from "./Pages/About.jsx";
import { History } from "./Pages/History.jsx";
import { Contact } from "./Pages/Contact.jsx";
import { TC } from "./Pages/TC.jsx";
import "./index.css";

import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
            <Route path='/history' element={<History />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/terms&conditions' element={<TC />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
