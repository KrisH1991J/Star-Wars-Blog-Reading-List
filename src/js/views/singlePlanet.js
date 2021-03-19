import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const myStyles = {
		backgroundColor: "white"
	};

	const h1Header = {
		fontSize: "40px",
		fontWeight: "bold"
	};

	const h1Style = {
		textAlign: "center",
		fontSize: "36px",
		marginTop: "15px"
	};

	const textStyles = {
		color: "red",
		textAlign: "center",
		marginBottom: "30px",
		fontSize: "20px"
	};

	const myImageStyles = {
		height: "30rem",
		width: "40rem",
		marginTop: "15px",
		marginRight: "20px"
	};

	const buttonStyles = {
		width: "60px"
	};

	return (
		<div className="container" style={myStyles}>
			<div className="jumbotron">
				<h1 className="display-4">
					<div className="d-flex">
						<img
							className="card-img-top"
							style={myImageStyles}
							src="https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg"
							alt="..."
						/>
						<span style={h1Style}>
							<span style={h1Header}>{store.planets[params.theid].name}</span> <br />
							asldkfjals;djkfas dflasjdfl asjdflkajs d;lfjasdf lasjdf a;lsdjfa;lsd fa;lsdjf a;sldkjfa
						</span>
					</div>
				</h1>
				<hr className="my-4" style={textStyles} />
				<div className="container d-flex justify-content-evenly" style={textStyles}>
					<span>
						Name <br />
						{store.planets[params.theid].name}
					</span>
					<span>
						Climate <br />
						{store.planets[params.theid].climate}
					</span>
					<span>
						Terrain <br />
						{store.planets[params.theid].terrain}
					</span>
					<span>
						Population <br />
						{store.planets[params.theid].population}
					</span>
					<button
						type="button"
						className="btn btn-outline-warning"
						style={buttonStyles}
						onClick={() => actions.addSinglePlanet(store.planets[params.theid].name)}>
						<i className="far fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

SinglePlanet.propTypes = {
	name: PropTypes.string,
	climate: PropTypes.string,
	terrain: PropTypes.string,
	population: PropTypes.string,
	theid: PropTypes.number
};
