const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			favorites: [],
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

			loadPeople: () => {
				fetch("https://swapi.dev/api/people/")
					.then(resp => resp.json())
					.then(data => setStore({ people: data.results }));
			},

			loadPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(resp => resp.json())
					.then(data => setStore({ planets: data.results }));
			},

			loadStarships: () => {
				fetch("https://swapi.dev/api/starships/")
					.then(resp => resp.json())
					.then(data => setStore({ starships: data.results }));
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
				let favorites = getStore().favorites;
				let updatedList = favorites.filter((f, index) => index !== i);
				setStore({ favorites: updatedList });
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
