import React from "react";

import About from "./About";

const Content = () => {
	return (
		<main>
			<section class="carousel_section">
				<div
					id="carouselExampleInterval"
					class="carousel slide  center carousel_container z-n1"
					data-bs-ride="carousel"
				>
					<div class="carousel-inner carousel_inner">
						<div class="carousel-item active laptop1 laptop" data-bs-interval="5000">
							<figure>
								{/* <img src={laptop1} class="d-inline-block w-90 full-width  " alt="AY Computers" /> */}
								<figcaption class="carousel_figcaption">
									<cite class="img_description">Buy</cite>
								</figcaption>
							</figure>
						</div>
						<div class="carousel-item active laptop3 laptop" data-bs-interval="5000">
							<figure>
								{/* <img src={laptop3} class="d-inline-block w-90 full-width  " alt="AY Computers" /> */}
								<figcaption class="carousel_figcaption">
									<cite class="img_description">Sell</cite>
								</figcaption>
							</figure>
						</div>
						<div class="carousel-item active laptop2 laptop" data-bs-interval="5000">
							<figure>
								{/* <img src={laptop2} class="d-inline-block w-90 full-width  " alt="AY Computers" /> */}
								<figcaption class="carousel_figcaption">
									<cite class="img_description">Fix</cite>
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

export default Content;
