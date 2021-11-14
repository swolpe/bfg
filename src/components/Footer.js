const Footer = ({ openModal }) => {
	return (
		<footer>
			<div className="container">
				{/* footer menu */}
				<div className="menu">
					{/* site logo */}
					<div className="site-logo">
						<span className="logo-text">BFG</span>
					</div>

					{/* links */}
					<div className="links">
						{/* about button */}
						<span
							className="btn small"
							onClick={() => {
								openModal();
							}}
							onKeyDown={(e) => {
								console.log("this key was pressed: ", e.key);
								if (e.key === "Enter") {
									openModal();
								}
							}}
							tabIndex="0"
						>
							About
						</span>

						{/* contact button */}
						<a
							href="mailto:blader@stevenwolpe.com?subject=Bladers Field Guide"
							className="btn small"
						>
							Contact
						</a>
					</div>
				</div>

				{/* credit to BOG */}
				<div className="credit">
					<p>
						Trick info is from the{" "}
						<a
							href="http://www.bookofgrinds.com"
							rel="noreferrer noopener"
							target="_blank"
							className="credit"
						>
							Book of Grinds
						</a>
						. <br />
						Without it, this project would not be possible!
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
