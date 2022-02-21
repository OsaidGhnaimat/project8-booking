import React from "react";
import OneHotel from "./OneHotel";
import { Link } from "react-router-dom";
import "./assest/css/hotel.min.css";

const hotel = ({ data }) => {
	return (
		<main className="rooms section">
			<header className="page" style={{ marginTop: "0px" }}>
				<div className="container">
					<ul className="breadcrumbs d-flex flex-wrap align-content-center">
						<li className="list-item">
							<Link className="link" to="/">
								Home
							</Link>
						</li>
					</ul>
					<h1 className="page_title">Student Hotels</h1>
				</div>
			</header>
			<div className="container">
				<ul className="rooms_list">
					{data.map((list) => (
						<OneHotel
							key={list.id}
							name={<Link to={`/hotels/${list.name}`}>{list.name}</Link>}
							des={list.des}
							img={list.img}
							price={list.price}
						/>
					))}
				</ul>
			</div>
		</main>
	);
};

export default hotel;
