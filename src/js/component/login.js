import React, { useState } from "react";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const h1Style2 = {
		fontSize: "22px",
		color: "red",
		marginBottom: "15px"
	};

	const handleSubmit = e => {
		e.prevent.default();
		console.log(email, password);
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-4" />
				<div className="col-4">
					<div className="mb-3">
						<label htmlFor="exampleInputEmail1" className="form-label" style={h1Style2}>
							Email Address
						</label>
						<input
							onChange={e => setEmail(e.target.value)}
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
					</div>
				</div>
				<div className="col-4" />
			</div>
			<div className="row">
				<div className="col-4" />
				<div className="col-4">
					<div className="mb-3">
						<label htmlFor="exampleInputPassword1" className="form-label" style={h1Style2}>
							Password
						</label>
						<input
							onChange={e => setPassword(e.target.value)}
							type="password"
							className="form-control"
							id="exampleInputPassword1"
						/>
					</div>
				</div>
				<div className="col-4" />
			</div>
			<div className="row">
				<div className="col-4" />
				<div className="col-4">
					<button type="button" onClick={e => handleSubmit(e)} className="btn btn-success">
						Log In
					</button>
				</div>
				<div className="col-4" />
			</div>
		</div>
	);
};
