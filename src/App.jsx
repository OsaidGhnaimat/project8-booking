import React from "react";
import { Routes, Route } from "react-router-dom";
import Room from "./components/Room";
import Contact from "./components/Contact";
import Hotel from "./components/Hotel";
import Order from "./components/Order";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Gallery from "./components/Gallery";

const App = () => {
    const data = [
		{
			id: 1,
			name: "Istanbule",
			des: "description here",
			img: "img/index/about.jpg",
			roomimg1: "../img/room/01.jpg",
			roomimg2: "../img/room/02.jpg",
			roomimg3: "../img/room/03.jpg",
			price: "50",
		},
		{
			id: 2,
			name: "Fateh",
			des: "description here",
			img: "img/index/about.jpg",
			roomimg1: "../img/room/01.jpg",
			roomimg2: "../img/room/02.jpg",
			roomimg3: "../img/room/03.jpg",
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
				<Route path="/hotels" element={<Hotel data={ data } />} />
                <Route path="/hotels/:name" element={<Room data={ data } />} />
				<Route path="/gallery" element={<Gallery />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
