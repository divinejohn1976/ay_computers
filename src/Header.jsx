import React from "react";
import { NavLink, useLocation } from "react-router-dom";
const Header = () => {
	const location = useLocation();
	console.log(location.pathname);

	return (
		<>
			<header>
				<nav className="navbar navbar-expand-lg bg-body-tertiary head_nav" data-bs-theme="dark">
					<div className="container-fluid p-100 ">
						<a className="navbar-brand nav_brand" href="/">
							<h1>AY Computers</h1>
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNavDropdown"
							aria-controls="navbarNavDropdown"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNavDropdown">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a className="nav-link" aria-current="page" href="/">
										<h5>Home</h5>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" aria-current="page" href="/buy">
										<h5>Buy</h5>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/sell">
										<h5>Sell</h5>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/fix">
										<h5>Fix</h5>
									</a>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										More
									</a>
									<ul className="dropdown-menu">
										<li>
											<a className="dropdown-item" href="/contact_us">
												Contact Us
											</a>
										</li>

										<li>
											<a className="dropdown-item" href="/faq">
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
