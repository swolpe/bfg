import ReactDom from "react-dom";
import { CSSTransition } from "react-transition-group";
import About from "../About";

const Modal = ({ closeModal, modalOpen }) => {
	return ReactDom.createPortal(
		<CSSTransition
			in={modalOpen}
			unmountOnExit
			timeout={{ enter: 0, exit: 300 }}
		>
			<div
				className="modal"
				onClick={() => {
					closeModal();
				}}
			>
				<div className="modal-content" onClick={(e) => e.stopPropagation()}>
					{/* this is modal close button */}
					<span
						className="close"
						onClick={() => {
							closeModal();
						}}
						onKeyDown={(e) => {
							console.log("this key was pressed: ", e.key);
							if (e.key === "Enter") {
								closeModal();
							}
						}}
						tabIndex="0"
					>
						<svg
							id="close-button"
							data-name="close-button"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 104.85 104.85"
						>
							<title>Close Button</title>
							<rect
								x="355.51"
								y="155.61"
								width="20"
								height="140"
								rx="10"
								ry="10"
								transform="translate(-46.5 -365.56) rotate(45)"
								fill="#231f20"
							/>
							<rect
								x="355.51"
								y="155.61"
								width="20"
								height="140"
								rx="10"
								ry="10"
								transform="translate(470.41 -46.5) rotate(135)"
								fill="#231f20"
							/>
						</svg>
					</span>
					{/* this is modal content */}
					<About />
				</div>
			</div>
		</CSSTransition>,
		document.getElementById("root")
	);
};

export default Modal;
