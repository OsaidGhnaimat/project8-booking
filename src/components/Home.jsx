import React from "react";
import "./assest/css/index.min.css";

const Home = () => {
	return (
		<main>
			<section className="about promo section">
				<div className="container container--about d-xl-flex align-items-center">
					<div className="about_main">
						<h2 className="about_main-header">
							Your travel journey starts here
						</h2>
						<p className="about_main-text">
							
							Whether you're a foodie, museum lover or history buff, there's an
							Istanbul private tour that's perfect for you!
						</p>
						<ul className="about_main-list d-sm-flex flex-wrap">
							<li className="about_main-list_item d-flex flex-column flex-sm-row align-items-center">
								<span className="icon">
									<i className="fal fa-island-tropical"></i>
								</span>
								<p className="text">Amazing tours</p>
							</li>
							<li className="about_main-list_item d-flex flex-column flex-sm-row align-items-center">
								<span className="icon">
									<i className="fal fa-badge-percent"></i>
								</span>
								<p className="text">Competitive prices</p>
							</li>
							<li className="about_main-list_item d-flex flex-column flex-sm-row align-items-center">
								<span className="icon">
									<i className="fal fa-hot-tub"></i>
								</span>
								<p className="text">Comfortable hostel</p>
							</li>
							<li className="about_main-list_item d-flex flex-column flex-sm-row align-items-center">
								<span className="icon">
									<i className="fal fa-award"></i>
								</span>
								<p className="text">Learn Turkish</p>
							</li>
						</ul>
						<div className="about_main-action d-flex flex-column-reverse flex-sm-row align-items-center">
							<div className="wrapper">
								<a
									className="about_main-action_item btn theme-element theme-element--accent"
									href="hostel.html"
								>
									Book now
								</a>
							</div>
							<div className="wrapper">
								<a
									className="about_main-action_item link link--arrow"
									href="contact.html"
								>
									contact us <i className="icon-arrow_right icon"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="about_media">
						<img
							className="lazy"
							data-src="img/index/about.jpg"
							src="img/index/about.jpg"
							alt="media"
						/>
						<a
							className="video-play d-inline-flex align-items-center justify-content-center"
							href="#"
						>
							<i className="icon-play icon"></i>
						</a>
					</div>
				</div>
			</section>
			<section className="rooms section--blockbg section--nopb">
				<div className="container">
					<div className="rooms_header d-sm-flex justify-content-between align-items-center">
						<h2 className="rooms_header-title">Hostel</h2>
						<div className="wrapper">
							<a
								className="btn theme-element theme-element--light"
								href="rooms.html"
							>
								View all hostels
							</a>
						</div>
					</div>
					<ul className="rooms_list d-md-flex flex-wrap">
						<li className="rooms_list-item col-md-6 col-xl-4">
							<div className="item-wrapper d-md-flex flex-column">
								<div className="media">
									<img className="lazy" src="img/hostel/3.jpg" alt="media" />
									<span className="media_label media_label--pricing">
										<span className="price h4">of 290JD</span> / 15 nights
									</span>
								</div>
								<div className="main d-md-flex flex-column justify-content-between flex-grow-1">
									<a
										className="main_title h4"
										href="room.html"
										data-shave="true"
									>
										Double Room with Private Bathroom
									</a>
									<div className="main_amenities">
										<span className="main_amenities-item d-inline-flex align-items-center">
											<a
												className="link link--arrow d-inline-flex align-items-center"
												href="#"
											>
												More Option<i className="icon-arrow_right icon"></i>
											</a>
										</span>
									</div>
								</div>
							</div>
						</li>

						<li className="rooms_list-item col-md-6 col-xl-4">
							<div className="item-wrapper d-md-flex flex-column">
								<div className="media">
									<img className="lazy" src="img/hostel/2.jpg" alt="media" />
									<span className="media_label media_label--pricing">
										<span className="price h4">of 240JD</span> / 15 nights
									</span>
								</div>
								<div className="main d-md-flex flex-column justify-content-between flex-grow-1">
									<a
										className="main_title h4"
										href="room.html"
										data-shave="true"
									>
										Double Room with Private Bathroom
									</a>
									<div className="main_amenities">
										<span className="main_amenities-item d-inline-flex align-items-center">
											<a
												className="link link--arrow d-inline-flex align-items-center"
												href="#"
											>
												More Option <i className="icon-arrow_right icon"></i>
											</a>
										</span>
									</div>
								</div>
							</div>
						</li>
						<li className="rooms_list-item col-md-6 col-xl-4">
							<div className="card accent">
								<h3 className="title">Stay Longer, Save More</h3>
								<p className="text">
									It's simple: the longer you stay, the more you save!
								</p>
								<div className="content">
									<p className="text">
										Save up to <b>30%</b> on daily rate for stays longer than 14
										nights
									</p>
									<p className="text">
										Save up to <b>20%</b> off the nightly rate on stays between
										7-14 nights
									</p>
								</div>
								<a
									className="btn theme-element theme-element--light"
									href="hostel.html"
								>
									Choose hostel
								</a>
							</div>
						</li>
					</ul>
				</div>
			</section>

			<section className="reviews section">
				<div className="container d-lg-flex">
					<div className="media">
						<div className="reviews_slider reviews_slider--media">
							<div className="swiper-wrapper">
								<div className="swiper-slide">
									<img
										className="lazy"
										data-src="img/index/slide01.jpg"
										src="img/index/slide01.jpg"
										alt="media"
									/>
								</div>
								<div className="swiper-slide">
									<img
										className="lazy"
										data-src="img/index/slide02.jpg"
										src="img/index/slide02.jpg"
										alt="media"
									/>
								</div>
								<div className="swiper-slide">
									<img
										className="lazy"
										data-src="img/index/slide03.jpg"
										src="img/index/slide03.jpg"
										alt="media"
									/>
								</div>
								<div className="swiper-slide">
									<img
										className="lazy"
										data-src="img/index/slide04.jpg"
										src="img/index/slide04.jpg "
										alt="media"
									/>
								</div>
								<div className="swiper-slide">
									<img
										className="lazy"
										data-src="img/index/slide05.jpg"
										src="img/index/slide05.jpg "
										alt="media"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="main col-lg-6 d-lg-flex flex-column justify-content-between">
						<h2 className="reviews_header">What our guests say</h2>
						<div className="reviews_slider reviews_slider--main">
							<div className="swiper-wrapper">
								<div className="reviews_slider-slide d-flex flex-column justify-content-between swiper-slide">
									<div className="reviews_slider-slide_stars d-flex align-items-center">
										<i className="icon-star icon"></i>
										<i className="icon-star icon"></i>
										<i className="icon-star icon"></i>
										<i className="icon-star icon"></i>
										<i className="icon-star icon"></i>
									</div>
									<span className="reviews_slider-slide_date">
										<span className="h4">Date of stay:</span> July 2021
									</span>
									<div className="reviews_slider-slide_main">
										<h4 className="title">
											Very cozy room close to everything
										</h4>
										<p className="text">
											Consequat interdum varius sit amet mattis vulputate enim
											nulla. Posuere morbi leo urna molestie at elementum eu
											facilisis sed. Diam phasellus vestibulum lorem sed risus
											ultricies tristique.
										</p>
									</div>
									<span className="reviews_slider-slide_guest d-flex align-items-center">
										<span className="avatar">
											<img
												className="lazy"
												data-src="img/index/avatar01.jpg"
												src="img/index/avatar01.jpg"
												alt="media"
											/>
										</span>
										<span className="name h6">Betty Randal</span>
									</span>
								</div>
								<div className="reviews_slider-slide d-flex flex-column justify-content-between swiper-slide">
									<div className="reviews_slider-slide_stars d-flex align-items-center">
										<i className="icon-star icon"></i>
										<i className="icon-star icon"></i>
										<i className="icon-star icon"></i>
										<i className="icon-star icon"></i>
										<i className="icon-star icon"></i>
									</div>
									<span className="reviews_slider-slide_date">
										<span className="h4">Date of stay:</span> October 2021
									</span>
									<div className="reviews_slider-slide_main">
										<h4 className="title">
											Consequat interdum varius sit varius
										</h4>
										<p className="text">
											Consequat interdum varius sit amet mattis vulputate enim
											nulla. Posuere morbi leo urna molestie at elementum eu
											facilisis sed. Diam phasellus vestibulum lorem sed risus
											ultricies tristique.
										</p>
									</div>
									<span className="reviews_slider-slide_guest d-flex align-items-center">
										<span className="avatar">
											<img
												className="lazy"
												data-src="img/index/avatar02.jpg"
												src="img/index/avatar02.jpg"
												alt="media"
											/>
										</span>
										<span className="name h6">Max Jones</span>
									</span>
								</div>
								<div className="reviews_slider-slide d-flex flex-column justify-content-between swiper-slide">
									<div className="reviews_slider-slide_stars d-flex align-items-center">
										<i className="icon-star icon"></i>
										<i className="icon-star icon"></i>
										<i className="icon-star icon"></i>
										<i className="icon-star icon"></i>
										<i className="icon-star icon"></i>
									</div>
									<span className="reviews_slider-slide_date">
										<span className="h4">Date of stay:</span> December 2021
									</span>
									<div className="reviews_slider-slide_main">
										<h4 className="title">Diam sit molestie at elementum eu</h4>
										<p className="text">
											Consequat interdum varius sit amet mattis vulputate enim
											nulla. Posuere morbi leo urna molestie at elementum eu
											facilisis sed. Diam phasellus vestibulum lorem sed risus
											ultricies tristique.
										</p>
									</div>
									<span className="reviews_slider-slide_guest d-flex align-items-center">
										<span className="avatar">
											<img
												className="lazy"
												data-src="img/index/avatar03.jpg"
												src="img/index/avatar03.jpg"
												alt="media"
											/>
										</span>
										<span className="name h6">Kate Walker</span>
									</span>
								</div>
								<div className="reviews_slider-slide d-flex flex-column justify-content-between swiper-slide">
									<div className="reviews_slider-slide_stars d-flex align-items-center">
										<i className="icon-star icon"></i>
										<i className="icon-star icon"></i>
										<i className="icon-star icon"></i>
										<i className="icon-star icon"></i>
										<i className="icon-star icon"></i>
									</div>
									<span className="reviews_slider-slide_date">
										<span className="h4">Date of stay:</span> April 2021
									</span>
									<div className="reviews_slider-slide_main">
										<h4 className="title">
											Elementum eu facilisis at elementum
										</h4>
										<p className="text">
											Consequat interdum varius sit amet mattis vulputate enim
											nulla. Posuere morbi leo urna molestie at elementum eu
											facilisis sed. Diam phasellus vestibulum lorem sed risus
											ultricies tristique.
										</p>
									</div>
									<span className="reviews_slider-slide_guest d-flex align-items-center">
										<span className="avatar">
											<img
												className="lazy"
												data-src="img/index/avatar04.jpg"
												src="img/index/avatar04.jpg"
												alt="media"
											/>
										</span>
										<span className="name h6">Panam Palmer</span>
									</span>
								</div>
								<div className="reviews_slider-slide d-flex flex-column justify-content-between swiper-slide">
									<div className="reviews_slider-slide_stars d-flex align-items-center">
										<i className="icon-star icon"></i>
										<i className="icon-star icon"></i>
										<i className="icon-star icon"></i>
										<i className="icon-star icon"></i>
										<i className="icon-star icon"></i>
									</div>
									<span className="reviews_slider-slide_date">
										<span className="h4">Date of stay:</span> May 2021
									</span>
									<div className="reviews_slider-slide_main">
										<h4 className="title">
											Ultricies eu ultricies tristique facilisis
										</h4>
										<p className="text">
											Consequat interdum varius sit amet mattis vulputate enim
											nulla. Posuere morbi leo urna molestie at elementum eu
											facilisis sed. Diam phasellus vestibulum lorem sed risus
											ultricies tristique.
										</p>
									</div>
									<span className="reviews_slider-slide_guest d-flex align-items-center">
										<span className="avatar">
											<img
												className="lazy"
												data-src="img/index/avatar05.jpg"
												src="img/index/avatar05.jpg"
												alt="media"
											/>
										</span>
										<span className="name h6">Lisa Adams</span>
									</span>
								</div>
							</div>
						</div>
						<div className="swiper-controls d-flex align-items-center">
							<a
								className="swiper-button-prev d-inline-flex theme-element theme-element--light"
								href="#"
							>
								<i className="icon-arrow_left icon"></i>
							</a>
							<a
								className="swiper-button-next d-inline-flex theme-element theme-element--light"
								href="#"
							>
								<i className="icon-arrow_right icon"></i>
							</a>
						</div>
					</div>
				</div>
			</section> 
			<section className="gallery section">
				<div className="container">
					<div className="gallery_header d-sm-flex justify-content-between align-items-center">
						<h2 className="gallery_header-title">Photos of our rooms</h2>
						<div className="wrapper">
							<a
								className="btn theme-element theme-element--light"
								href="gallery.html"
							>
								View all photos
							</a>
						</div>
					</div>
					<div className="gallery_grid d-grid">
						<div className="gallery_grid-item gallery_grid-item--left">
							<a
								href="img/gallery/full01.jpg"
								data-caption="Image caption"
								data-role="gallery-link"
							>
								<img
									className="gallery_grid-item_img lazy"
									data-src="img/gallery/full01.jpg"
									src="img/gallery/full01.jpg"
									alt="media"
								/>
								<div className="overlay d-flex align-items-center justify-content-center">
									<div className="overlay_focus">
										<svg
											width="105"
											height="106"
											viewBox="0 0 105 106"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M103.514 28.944C102.693 28.944 102.028 28.2795 102.028 27.4598V3.712H78.2507C77.43 3.712 76.7646 3.04749 76.7646 2.22777C76.7646 1.40805 77.43 0.74353 78.2507 0.74353H103.514C104.335 0.74353 105 1.40805 105 2.22777V27.4598C105 28.2795 104.335 28.944 103.514 28.944Z"
												fill="currentColor"
											/>
											<path
												d="M26.7492 105.614H1.48607C0.665335 105.614 0 104.95 0 104.13V78.8978C0 78.0781 0.665335 77.4136 1.48607 77.4136C2.3068 77.4136 2.97214 78.0781 2.97214 78.8978V102.646H26.7492C27.57 102.646 28.2353 103.31 28.2353 104.13C28.2353 104.95 27.57 105.614 26.7492 105.614Z"
												fill="currentColor"
											/>
											<path
												d="M1.48607 28.944C0.665335 28.944 0 28.2795 0 27.4598V2.22777C0 1.40805 0.665335 0.74353 1.48607 0.74353H26.7492C27.57 0.74353 28.2353 1.40805 28.2353 2.22777C28.2353 3.04749 27.57 3.712 26.7492 3.712H2.97214V27.4598C2.97214 28.2795 2.3068 28.944 1.48607 28.944Z"
												fill="currentColor"
											/>
											<path
												d="M103.514 105.614H78.2507C77.43 105.614 76.7646 104.95 76.7646 104.13C76.7646 103.31 77.43 102.646 78.2507 102.646H102.028V78.8978C102.028 78.0781 102.693 77.4136 103.514 77.4136C104.335 77.4136 105 78.0781 105 78.8978V104.13C105 104.95 104.335 105.614 103.514 105.614Z"
												fill="currentColor"
											/>
										</svg>
									</div>
								</div>
							</a>
						</div>
						<div className="gallery_grid-item">
							<a
								href="img/gallery/full09.jpg"
								data-caption="Image caption"
								data-role="gallery-link"
							>
								<img
									className="gallery_grid-item_img lazy"
									data-src="img/gallery/full09.jpg"
									src="img/gallery/full09.jpg"
									alt="media"
								/>
								<div className="overlay d-flex align-items-center justify-content-center">
									<div className="overlay_focus">
										<svg
											width="105"
											height="106"
											viewBox="0 0 105 106"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M103.514 28.944C102.693 28.944 102.028 28.2795 102.028 27.4598V3.712H78.2507C77.43 3.712 76.7646 3.04749 76.7646 2.22777C76.7646 1.40805 77.43 0.74353 78.2507 0.74353H103.514C104.335 0.74353 105 1.40805 105 2.22777V27.4598C105 28.2795 104.335 28.944 103.514 28.944Z"
												fill="currentColor"
											/>
											<path
												d="M26.7492 105.614H1.48607C0.665335 105.614 0 104.95 0 104.13V78.8978C0 78.0781 0.665335 77.4136 1.48607 77.4136C2.3068 77.4136 2.97214 78.0781 2.97214 78.8978V102.646H26.7492C27.57 102.646 28.2353 103.31 28.2353 104.13C28.2353 104.95 27.57 105.614 26.7492 105.614Z"
												fill="currentColor"
											/>
											<path
												d="M1.48607 28.944C0.665335 28.944 0 28.2795 0 27.4598V2.22777C0 1.40805 0.665335 0.74353 1.48607 0.74353H26.7492C27.57 0.74353 28.2353 1.40805 28.2353 2.22777C28.2353 3.04749 27.57 3.712 26.7492 3.712H2.97214V27.4598C2.97214 28.2795 2.3068 28.944 1.48607 28.944Z"
												fill="currentColor"
											/>
											<path
												d="M103.514 105.614H78.2507C77.43 105.614 76.7646 104.95 76.7646 104.13C76.7646 103.31 77.43 102.646 78.2507 102.646H102.028V78.8978C102.028 78.0781 102.693 77.4136 103.514 77.4136C104.335 77.4136 105 78.0781 105 78.8978V104.13C105 104.95 104.335 105.614 103.514 105.614Z"
												fill="currentColor"
											/>
										</svg>
									</div>
								</div>
							</a>
						</div>
						<div className="gallery_grid-item gallery_grid-item--right">
							<a
								href="img/index/gallery04.jpg"
								data-caption="Image caption"
								data-role="gallery-link"
							>
								<img
									className="gallery_grid-item_img lazy"
									data-src="img/index/gallery04.jpg"
									src="img/index/gallery04.jpg"
									alt="media"
								/>
								<div className="overlay d-flex align-items-center justify-content-center">
									<div className="overlay_focus">
										<svg
											width="105"
											height="106"
											viewBox="0 0 105 106"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M103.514 28.944C102.693 28.944 102.028 28.2795 102.028 27.4598V3.712H78.2507C77.43 3.712 76.7646 3.04749 76.7646 2.22777C76.7646 1.40805 77.43 0.74353 78.2507 0.74353H103.514C104.335 0.74353 105 1.40805 105 2.22777V27.4598C105 28.2795 104.335 28.944 103.514 28.944Z"
												fill="currentColor"
											/>
											<path
												d="M26.7492 105.614H1.48607C0.665335 105.614 0 104.95 0 104.13V78.8978C0 78.0781 0.665335 77.4136 1.48607 77.4136C2.3068 77.4136 2.97214 78.0781 2.97214 78.8978V102.646H26.7492C27.57 102.646 28.2353 103.31 28.2353 104.13C28.2353 104.95 27.57 105.614 26.7492 105.614Z"
												fill="currentColor"
											/>
											<path
												d="M1.48607 28.944C0.665335 28.944 0 28.2795 0 27.4598V2.22777C0 1.40805 0.665335 0.74353 1.48607 0.74353H26.7492C27.57 0.74353 28.2353 1.40805 28.2353 2.22777C28.2353 3.04749 27.57 3.712 26.7492 3.712H2.97214V27.4598C2.97214 28.2795 2.3068 28.944 1.48607 28.944Z"
												fill="currentColor"
											/>
											<path
												d="M103.514 105.614H78.2507C77.43 105.614 76.7646 104.95 76.7646 104.13C76.7646 103.31 77.43 102.646 78.2507 102.646H102.028V78.8978C102.028 78.0781 102.693 77.4136 103.514 77.4136C104.335 77.4136 105 78.0781 105 78.8978V104.13C105 104.95 104.335 105.614 103.514 105.614Z"
												fill="currentColor"
											/>
										</svg>
									</div>
								</div>
							</a>
						</div>
						<div className="gallery_grid-item">
							<a
								href="img/gallery/full12.jpg"
								data-caption="Image caption"
								data-role="gallery-link"
							>
								<img
									className="gallery_grid-item_img lazy"
									data-src="img/gallery/full12.jpg"
									src="img/gallery/full12.jpg"
									alt="media"
								/>
								<div className="overlay d-flex align-items-center justify-content-center">
									<div className="overlay_focus">
										<svg
											width="105"
											height="106"
											viewBox="0 0 105 106"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M103.514 28.944C102.693 28.944 102.028 28.2795 102.028 27.4598V3.712H78.2507C77.43 3.712 76.7646 3.04749 76.7646 2.22777C76.7646 1.40805 77.43 0.74353 78.2507 0.74353H103.514C104.335 0.74353 105 1.40805 105 2.22777V27.4598C105 28.2795 104.335 28.944 103.514 28.944Z"
												fill="currentColor"
											/>
											<path
												d="M26.7492 105.614H1.48607C0.665335 105.614 0 104.95 0 104.13V78.8978C0 78.0781 0.665335 77.4136 1.48607 77.4136C2.3068 77.4136 2.97214 78.0781 2.97214 78.8978V102.646H26.7492C27.57 102.646 28.2353 103.31 28.2353 104.13C28.2353 104.95 27.57 105.614 26.7492 105.614Z"
												fill="currentColor"
											/>
											<path
												d="M1.48607 28.944C0.665335 28.944 0 28.2795 0 27.4598V2.22777C0 1.40805 0.665335 0.74353 1.48607 0.74353H26.7492C27.57 0.74353 28.2353 1.40805 28.2353 2.22777C28.2353 3.04749 27.57 3.712 26.7492 3.712H2.97214V27.4598C2.97214 28.2795 2.3068 28.944 1.48607 28.944Z"
												fill="currentColor"
											/>
											<path
												d="M103.514 105.614H78.2507C77.43 105.614 76.7646 104.95 76.7646 104.13C76.7646 103.31 77.43 102.646 78.2507 102.646H102.028V78.8978C102.028 78.0781 102.693 77.4136 103.514 77.4136C104.335 77.4136 105 78.0781 105 78.8978V104.13C105 104.95 104.335 105.614 103.514 105.614Z"
												fill="currentColor"
											/>
										</svg>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</section>
			<div className="video d-flex align-items-center justify-content-center">
				<div className="container">
					<div className="video_frame d-flex align-items-center justify-content-center">
						<i className="icon-close video_frame-close"></i>
						<div id="player"></div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
