const About = () => {
	return (
		<div className="container">
			<div className="modal-header">
				<div className="site-logo">
					<span className="logo-text">BFG</span>
				</div>
				<h1>About</h1>
			</div>
			<div className="about-content">
				<div className="about-text">
					<h2>
						I'm Swolpe! <span>I made this for you!</span>
					</h2>
					<p>
						The Bladers Field Guide is a semi-extensive field-tested guide for
						inline skating tricks. I made it for anyone who wants to learn more
						about the fun you can have on rollerblades.
					</p>
					<p>
						Trick images and descriptions come from the{" "}
						<a
							href="http://www.bookofgrinds.com"
							rel="noreferrer noopener"
							target="_blank"
							className="credit"
						>
							Book of Grinds
						</a>
						. Without it, the Bladers Field Guide would not exist. &#128077;
					</p>
					<p>
						If you'd like to see a trick added to the guide, send me a
						description of the maneuver and provide a picture. Thanks!
					</p>
				</div>

				<span>
					<a
						href="mailto:blader@stevenwolpe.com?subject=Bladers Field Guide"
						className="btn small"
					>
						Contact Me
					</a>
				</span>
			</div>
		</div>
	);
};

export default About;
