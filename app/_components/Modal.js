"use client";

import { useShelves } from "../_utils/shelvesContext";
import { useOutsideClick } from "../_utils/useOutsideClick";
import { useAddToShelf } from "@/app/_utils/useAddToShelf";

function Modal({ isOpen, onClose, children, book }) {
	const { shelves, isLoading, error: shelvesError } = useShelves();
	const {
		addBookToShelf,
		loadingShelfId,
		error: addError,
	} = useAddToShelf();

	const ref = useOutsideClick(onClose);

	// async function handleAddToShelf(shelfId, book) {
	// 	if (!book) return;
	// 	setLoadingShelfId(shelfId);

	// 	try {
	// 		const res = await fetch("/api/add-to-shelf", {
	// 			method: "POST",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 			body: JSON.stringify({ shelfId, book }),
	// 		});

	// 		if (!response.ok) {
	// 			console.error("Error:", await response.text());
	// 			throw new Error("Failed to add book to shelf");
	// 		}

	// 		const data = await res.json();
	// 		console.log(req.body); // Debug the request body
	// 		res.json({ message: "Hello from the API" }); // Test response

	// 		// if (!res.ok)
	// 		// 	throw new Error(data.error || "Failed to add book");

	// 		console.log("Book added to shelf");
	// 		onClose();
	// 	} catch (err) {
	// 		console.log("Error adding book to shelf", err.message);
	// 	} finally {
	// 		setLoadingShelfId(null);
	// 	}
	// }

	if (!isOpen) return null;

	return (
		isOpen && (
			<div
				className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"

				// // Attach the handler to the backdrop
			>
				<div
					className="bg-primary-500 rounded-lg shadow-lg p-6 w-96"
					ref={ref}
				>
					<button
						className="absolute top-2 right-2 text-red-600 font-bold"
						onClick={onClose}
					>
						X
					</button>
					<h2 className="text-xl font-bold mb-4 text-accent-500">
						Add to Shelf
					</h2>
					<p>Selected book: {book?.volumeInfo.title}</p>
					{isLoading ? (
						<p>Loading shelves...</p>
					) : shelvesError ? (
						<p className="text-red-500">Error: {shelvesError}</p>
					) : (
						<ul className="space-y-2">
							{shelves.map((shelf) => (
								<li
									key={shelf._id}
									className="py-3 px-4 bg-primary-100 rounded-lg flex items-center gap-4 font-medium text-primary-900 transition-transform hover:translate-x-2 hover:bg-primary-200 cursor-pointer"
									// onClick={() => handleAddToShelf(shelf._id, book)}
									onClick={() => addBookToShelf(shelf._id, book)}
								>
									{loadingShelfId === shelf._id ? (
										<span>Adding...</span>
									) : (
										<span>{shelf.name}</span>
									)}
								</li>
							))}
						</ul>
					)}
					{addError && (
						<p className="text-red-500 mt-2">{addError}</p>
					)}

					{children}
					<div className="mt-4 flex justify-end">
						<button
							onClick={onClose}
							className="px-4 py-2 bg-primary-800 text-white rounded-md"
						>
							Close
						</button>
					</div>
				</div>
			</div>
		)
	);
}
export default Modal;
