const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			favorites: [],
			token: null || localStorage.getItem("token"),
			currentUser: null,
			isLogin: false,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			checkSession: () => {
				const store = getStore();
				if (store.token !== null) setStore({ isLogin: true });
				if (store.token === null) setStore({ isLogin: false });
			},

			login: (data, history) => {
				fetch("https://3000-apricot-damselfly-lj5pirqj.ws-us03.gitpod.io/login", {
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				})
					.then(res => res.json())
					.then(data => {
						setStore({ isLogin: true });
						setStore({ token: data });
						localStorage.setItem("token", data.access_token);
						history.push("/");
					});
			},

			getCurrentUser: () => {
				const token = localStorage.getItem("token");
				console.log(token);
				fetch("https://3000-apricot-damselfly-lj5pirqj.ws-us03.gitpod.io/protected", {
					method: "GET",
					headers: { Authorization: "Bearer " + token }
				});
			},

			loadPeople: () => {
				fetch("https://3000-apricot-damselfly-lj5pirqj.ws-us03.gitpod.io/people")
					.then(resp => resp.json())
					.then(data => setStore({ people: data.results }));
			},

			loadPlanets: () => {
				fetch("https://3000-apricot-damselfly-lj5pirqj.ws-us03.gitpod.io/planets")
					.then(resp => resp.json())
					.then(data => setStore({ planets: data.results }));
			},

			loadStarships: () => {
				fetch("https://3000-apricot-damselfly-lj5pirqj.ws-us03.gitpod.io/starships")
					.then(resp => resp.json())
					.then(data => setStore({ starships: data.results }));
			},

			addSinglePerson: (item, index) => {
				let favs = getStore().favorites;
				let single = getStore().people[index];
				single.type = "single";
				setStore({ favorites: [...favs, single] });
			},

			addSinglePlanet: (item, index) => {
				let favs = getStore().favorites;
				let singlePlanet = getStore().planets[index];
				singlePlanet.type = "singlePlanet";
				setStore({ favorites: [...favs, singlePlanet] });
			},

			addSingleStarship: (item, index) => {
				let favs = getStore().favorites;
				let singleStarship = getStore().starships[index];
				singleStarship.type = "singleStarship";
				setStore({ favorites: [...favs, singleStarship] });
			},

			addPerson: (item, index) => {
				let favs = getStore().favorites;
				let person = getStore().people;
				item.type = "single";
				setStore({ favorites: [...favs, item] });
			},

			addPlanet: (item, index) => {
				let favs = getStore().favorites;
				let planet = getStore().planets;
				item.type = "singlePlanet";
				setStore({ favorites: [...favs, item] });
			},

			addStarship: (item, index) => {
				let favs = getStore().favorites;
				let starship = getStore().starships;
				item.type = "singleStarship";
				setStore({ favorites: [...favs, item] });
			},

			delFav: i => {
				let updatedList = getStore().favorites.filter((element, index) => index !== i);
				setStore({ favorites: [...updatedList] });
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
