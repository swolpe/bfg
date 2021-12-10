import { useState, useEffect } from "react";
import Header from "./components/Header";
import List from "./components/TrickList";
import Trick from "./components/Trick";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import trickData from "./trickData.json";

function App(props) {
	// track and update trick to display
	const [trickId, setTrickId] = useState("0");

	useEffect(() => {
		console.log("The trick has been changed: ", trickId);
		// add class to body that changes bg color
		const body = document.querySelector("body");
		body.classList.add("flash");
		setTimeout(() => {
			body.classList.remove("flash");
		}, 1000);
	}, [trickId]);

	// update displayed trick
	const updateDisplayedTrick = (trickNameFromInput) => {
		// find trick that matches user input
		const findTrickByName = (trick) => {
			return trick.name.toLowerCase() === trickNameFromInput;
		};
		// use [0] here because filter returns an array
		setTrickId(trickData.filter(findTrickByName)[0].id);
	};

	// toggle the about modal
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<div className="App">
			<Header updateDisplayedTrick={updateDisplayedTrick} />
			<div className="container main">
				<List updateDisplayedTrick={updateDisplayedTrick} trickId={trickId} />
				<Trick trickContent={trickData[trickId]} />
			</div>
			{/* TO-DO: pass about component to modal component as a prop */}
			<Modal
				closeModal={() => setModalOpen(!modalOpen)}
				modalOpen={modalOpen}
			/>
			<Footer openModal={() => setModalOpen(!modalOpen)} />
		</div>
	);
}

export default App;
