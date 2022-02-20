import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Room from './components/Room'

import Header from "./components/Header";
import Footer from "./components/Footer";
ReactDOM.render(
	<BrowserRouter>
	<Header/>
		{/* <Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/room" element={<Room/>}/>
		</Routes> */}
		<Room></Room>
		<Footer/>
	</BrowserRouter>,
	document.getElementById("root")
);
