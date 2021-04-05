import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [click, setClick] = useState(false);

	let clickFunction = name => {
		if (click === false) {
			actions.addPerson(store.people[params.theid]);
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
							<span style={h1Header}>{store.people[params.theid].name}</span> <br />
							asldkfjals;djkfas dflasjdfl asjdflkajs d;lfjasdf lasjdf a;lsdjfa;lsd fa;lsdjf a;sldkjfa
						</span>
					</div>
				</h1>
				<hr className="my-4" style={textStyles} />
				<div className="container d-flex justify-content-evenly" style={textStyles}>
					<span>
						Name <br />
						{store.people[params.theid].name}
					</span>
					<span>
						Birth Year <br />
						{store.people[params.theid].birth_year}
					</span>
					<span>
						Gender <br />
						{store.people[params.theid].gender}
					</span>
					<span>
						Height <br />
						{store.people[params.theid].height}
					</span>
					<span>
						Hair Color <br />
						{store.people[params.theid].hair_color}
					</span>
					<span>
						Eye Color <br />
						{store.people[params.theid].eye_color}
					</span>
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
	);
};

Single.propTypes = {
	match: PropTypes.object,
	name: PropTypes.string,
	gender: PropTypes.string,
	hair_color: PropTypes.string,
	eye_color: PropTypes.string,
	height: PropTypes.string,
	birth_year: PropTypes.string,
	theid: PropTypes.number
};
