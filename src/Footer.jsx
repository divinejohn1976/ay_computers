import React from "react";

const Footer = () => {
	return (
		<>
			<hr className="footer__hr" />
			<footer className="footer">
				<div className="footer__divider">
					<ul className="footer__ul">
						<li>
							<a href="/buy">Buy</a>
						</li>
						<li>
							<a href="/fix">Fix</a>
						</li>
						<li>
							<a href="/sell">Sell</a>
						</li>
					</ul>
					<ul className="footer__ul">
						<h4>Contact Us</h4>
						<ul>
							<li>
								<a href="mailto:divinejohn1976@gmail.com">Gmail</a>
							</li>
							<li>
								<a href="tel:+2348163057793">Telephone</a>
							</li>
						</ul>
					</ul>
				</div>

				<p className="footer__p">
					&#10031; &#169; {new Date().getFullYear()} Divine Developer &#10031;
				</p>
			</footer>
		</>
	);
};

export default Footer;
