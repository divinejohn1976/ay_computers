import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Missing from "./Missing";
import Buy from "./Buy";

function App() {
	return (
		<div className="App">
			<>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/buy" element={<Buy />}></Route>
						<Route path="*" element={<Missing />}></Route>
					</Routes>
				</main>

				<Footer />
			</>
		</div>
	);
}

export default App;
