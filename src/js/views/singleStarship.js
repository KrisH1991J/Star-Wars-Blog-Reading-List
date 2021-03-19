import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleStarship = props => {
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
		<div className="container" style={myStyles} type="people">
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
							<span style={h1Header}>{store.starships[params.theid].name}</span> <br />
							asldkfjals;djkfas dflasjdfl asjdflkajs d;lfjasdf lasjdf a;lsdjfa;lsd fa;lsdjf a;sldkjfa
						</span>
					</div>
				</h1>
				<hr className="my-4" style={textStyles} />
				<div className="container d-flex justify-content-evenly" style={textStyles}>
					<span>
						Name <br />
						{store.starships[params.theid].name}
					</span>
					<span>
						Model <br />
						{store.starships[params.theid].model}
					</span>
					<span>
						Speed <br />
						{store.starships[params.theid].max_atmosphering_speed}
					</span>
					<span>
						Credits <br />
						{store.starships[params.theid].cost_in_credits}
					</span>
					<span>
						Crew <br />
						{store.starships[params.theid].crew}
					</span>
					<span>
						Cargo Capacity <br />
						{store.starships[params.theid].cargo_capacity}
					</span>
					<button
						type="button"
						className="btn btn-outline-warning"
						style={buttonStyles}
						onClick={() => actions.addSingleStarship(store.starships[params.theid].name)}>
						<i className="far fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

SingleStarship.propTypes = {
	name: PropTypes.string,
	model: PropTypes.string,
	max_atmosphering_speed: PropTypes.string,
	cost_in_credits: PropTypes.string,
	crew: PropTypes.string,
	cargo_capacity: PropTypes.string,
	theid: PropTypes.number
};
