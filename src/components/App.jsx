import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
	return (
		<div>
			<Header />
			{notes.map(function (x) {
				return <Note title={x.title} content={x.content} key={x.key} />;
			})}
			<Footer />
		</div>
	);
}

export default App;
