const GOOGLE_BOOKS_API_URL =
	"https://www.googleapis.com/books/v1/volumes";

export async function fetchBooks(query) {
	const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;
	const res = await fetch(
		`${GOOGLE_BOOKS_API_URL}?q=${query}&key=${apiKey}`
	);
	if (!res.ok) {
		const errorData = await res.json();
		console.error("Error fetching books:", errorData);
		throw new Error("Failed to fetch books");
	}

	const data = await res.json();
	console.log("API response data:", data);
	return data.items || [];
}
