import React from 'react'
import { Link } from "react-router-dom";

const OneHotel = ({name,des,img,price}) => {
  return (
	<li
						className="rooms_list-item aos-init aos-animate"
						data-order="1"
						data-aos="fade-up"
					>
						<div className="item-wrapper d-md-flex">
							<div className="media">
								<img
									className="lazy entered error"
									data-src={img}
									src={img}
									alt="media"
									data-ll-status="error"
								/>
							</div>
							<div className="main d-md-flex justify-content-between">
								<div className="main_info d-md-flex flex-column justify-content-between">
									<a className="main_title h4" href="room.html">
										{name}
									</a>
									<p className="main_description">
                                    {des}
									</p>
								</div>
								<div className="main_pricing d-flex flex-column align-items-md-end justify-content-md-between">
									<div className="wrapper d-flex flex-column">
										<span className="main_pricing-item">
											<div className="h4">start from</div>
                                            <div className="h2">{price} JD</div>

										</span>
	
									</div>
                                    <Link className="theme-element theme-element--accent btn" to="/">Book now</Link>
								</div>
							</div>
						</div>
					</li>
                      )
}

export default OneHotel