export async function addToShelf(shelfId, book) {
	const response = await fetch("/api/add-to-shelf", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ shelfId, book }),
	});

	if (!response.ok) throw new Error("Failed to add book to shelf");

	return await response.json();
}

export async function getShelves() {
	const response = await fetch("/api/get-shelves");
	if (!response.ok) throw new Error("Failed to fetch shelves");

	return await response.json();
}
