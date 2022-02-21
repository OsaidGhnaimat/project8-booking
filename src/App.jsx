import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Room from "./components/Room";
import Contact from "./components/Contact";
import Hotel from "./components/Hotel";
import Gallery from "./components/Gallery";
import Order from "./components/Order";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = () => {
    const data = [
		{
			id: 1,
			name: "hotel1",
			des: "description here",
			img: "img/index/about.jpg",
			price: "50",
		},
		{
			id: 2,
			name: "hotel2",
			des: "description here",
			img: "img/index/about.jpg",
			price: "50",
		},
	];
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/order" element={<Order />} />
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/hotel" element={<Hotel data={ data } />} />
                <Route path="/hotel/:name" element={<Room data={ data } />} />
				<Route path="/gallery" element={<Gallery />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
