import React from "react";
import image1 from "./assets/buy/image1.jpg";
import image2 from "./assets/buy/image2.jpg";
import image3 from "./assets/buy/image3.jpg";
import image4 from "./assets/buy/image4.jpg";
import { addCommas } from "./utils/numberToString";

const Buy = () => {
	const laptopsForSaleList = [
		{
			src: image1,
			id: 0,
			type: "laptop",
			name: "Toshiba C69",
			description: "This laptop is for sale",
			price: 100000
		},
		{
			src: image2,
			id: 2,
			type: "laptop",
			name: "Macbook 13p",
			description: "This laptop is for sale",
			price: 250000
		},
		{
			src: image3,
			id: 3,
			type: "laptop",
			name: "Lenove xplus",
			description: "This laptop is for sale",
			price: 150000
		},
		{
			src: image4,
			id: 4,
			type: "laptop",
			name: "Dell h159",
			description: "This laptop is for sale",
			price: 175000
		}
	];
	return (
		<main>
			<div className="items__container">
				{laptopsForSaleList.map((item) => {
					const amount = addCommas("1000000");
					return (
						<>
							<div
								className="card item  bg-dark text-light"
								style={{
									width: "18rem",
									maxHeight: "600px"
								}}
								key={item.id}
							>
								<a href={item.src}>
									<img
										src={item.src}
										className="card-img-top"
										alt={item.description}
										style={{
											maxHeight: "15rem"
										}}
									/>
								</a>
								<div className="card-body">
									<h4 className="card-title">{item.name}</h4>
									<p className="card-text item_type">Type: {item.type}</p>
									<hr />
									<p className="card-text">{item.description}</p>
									<hr />
									<h5 className="price">Price N{amount}</h5>
									<hr />

									<a href="#" className="btn btn-primary me-5 add_to_cart_btn">
										Add To Cart
									</a>
									<a href="#" className="btn btn-primary ">
										Buy
									</a>
								</div>
							</div>
						</>
					);
				})}
			</div>
		</main>
	);
};

export default Buy;
