import React from "react";

const Header = () => {
	return (
		<>
			<header>
				<nav class="navbar navbar-expand-lg bg-body-tertiary head_nav" data-bs-theme="dark">
					<div class="container-fluid p-100">
						<a class="navbar-brand nav_brand" href="#">
							<h1>AY Computers</h1>
						</a>
						<button
							class="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNavDropdown"
							aria-controls="navbarNavDropdown"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNavDropdown">
							<ul class="navbar-nav">
								<li class="nav-item">
									<a class="nav-link" aria-current="page" href="#">
										<h5>Buy</h5>
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">
										<h5>Sell</h5>
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">
										<h5>Fix</h5>
									</a>
								</li>
								<li class="nav-item dropdown">
									<a
										class="nav-link dropdown-toggle"
										href="#"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										More
									</a>
									<ul class="dropdown-menu">
										<li>
											<a class="dropdown-item" href="#">
												Contact Us
											</a>
										</li>
										<li>
											<a class="dropdown-item" href="#">
												Customer Care
											</a>
										</li>
										<li>
											<a class="dropdown-item" href="#">
												FAQ
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Header;
