import { useReducer } from "react";
import { useSwipeable } from "react-swipeable";

const Trick = ({ trickContent }) => {
	// receives current state and actions (left swipe, right swipe, or selection) and returns new pov index
	function reducer(state, action) {
		// get pov select element
		const povSelector = document.querySelector("select");
		let newIndex;
		switch (action.type) {
			case "rightSwipe": // --->
				newIndex = Number(state.pov) - 1;
				// if user swipes past start
				if (newIndex < 0) {
					// set index to last item
					newIndex = povSelector.length - 1;
				}
				// set pov select element value to match swiped index
				povSelector.value = newIndex;
				return {
					pov: newIndex,
				};
			case "leftSwipe": // <---
				newIndex = Number(state.pov) + 1;
				// if user swipes past end
				if (newIndex >= povSelector.length) {
					// set index to first item
					newIndex = 0;
				}
				povSelector.value = newIndex;
				return {
					pov: newIndex,
				};
			// this handles selections from pov select element
			default:
				return {
					pov: Number(povSelector.value),
				};
		}
	}

	const povInitialState = {
		pov: 0,
	};

	const [state, dispatch] = useReducer(reducer, povInitialState);

	const setImgContainerHeight = () => {
		const imageContainer = document.querySelector(".image-container");
		let width = imageContainer.getBoundingClientRect().width;
		let height = width * 0.5845454545454545;
		imageContainer.style.minHeight = height + "px";
	};

	const changeImage = (action) => {
		console.log("this is the action that called changeImage: ", action);
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
		// dispatch action to reducer function
		switch (action) {
			case "rightSwipe":
				dispatch({ type: "rightSwipe" });
				break;
			case "leftSwipe":
				dispatch({ type: "leftSwipe" });
				break;
			default:
				dispatch({ type: "selection" });
		}
	};

	// setup swipe events
	const swipeHandlers = useSwipeable({
		onSwipedLeft: () => changeImage("leftSwipe"),
		onSwipedRight: () => changeImage("rightSwipe"),
	});

	return (
		<div className="trick-container">
			{/* display trick name */}
			<h2>{trickContent.name}</h2>

			<div
				className="image-container"
				onLoad={() => {
					window.addEventListener("resize", setImgContainerHeight);
					setImgContainerHeight();
				}}
			>
				{/* display img based on state.pov value*/}
				<img
					src={trickContent.imageURIs[state.pov]}
					alt={trickContent.altText}
					width="600"
					height="340"
					onLoad={() => {
						const loader = document.querySelector(".loader");
						const trickImg = document.querySelector(".trick-container img");
						if (loader !== null) {
							loader.remove();
						}
						trickImg.classList.add("show");
					}}
					{...swipeHandlers}
				/>
				<div className="loader">Loading...</div>
			</div>

			{/* display pov controls */}
			<div className="pov-controls">
				<label htmlFor="povs">Choose view:</label>

				{/* when user selects new pov, change displayed image */}
				<select name="povs" id="povs" onChange={() => changeImage("selection")}>
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
