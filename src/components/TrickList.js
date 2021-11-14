import trickData from "../trickData.json";

const TrickList = ({ updateDisplayedTrick, trickId }) => {
	// setup array of known trick names
	const trickNamesArray = trickData.map((trick) => {
		return trick.name.toLowerCase();
	});
	console.log("This is the trick id passed to tricklist: ", trickId);
	// submit the form
	const submitForm = (e) => {
		// prevent page reload on form submission
		e.preventDefault();
		// get the input field
		const trickSelector = document.querySelector("#trick-selector");
		// get the error span
		const searchLabel = document.querySelector(".searchLabel");
		// check if input value is included in array of trick names and check that this is not same trick already displayed
		if (
			trickNamesArray.includes(trickSelector.value.toLowerCase()) &&
			trickSelector.value.toLowerCase() !==
				trickNamesArray[trickId].toLowerCase()
		) {
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
			// call parent callBack function (inside App.js)
			// to update the trick prop being sent to Trick component
			updateDisplayedTrick(trickSelector.value.toLowerCase());

			//*** trigger special effect with useEffect everytime the trick changes!!!
			//*** make body bgcolor change to gray then fade out

			// clear the input
			trickSelector.value = "";
			// remove error message if present
			if (document.querySelector(".error")) {
				document.querySelector(".error").remove();
			}
		} else {
			// if not already displayed, and this is not same trick, then display error message
			if (
				!document.querySelector(".error") &&
				trickSelector.value.toLowerCase() !==
					trickNamesArray[trickId].toLowerCase()
			) {
				let error = document.createElement("span");
				error.classList.add("error");
				error.innerText = "That trick was not found.";
				searchLabel.append(error);
			}
		}
	};

	return (
		<div className="trick-list">
			<form
				onSubmit={(e) => {
					submitForm(e);
				}}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						submitForm(e);
					}
				}}
			>
				<div className="searchLabel">
					<label htmlFor="trick-selector">Search for a trick:</label>
				</div>
				<input
					list="tricks"
					name="trick-selector"
					id="trick-selector"
					placeholder="Type Here"
				/>
				<datalist id="tricks">
					{trickData.map((trick) => {
						return <option key={trick.id} value={trick.name} />;
					})}
				</datalist>
				<input type="submit" className="btn" />
			</form>
		</div>
	);
};

export default TrickList;
