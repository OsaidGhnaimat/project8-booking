import "./assest/css/about.min.css";

const contact = () => {
	return (
		<main>
			<header className="page" style={{ marginTop: "80px" }}>
				<div className="container">
					<ul className="breadcrumbs d-flex flex-wrap align-content-center">
						<li className="list-item">
							<a className="link" href="index.html">
								Home
							</a>
						</li>
						<li className="list-item">
							<a className="link" href="#">
								Contacts
							</a>
						</li>
					</ul>
					<h1 className="page_title">Contacts</h1>
				</div>
			</header>
			<section className="faq-contacts section">
				<div className="container container--contacts d-xl-flex align-items-center justify-content-between">
					<div className="contacts_info">
						<div className="contacts_info-header">
							<h2
								className="contacts_info-header_title aos-init aos-animate"
								data-aos="fade-down"
							>
								Contacts
							</h2>
							<p
								className="contacts_info-header_text aos-init aos-animate"
								data-aos="fade-up"
							>
								Egestas pretium aenean pharetra magna ac. Et tortor consequat id
								porta nibh venenatis cras sed
							</p>
						</div>
						<ul className="contacts_info-list col-xl-7 d-md-flex flex-wrap">
							<li className="contacts_info-list_item col-md-6 d-flex align-items-center aos-init aos-animate">
								<span className="theme-element theme-element--light media">
									<span className="icon-call icon">
										<svg
											width="28"
											height="29"
											viewBox="0 0 28 29"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M26.9609 19.75L21 17.1797C20.7812 17.125 20.5625 17.0703 20.3438 17.0703C19.7969 17.0703 19.3047 17.2891 19.0312 17.6719L16.625 20.625C12.7969 18.7656 9.73438 15.7031 7.875 11.875L10.8281 9.46875C11.2109 9.19531 11.4297 8.70312 11.4297 8.15625C11.4297 7.9375 11.375 7.71875 11.3203 7.5L8.75 1.53906C8.47656 0.9375 7.875 0.5 7.21875 0.5C7.05469 0.5 6.94531 0.554688 6.83594 0.554688L1.3125 1.86719C0.546875 2.03125 0 2.6875 0 3.50781C0 17.3438 11.2109 28.5 24.9922 28.5C25.8125 28.5 26.4688 27.9531 26.6875 27.1875L27.9453 21.6641C27.9453 21.5547 27.9453 21.4453 27.9453 21.2812C27.9453 20.625 27.5625 20.0234 26.9609 19.75ZM24.9375 26.75C12.1406 26.75 1.75 16.3594 1.75 3.5625L7.16406 2.30469L9.67969 8.15625L5.6875 11.4375C8.36719 17.0703 11.4297 20.1328 17.1172 22.8125L20.3438 18.8203L26.1953 21.3359L24.9375 26.75Z"
												fill="currentColor"
											></path>
										</svg>
									</span>
								</span>
								<div className="main d-flex flex-column">
									<h4 className="main_title">Phone</h4>
									<a className="link" href="tel:+1234567890">
										(329) 580-7077
									</a>
									<a className="link" href="tel:+1234567890">
										(650) 382-5020
									</a>
								</div>
							</li>
							<li className="contacts_info-list_item col-md-6 d-flex align-items-center aos-init aos-animate">
								<span className="theme-element theme-element--light media">
									<i className="icon-email icon"></i>
								</span>
								<div className="main d-flex flex-column">
									<h4 className="main_title">Email</h4>
									<a
										className="link"
										href="../cdn-cgi/l/email-protection.html#14716c757964787154707b79757d7a3a777b79"
									>
										<span
											className="__cf_email__"
											data-cfemail="b5d6dadbc1d4d6c1f5d0cdd4d8c5d9d09bd6dad8"
										>
											[email&nbsp;protected]
										</span>
									</a>
									<a
										className="link"
										href="../cdn-cgi/l/email-protection.html#711409101c011d1431151e1c10181f5f121e1c"
									>
										<span
											className="__cf_email__"
											data-cfemail="53303c3d2732302713362b323e233f367d303c3e"
										>
											[email&nbsp;protected]
										</span>
									</a>
								</div>
							</li>
							<li className="contacts_info-list_item col-md-6 d-flex align-items-center aos-init aos-animate">
								<span className="theme-element theme-element--light media">
									<i className="icon-location icon"></i>
								</span>
								<div className="main d-flex flex-column">
									<h4 className="main_title">Location</h4>
									<span>54826 Fadel Circles</span>
									<span>Darrylstad, AZ 90995</span>
								</div>
							</li>
							<li className="contacts_info-list_item col-md-6 d-flex align-items-center aos-init aos-animate">
								<span className="theme-element theme-element--light media">
									<i className="icon-clock icon"></i>
								</span>
								<div className="main d-flex flex-column">
									<h4 className="main_title">Working Time</h4>
									<span>Everyday</span> <span>10 am — 20 pm</span>
								</div>
							</li>
						</ul>
					</div>
					<div className="contacts_map">
						<img className="lazy" src="img/about/01.jpg" alt="media" />
					</div>
				</div>
			</section>
			<section className="about_faq section">
				<div className="container">
					<div className="about_faq-header d-lg-flex justify-content-between align-items-center">
						<h2 className="about_faq-header_title">
							Frequently asked questions about hotel
						</h2>
						<p className="about_faq-header_text">
							Diam phasellus vestibulum lorem sed risus ultricies tristique
						</p>
					</div>
					<div className="about_faq-main d-grid">
						<div className="accordion_component-item">
							<div className="item-wrapper d-flex flex-column justify-content-between">
								<h4 className="accordion_component-item_header d-flex justify-content-between align-items-center collapsed">
									How do you choose the right hotel?
									<span className="wrapper">
										<i className="icon-chevron_down icon transform"></i>
									</span>
								</h4>
								<div id="item-1" className="accordion-collapse collapse show">
									<div className="accordion_component-item_body">
										Consequat interdum varius sit amet mattis vulputate enim
										nulla. Posuere morbi leo urna molestie at element eu
										facilisis sed excepteur sint occaecat
									</div>
								</div>
							</div>
						</div>
						<div className="accordion_component-item">
							<div className="item-wrapper d-flex flex-column justify-content-between">
								<h4 className="accordion_component-item_header d-flex justify-content-between align-items-center">
									How many people are in a hotel room?
									<span className="wrapper">
										<i className="icon-chevron_down icon transform"></i>
									</span>
								</h4>
								<div id="item-2" className="accordion-collapse collapse show">
									<div className="accordion_component-item_body">
										Consequat interdum varius sit amet mattis vulputate enim
										nulla. Posuere morbi leo urna molestie at element eu
										facilisis sed excepteur sint occaecat
									</div>
								</div>
							</div>
						</div>
						<div className="accordion_component-item">
							<div className="item-wrapper d-flex flex-column justify-content-between">
								<h4 className="accordion_component-item_header d-flex justify-content-between align-items-center collapsed">
									Are there private rooms in hotels?
									<span className="wrapper">
										<i className="icon-chevron_down icon transform"></i>
									</span>
								</h4>
								<div id="item-3" className="accordion-collapse collapse show">
									<div className="accordion_component-item_body">
										Consequat interdum varius sit amet mattis vulputate enim
										nulla. Posuere morbi leo urna molestie at element eu
										facilisis sed excepteur sint occaecat
									</div>
								</div>
							</div>
						</div>
						<div className="accordion_component-item">
							<div className="item-wrapper d-flex flex-column justify-content-between">
								<h4 className="accordion_component-item_header d-flex justify-content-between align-items-center collapsed">
									How do I keep my things safe in a hotel?
									<span className="wrapper">
										<i className="icon-chevron_down icon transform"></i>
									</span>
								</h4>
								<div id="item-4" className="accordion-collapse collapse show">
									<div className="accordion_component-item_body">
										Consequat interdum varius sit amet mattis vulputate enim
										nulla. Posuere morbi leo urna molestie at element eu
										facilisis sed excepteur sint occaecat
									</div>
								</div>
							</div>
						</div>
						<div className="accordion_component-item">
							<div className="item-wrapper d-flex flex-column justify-content-between">
								<h4 className="accordion_component-item_header d-flex justify-content-between align-items-center collapsed">
									How do you stay safe in a hotel?
									<span className="wrapper">
										<i className="icon-chevron_down icon transform"></i>
									</span>
								</h4>
								<div id="item-5" className="accordion-collapse collapse show">
									<div className="accordion_component-item_body">
										Consequat interdum varius sit amet mattis vulputate enim
										nulla. Posuere morbi leo urna molestie at element eu
										facilisis sed excepteur sint occaecat
									</div>
								</div>
							</div>
						</div>
						<div className="about_faq-main_card accent d-flex flex-column justify-content-between">
							<h4 className="title">Do you have any questions?</h4>
							<p className="text flex-grow-1">
								Diam phasellus vestibulum lorem sed risus ultricies tristique
							</p>
							<a
								className="btn theme-element theme-element--light"
								href="contact.html"
							>
								Ask a question
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default contact;
