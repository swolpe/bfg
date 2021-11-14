import { useReducer } from "react";

const Trick = ({ trickContent }) => {
	const [pov, setPov] = useReducer(
		() => document.querySelector("select").value,
		"0"
	);

	const changeImage = () => {
		// clear out existing displayed trick image
		const trickImg = document.querySelector(".trick-container img");
		trickImg.classList.remove("show");
		// display loader animation
		const loader = document.createElement("div");
		loader.classList.add("loader");
		loader.innerText = "Loading...";
		document
			.querySelector(".trick-container img")
			.insertAdjacentElement("afterend", loader);
		setPov();
	};

	return (
		<div className="trick-container">
			{/* display trick name */}
			<h2>{trickContent.name}</h2>

			{/* display img based on pov useState*/}
			<img
				src={trickContent.imageURIs[pov]}
				alt={trickContent.altText}
				width="600"
				height="340"
				onLoad={() => {
					const loader = document.querySelector(".loader");
					const trickImg = document.querySelector(".trick-container img");
					loader.remove();
					trickImg.classList.add("show");
				}}
			/>
			<div className="loader">Loading...</div>
			{/* display pov controls */}
			<div className="pov-controls">
				<label htmlFor="povs">Choose view:</label>

				{/* when user selects new pov, change displayed image */}
				<select name="povs" id="povs" onChange={changeImage}>
					<option value="0">Main</option>
					<option value="1">Left</option>
					<option value="2">Right</option>
					<option value="3">Front</option>
					<option value="4">Back</option>
					<option value="5">Top</option>
				</select>
			</div>

			{/* display trick desc */}
			<h3>Description:</h3>
			{trickContent.desc.map((para) => {
				return <p key={para.toString()}>{para}</p>;
			})}
		</div>
	);
};

export default Trick;
