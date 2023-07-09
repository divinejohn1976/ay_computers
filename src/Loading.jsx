import React from "react";

const Loading = () => {
	const loadRandom = () => {
		const loadMsg = [
			"Just a sec.",
			"Buy, Sell, Fix",
			"Welcome",
			"Loading Images",
			"Loading...",
			"AY Computers"
		];

		let randomNum = Math.floor(Math.random() * (loadMsg.length - 1));
		return loadMsg[randomNum];
	};
	let ranMsg = loadRandom();
	return (
		<main class="loading">
			{/* <div class="text-center ">
				<div class="spinner-grow " role="status">
					<span class="visually-hidden">Loading...</span>
				</div>
			</div> */}
			<div className="loading__text">
				<p>{ranMsg}</p>
			</div>
		</main>
	);
};

export default Loading;
