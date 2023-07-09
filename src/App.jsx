import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
	return (
		<div className="root">
			<Header />
			<Content />
			<Footer />
		</div>
	);
}

export default App;
