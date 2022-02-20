import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Room from './components/Room'
import Contact from './components/Contact'
import Thanks from './components/Thanks'
import Hostel from './components/Hostel'
import Error from './components/Error'
import Gallery from './components/Gallery'
import Order from './components/Order'
import Header from "./components/Header";
import Footer from "./components/Footer";
ReactDOM.render(
	<BrowserRouter>
	<Header/>
		<Routes>
		<Route path="/order" element={<Order/>}/>
			<Route path="/" element={<Home/>}/>
			<Route path="/room" element={<Room/>}/>
			<Route path="/contact" element={<Contact/>}/>
			<Route path="/404" element={<Error/>}/>
			<Route path="/thanks" element={<Thanks/>}/>
			<Route path="/hostel" element={<Hostel/>}/>
			<Route path="/gallery" element={<Gallery/>}/>
		</Routes>
		<Footer/>
	</BrowserRouter>,
	document.getElementById("root")
);
