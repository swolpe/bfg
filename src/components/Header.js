import trickData from "../trickData.json";

const Header = ({ updateDisplayedTrick }) => {
	const getRandomTrick = () => {
		const trickName = trickData[Math.floor(Math.random() * 66)].name;
		// call parent callBack function (inside App.js)
		// to update the trick prop being sent to Trick component
		updateDisplayedTrick(trickName.toLowerCase());
	};

	return (
		<header>
			<div className="container">
				{/* site logo */}
				<div
					onClick={() => {
						getRandomTrick();
					}}
					className="site-logo"
				>
					<span className="logo-text">BFG</span>
				</div>
				<h1>Bladers Field Guide</h1>
			</div>
		</header>
	);
};

export default Header;
