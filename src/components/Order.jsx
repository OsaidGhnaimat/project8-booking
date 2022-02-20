import React from "react";

const Order = () => {
	return (
		<main>
			<header className="page" style={{ marginTop: "0px" }}>
				<div className="container">
					<h1 className="page_title">Orders</h1>
				</div>
			</header>
			<div className="room section">
				<div className="container">
					<h2>Hoverable Table</h2>
					<p>Move the mouse over the table rows to see the effect.</p>
					<table>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Points</th>
						</tr>
						<tr>
							<td>Peter</td>
							<td>Griffin</td>
							<td>$100</td>
						</tr>
						<tr>
							<td>Lois</td>
							<td>Griffin</td>
							<td>$150</td>
						</tr>
						<tr>
							<td>Joe</td>
							<td>Swanson</td>
							<td>$300</td>
						</tr>
						<tr>
							<td>Cleveland</td>
							<td>Brown</td>
							<td>$250</td>
						</tr>
					</table>
				</div>
			</div>
		</main>
	);
};

export default Order;
