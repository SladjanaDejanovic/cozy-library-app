"use client";

import {
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

const ShelvesContext = createContext();

export function ShelvesProvider({ children }) {
	const [shelves, setShelves] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchShelves() {
			try {
				setIsLoading(true);
				const res = await fetch("../api/get-shelves");
				if (!res.ok) {
					throw new Error(await res.text());
				}
				const data = await res.json();
				setShelves(data);
			} catch (err) {
				setError(err.message);
				console.log("Error fetching shelves", err.message);
			} finally {
				setIsLoading(false);
			}
		}
		fetchShelves();
	}, []);

	return (
		<ShelvesContext.Provider value={{ shelves, isLoading, error }}>
			{children}
		</ShelvesContext.Provider>
	);
}

export function useShelves() {
	const context = useContext(ShelvesContext);
	if (!context) {
		throw new Error(
			"useShelves must be used within a ShelvesProvider"
		);
	}
	return context;
}
