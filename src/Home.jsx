import React from "react";

import About from "./About";

const Home = () => {
	return (
		<main>
			<section className="carousel_section">
				<div
					id="carouselExampleInterval"
					className="carousel slide  center carousel_container z-n1"
					data-bs-ride="carousel"
				>
					<div className="carousel-inner carousel_inner">
						<div className="carousel-item active laptop1 laptop" data-bs-interval="5000">
							<figure>
								{/* <img src={laptop1} className="d-inline-block w-90 full-width  " alt="AY Computers" /> */}
								<figcaption className="carousel_figcaption">
									<cite className="img_description">Buy</cite>
								</figcaption>
							</figure>
						</div>
						<div className="carousel-item active laptop3 laptop" data-bs-interval="5000">
							<figure>
								{/* <img src={laptop3} className="d-inline-block w-90 full-width  " alt="AY Computers" /> */}
								<figcaption className="carousel_figcaption">
									<cite className="img_description">Sell</cite>
								</figcaption>
							</figure>
						</div>
						<div className="carousel-item active laptop2 laptop" data-bs-interval="5000">
							<figure>
								{/* <img src={laptop2} className="d-inline-block w-90 full-width  " alt="AY Computers" /> */}
								<figcaption className="carousel_figcaption">
									<cite className="img_description">Fix</cite>
								</figcaption>
							</figure>
						</div>
					</div>
				</div>
			</section>
			<br />
			<br />
			<section>
				<About />
			</section>
		</main>
	);
};

export default Home;
