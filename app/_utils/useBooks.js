import { useState } from "react";
import { fetchBooks } from "./fetchBooks";

function useBooks() {
	const [books, setBooks] = useState([]);
	const [query, setQuery] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	// fetch books based on current query
	async function fetchBooksData(query) {
		setLoading(true);
		setError(null);

		try {
			const result = await fetchBooks(query);
			setBooks(result);
			setLoading(false);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	}

	//update book data when query changes
	useEffect(() => {
		if (query) fetchBooksData(query);
	}, [query]);

	return { books, query, setQuery, loading, error };
}
export default useBooks;
