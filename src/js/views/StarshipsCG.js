import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import getState from "../store/flux";
import PropTypes from "prop-types";

export const StarshipsCG = props => {
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
						<span className="card-text">Model: {props.model}</span>
						<br />
						<span className="card-text">Speed: {props.max_atmosphering_speed}</span>
						<br />
						<span className="card-text">Credits: {props.cost_in_credits}</span>
						<br />
						<span className="card-text">Crew: {props.crew}</span>
						<br />
						<span className="card-text">Cargo Capacity: {props.cargo_capacity}</span>
					</div>
					<div className="card-footer bg-white border-top-0">
						<Link to={`/singleStarship/${props.theid}`} className="btn btn-outline-primary">
							Learn More!
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

StarshipsCG.propTypes = {
	name: PropTypes.string,
	model: PropTypes.string,
	max_atmosphering_speed: PropTypes.string,
	cost_in_credits: PropTypes.string,
	crew: PropTypes.string,
	cargo_capacity: PropTypes.string,
	theid: PropTypes.number
};
