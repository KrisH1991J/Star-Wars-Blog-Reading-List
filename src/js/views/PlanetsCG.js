import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import getState from "../store/flux";
import PropTypes from "prop-types";

const LOCAL_STORAGE_KEY_CLICK_PLANET = "indexApp.ClickPlanet";

export const PlanetsCG = props => {
	const { store, actions } = useContext(Context);
	const [click, setClick] = useState(false);

	useEffect(() => {
		const storedIndex = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_CLICK_PLANET));
		if (storedIndex) setClick(storedIndex);
	}, []);

	useEffect(
		() => {
			localStorage.setItem(LOCAL_STORAGE_KEY_CLICK_PLANET, JSON.stringify(click));
		},
		[click]
	);

	let clickFunction = () => {
		if (click === false) {
			actions.addSinglePlanet(props.name, props.theid);
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
						<span className="card-text">Climate: {props.climate}</span>
						<br />
						<span className="card-text">Terrain: {props.terrain}</span>
						<br />
						<span className="card-text">Population: {props.population}</span>
					</div>
					<div className="card-footer bg-white border-top-0">
						<Link to={`/singlePlanet/${props.theid}`} className="btn btn-outline-primary">
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

PlanetsCG.propTypes = {
	name: PropTypes.string,
	climate: PropTypes.string,
	terrain: PropTypes.string,
	population: PropTypes.string,
	theid: PropTypes.number
};
