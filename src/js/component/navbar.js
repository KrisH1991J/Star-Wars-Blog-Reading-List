import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const singleViewType = (name, type) => {
		let viewType = null;
		if (type === "single") {
			viewType = store.people.findIndex(index => index.name === name);
		} else if (type === "singlePlanet") {
			viewType = store.planets.findIndex(index => index.name === name);
		} else {
			viewType = store.starships.findIndex(index => index.name === name);
		}
		return viewType;
	};

	const iconStyle = {
		fontSize: "40px"
	};

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<i className="fab fa-jedi-order" style={iconStyle} />
					</span>
				</Link>
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="dropdown-basic">
						Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{store.favorites.map((item, index) => {
							return (
								<Dropdown.Item key={index}>
									<div className="container d-flex">
										<ul>
											<Link to={`/${item.type}/${singleViewType(item.name, item.type)}`}>
												<li>{item.name}</li>
											</Link>
											<i className="fas fa-trash" onClick={() => actions.delFav(index)} />
										</ul>
									</div>
								</Dropdown.Item>
							);
						})}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</nav>
	);
};
