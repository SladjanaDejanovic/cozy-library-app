"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { fetchBooks } from "../_utils/fetchBooks";
import { useKey } from "../_utils/useKey";

function Search() {
	const [query, setQuery] = useState("");
	const [books, setBooks] = useState([]);

	async function handleSearch() {
		try {
			const result = await fetchBooks(query);
			setBooks(result);
			console.log("Books fetched:", result);
		} catch (err) {
			console.log(err);
		}
	}

	useKey("Enter", handleSearch);

	return (
		<div>
			<div>
				<input
					type="text"
					placeholder="Search books..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					className="p-2 rounded bg-primary-200 text-accent-700 semibold"
				/>
				<button
					onClick={handleSearch}
					className="ml-2 px-4 py-2 bg-primary-900 text-primary-300 rounded "
				>
					<MagnifyingGlassIcon className="h-5 w-5" />
				</button>
			</div>
			<ul className="mt-4 flex flex-wrap gap-4">
				{books.map((book) => (
					<li
						key={book.id}
						className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 max-w-xs"
					>
						<h3 className="font-bold text-primary-900">
							{book.volumeInfo.title}
						</h3>
						<p className="text-accent-800 font-semibold">
							{book.volumeInfo.authors?.join(", ")}
						</p>
						<img
							alt="book image"
							src={book.volumeInfo.imageLinks?.thumbnail}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Search;
