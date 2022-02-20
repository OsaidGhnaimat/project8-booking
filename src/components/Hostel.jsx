import React from "react";
import "./assest/css/hostel.min.css";
const hostel = () => {
	return (
		<main className="rooms section">
			<header className="page" style={{marginTop:'0px'}}>
				<div className="container">
					<ul className="breadcrumbs d-flex flex-wrap align-content-center">
						<li className="list-item">
							<a className="link" href="index.html">
								Home
							</a>
						</li>
						<li className="list-item">
							<a className="link" href="#">
								Rooms
							</a>
						</li>
					</ul>
					<h1 className="page_title">Rooms</h1>
				</div>
			</header>
			<div className="container">
				<ul className="rooms_list">
					<li
						className="rooms_list-item aos-init aos-animate"
						data-order="1"
						data-aos="fade-up"
					>
						<div className="item-wrapper d-md-flex">
							<div className="media">
								<img
									className="lazy entered error"
									data-src="img/rooms/01.jpg"
									src="img/rooms/01.jpg"
									alt="media"
									data-ll-status="error"
								/>
							</div>
							<div className="main d-md-flex justify-content-between">
								<div className="main_info d-md-flex flex-column justify-content-between">
									<a className="main_title h4" href="room.html">
										Standard Twin Room Private Shared Bathroom
									</a>
									<p className="main_description">
										Diam phasellus vestibulum lorem sed risus ultricies
										tristique.
									</p>
									<div className="main_amenities">
										<span className="main_amenities-item d-inline-flex align-items-center">
											<i className="icon-user icon"></i> 2 Sleeps
										</span>
										<span className="main_amenities-item d-inline-flex align-items-center">
											<i className="icon-bunk_bed icon"></i> 1 bunk bed
										</span>
									</div>
								</div>
								<div className="main_pricing d-flex flex-column align-items-md-end justify-content-md-between">
									<div className="wrapper d-flex flex-column">
										<span className="main_pricing-item">
											<span className="h2">$29</span> / 1 night
										</span>
										<span className="main_pricing-item">
											<span className="h4">$100</span> / 7 nights
										</span>
									</div>
									<a className="theme-element theme-element--accent btn" href="#">
										Book now
									</a>
								</div>
							</div>
						</div>
					</li>
					<li
						className="rooms_list-item aos-init aos-animate"
						data-order="2"
						data-aos="fade-up"
					>
						<div className="item-wrapper d-md-flex">
							<div className="media">
								<img
									className="lazy entered error"
									data-src="img/rooms/02.jpg"
									src="img/rooms/02.jpg"
									alt="media"
									data-ll-status="error"
								/>
							</div>
							<div className="main d-md-flex justify-content-between">
								<div className="main_info d-md-flex flex-column justify-content-between">
									<a className="main_title h4" href="room.html">
										Standard 6 Bed Female Dorm Shared Bathroom
									</a>
									<p className="main_description">
										Diam phasellus vestibulum lorem sed risus ultricies
										tristique.
									</p>
									<div className="main_amenities">
										<span className="main_amenities-item d-inline-flex align-items-center">
											<i className="icon-user icon"></i> 2 Sleeps
										</span>
										<span className="main_amenities-item d-inline-flex align-items-center">
											<i className="icon-bunk_bed icon"></i> 1 bunk bed
										</span>
									</div>
								</div>
								<div className="main_pricing d-flex flex-column align-items-md-end justify-content-md-between">
									<div className="wrapper d-flex flex-column">
										<span className="main_pricing-item">
											<span className="h2">$19</span> / 1 night
										</span>
										<span className="main_pricing-item">
											<span className="h4">$80</span> / 7 nights
										</span>
									</div>
									<a className="theme-element theme-element--accent btn" href="#">
										Book now
									</a>
								</div>
							</div>
						</div>
					</li>
					<li
						className="rooms_list-item aos-init aos-animate"
						data-order="3"
						data-aos="fade-up"
					>
						<div className="item-wrapper d-md-flex">
							<div className="media">
								<img
									className="lazy entered error"
									data-src="img/rooms/03.jpg"
									src="img/rooms/03.jpg"
									alt="media"
									data-ll-status="error"
								/>
							</div>
							<div className="main d-md-flex justify-content-between">
								<div className="main_info d-md-flex flex-column justify-content-between">
									<a className="main_title h4" href="room.html">
										Comfort Superior Double Bed Private Ensuite
									</a>
									<p className="main_description">
										Diam phasellus vestibulum lorem sed risus ultricies
										tristique.
									</p>
									<div className="main_amenities">
										<span className="main_amenities-item d-inline-flex align-items-center">
											<i className="icon-user icon"></i> 3 Sleeps
										</span>
										<span className="main_amenities-item d-inline-flex align-items-center">
											<i className="icon-twin_bed icon"></i> 1 full bed
										</span>
										<span className="main_amenities-item d-inline-flex align-items-center">
											<i className="icon-bunk_bed icon"></i> 1 twin bed
										</span>
									</div>
								</div>
								<div className="main_pricing d-flex flex-column align-items-md-end justify-content-md-between">
									<div className="wrapper d-flex flex-column">
										<span className="main_pricing-item">
											<span className="h2">$99</span> / 1 night
										</span>
										<span className="main_pricing-item">
											<span className="h4">$220</span> / 7 nights
										</span>
									</div>
									<a className="theme-element theme-element--accent btn" href="#">
										Book now
									</a>
								</div>
							</div>
						</div>
					</li>
					<li
						className="rooms_list-item aos-init aos-animate"
						data-order="4"
						data-aos="fade-up"
					>
						<div className="item-wrapper d-md-flex">
							<div className="media">
								<img
									className="lazy entered error"
									data-src="img/rooms/04.jpg"
									src="img/rooms/04.jpg"
									alt="media"
									data-ll-status="error"
								/>
							</div>
							<div className="main d-md-flex justify-content-between">
								<div className="main_info d-md-flex flex-column justify-content-between">
									<a className="main_title h4" href="room.html">
										Standard Triple Room with Shared Bathroom
									</a>
									<p className="main_description">
										Diam phasellus vestibulum lorem sed risus ultricies
										tristique.
									</p>
									<div className="main_amenities">
										<span className="main_amenities-item d-inline-flex align-items-center">
											<i className="icon-user icon"></i> 2 Sleeps
										</span>
										<span className="main_amenities-item d-inline-flex align-items-center">
											<i className="icon-twin_bed icon"></i> 2 twin beds
										</span>
									</div>
								</div>
								<div className="main_pricing d-flex flex-column align-items-md-end justify-content-md-between">
									<div className="wrapper d-flex flex-column">
										<span className="main_pricing-item">
											<span className="h2">$29</span> / 1 night
										</span>
										<span className="main_pricing-item">
											<span className="h4">$115</span> / 7 nights
										</span>
									</div>
									<a className="theme-element theme-element--accent btn" href="#">
										Book now
									</a>
								</div>
							</div>
						</div>
					</li>
					<li
						className="rooms_list-item aos-init aos-animate"
						data-order="5"
						data-aos="fade-up"
					>
						<div className="item-wrapper d-md-flex">
							<div className="media">
								<img
									className="lazy entered error"
									data-src="img/rooms/05.jpg"
									src="img/rooms/05.jpg"
									alt="media"
									data-ll-status="error"
								/>
							</div>
							<div className="main d-md-flex justify-content-between">
								<div className="main_info d-md-flex flex-column justify-content-between">
									<a className="main_title h4" href="room.html">
										Standard Double Bed Private Shared Bathroom
									</a>
									<p className="main_description">
										Diam phasellus vestibulum lorem sed risus ultricies
										tristique.
									</p>
									<div className="main_amenities">
										<span className="main_amenities-item d-inline-flex align-items-center">
											<i className="icon-user icon"></i> 2 Sleeps
										</span>
										<span className="main_amenities-item d-inline-flex align-items-center">
											<i className="icon-twin_bed icon"></i> 1 full bed
										</span>
										<span className="main_amenities-item d-inline-flex align-items-center">
											<i className="icon-sofa icon"></i> 2 sofa beds
										</span>
									</div>
								</div>
								<div className="main_pricing d-flex flex-column align-items-md-end justify-content-md-between">
									<div className="wrapper d-flex flex-column">
										<span className="main_pricing-item">
											<span className="h2">$59</span> / 1 night
										</span>
										<span className="main_pricing-item">
											<span className="h4">$210</span> / 7 nights
										</span>
									</div>
									<a className="theme-element theme-element--accent btn" href="#">
										Book now
									</a>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</main>
	);
};

export default hostel;
