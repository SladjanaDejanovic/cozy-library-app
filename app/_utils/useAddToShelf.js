"use client";

import { useState } from "react";

export function useAddToShelf() {
	const [loadingShelfId, setLoadingShelfId] = useState(null);
	const [error, setError] = useState(null);

	async function addBookToShelf(shelfId, book) {
		if (!shelfId || !book) {
			setError("Shelf ID and book are required.");
			return;
		}

		setLoadingShelfId(shelfId);
		setError(null);

		try {
			const res = await fetch("/api/add-to-shelf", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ shelfId, book }),
			});

			const data = await res.json();

			if (!res.ok)
				throw new Error(data.error || "Failed to add book");

			console.log("✅ Book added to shelf:", data);
		} catch (err) {
			console.error("❌ Error adding book to shelf:", err.message);
			setError(err.message);
		} finally {
			setLoadingShelfId(null);
		}
	}

	return { addBookToShelf, loadingShelfId, error };
}
