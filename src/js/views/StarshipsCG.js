import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import getState from "../store/flux";
import PropTypes from "prop-types";

const LOCAL_STORAGE_KEY_CLICK_STARSHIP = "indexApp.ClickStarship";

export const StarshipsCG = props => {
	const { store, actions } = useContext(Context);
	const [click, setClick] = useState(false);

	useEffect(() => {
		const storedIndex = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_CLICK_STARSHIP));
		if (storedIndex) setClick(storedIndex);
	}, []);

	useEffect(
		() => {
			localStorage.setItem(LOCAL_STORAGE_KEY_CLICK_STARSHIP, JSON.stringify(click));
		},
		[click]
	);

	let clickFunction = () => {
		if (click === false) {
			actions.addSingleStarship(props.name, props.theid);
			setClick(true);
		} else if (click === true) {
			{
				store.favorites.map((item, index) => {
					return actions.delFav(index);
				});
			}
			setClick(false);
		}
	};

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
						<span className="card-text">Speed: {props.speed}</span>
						<br />
						<span className="card-text">Credits: {props.cost}</span>
						<br />
						<span className="card-text">Crew: {props.crew}</span>
						<br />
						<span className="card-text">Cargo Capacity: {props.cargo_capacity}</span>
					</div>
					<div className="card-footer bg-white border-top-0">
						<Link to={`/singleStarship/${props.theid}`} className="btn btn-outline-primary">
							Learn More!
						</Link>
						<button
							type="button"
							className="btn btn-outline-warning"
							style={buttonStyles}
							onClick={() => clickFunction()}>
							<i className={`${click ? "fas fa-heart" : "far fa-heart"}`} />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

StarshipsCG.propTypes = {
	name: PropTypes.string,
	model: PropTypes.string,
	speed: PropTypes.string,
	cost: PropTypes.string,
	crew: PropTypes.string,
	cargo_capacity: PropTypes.string,
	theid: PropTypes.number
};
