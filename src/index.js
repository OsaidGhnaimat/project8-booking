import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Room from './components/Room'
import Contact from './components/Contact'
import hotel from './components/hotel'
import Gallery from './components/Gallery'
import Order from './components/Order'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './components/Home'

 
ReactDOM.render(
	<BrowserRouter>
	<Header/>
		<Routes>
		<Route path="/order" element={<Order/>}/>
			<Route path="/" element={<Home/>}/>
			<Route path="/room" element={<Room/>}/>
			<Route path="/contact" element={<Contact/>}/>
			<Route path="/hotel" element={<hotel/>}/>
			<Route path="/gallery" element={<Gallery/>}/>
		</Routes>
		<Footer/>
	</BrowserRouter>,
	document.getElementById("root")
);
