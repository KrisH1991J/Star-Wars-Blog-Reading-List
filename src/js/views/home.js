import React, { useContext } from "react";
import "../../styles/home.scss";
import { CharactersCG } from "./CharactersCG";
import { PlanetsCG } from "./PlanetsCG";
import { StarshipsCG } from "./StarshipsCG";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const scrollBar = {
		overflow: "scroll",
		overflowY: "hidden"
	};

	const h1Style = {
		fontSize: "22px",
		color: "red",
		marginBottom: "-10px"
	};

	const h1Style2 = {
		fontSize: "22px",
		color: "red",
		marginBottom: "-10px",
		marginTop: "15px"
	};

	return (
		<>
			<div className="container">
				<h1 style={h1Style}>Characters</h1>
			</div>
			<div className="container d-flex" style={scrollBar}>
				{store.people.map((item, index) => {
					return (
						<CharactersCG
							key={index}
							name={item.name}
							birth_year={item.birth_year}
							gender={item.gender}
							height={item.height}
							hair_color={item.hair_color}
							eye_color={item.eye_color}
							theid={index}
						/>
					);
				})}
			</div>
			<div className="container">
				<h1 style={h1Style2}>Planets</h1>
			</div>
			<div className="container d-flex" style={scrollBar}>
				{store.planets.map((item, index) => {
					return (
						<PlanetsCG
							key={index}
							name={item.name}
							climate={item.climate}
							terrain={item.terrain}
							population={item.population}
							theid={index}
						/>
					);
				})}
			</div>
			<div className="container">
				<h1 style={h1Style2}>Starships</h1>
			</div>
			<div className="container d-flex" style={scrollBar}>
				{store.starships.map((item, index) => {
					return (
						<StarshipsCG
							key={index}
							name={item.name}
							model={item.model}
							speed={item.speed}
							cost={item.cost}
							crew={item.crew}
							cargo_capacity={item.cargo_capacity}
							theid={index}
						/>
					);
				})}
			</div>
		</>
	);
};
