import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import getState from "../store/flux";
import PropTypes from "prop-types";

export const CharactersCG = props => {
	const { store, actions } = useContext(Context);

	const myStyles = {
		width: "19rem",
		height: "30rem",
		marginTop: "30px"
	};

	const myImageStyles = {
		height: "20rem"
	};

	const buttonStyles = {
		float: "right"
	};

	return (
		<>
			<div className="container d-flex">
				<div className="card" style={myStyles}>
					<img
						className="card-img-top"
						style={myImageStyles}
						src="https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">{props.name}</h5>
						<span className="card-text">Birth Year: {props.birth_year}</span>
						<br />
						<span className="card-text">Gender: {props.gender}</span>
						<br />
						<span className="card-text">Height: {props.height}</span>
						<br />
						<span className="card-text">Hair Color: {props.hair_color}</span>
						<br />
						<span className="card-text">Eye Color: {props.eye_color}</span>
					</div>
					<div className="card-footer bg-white border-top-0">
						<Link to={`/single/${props.theid}`} className="btn btn-outline-primary">
							Learn More!
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

CharactersCG.propTypes = {
	name: PropTypes.string,
	birth_year: PropTypes.string,
	gender: PropTypes.string,
	height: PropTypes.string,
	hair_color: PropTypes.string,
	eye_color: PropTypes.string,
	theid: PropTypes.number
};
