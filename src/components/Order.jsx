import React, {useState,useEffect}from "react";
import axios from 'axios';


const Order = () => {
	const [orders,setOrders] = useState([]);

	useEffect(() => {
		const url = "http://localhost/project8-booking/dashboard/order.php";
    axios
      .get(url)
      .then((response) =>response.data)
      .then((data) => {
        setOrders(data);
      });
	  }, []);
	  
	  console.log(orders);
	  
 
		
	return (
		<main>
			<header className="page" style={{ marginTop: "0px" }}>
				<div className="container">
					<h1 className="page_title">Orders</h1>
				</div>
			</header>
			<div className="room section">
				<div className="container">
					<h2>Orders</h2>
					
					<table>
					<thead>
						<tr>
							<th>userName</th>
							<th>Date</th>
							<th>Time</th>
							<th>Phone</th>
							<th>num of person</th>
							<th>Email</th>


						</tr>
						</thead>
						<tbody>
				 

						{orders.map((book) => {
							return (
								<tr key={book.id} >
									<td>{book.username}</td>
									<td>{book.date}</td>
									<td>{book.time}</td>
									<td>{book.phone}</td>
									<td>{book.num}</td>
									<td>{book.email}</td>
								</tr>
								
							  
							);
						  })}
				  
		  
				 
	</tbody>				
						
						
					</table>
				</div>
			</div>
		</main>
	);
};

export default Order;
