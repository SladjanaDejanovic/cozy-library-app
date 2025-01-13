import { useEffect, useState } from "react";
import Modal from "./Modal";
import { addToShelf } from "../_lib/api";

function BookCard({ book, onSelectBook }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [shelves, setShelves] = useState([]);

	//fetch shelves from db
	useEffect(() => {
		async function fetchShelves() {
			try {
				const res = await fetch("../api/get-shelves");
				// Log status for debugging
				console.log("Response status:", res.status);

				if (!res.ok) {
					throw new Error(await res.text()); // Log the error body
				}

				const data = await res.json();
				console.log("Shelves:", data);

				setShelves(data);
			} catch (err) {
				console.log("Error fetching shelves", err.message);
			}
		}
		isModalOpen && fetchShelves();
	}, [isModalOpen]);

	async function handleAddToShelf(shelfId, book) {
		//call api to add book to shelf
		try {
			await addToShelf(shelfId, book);

			console.log("Book added to shelf");
			setIsModalOpen(false);
		} catch (err) {
			console.log("Error adding book to shelf", err.message);
		}
	}

	function onOpenModal(e) {
		e.stopPropagation();
		setIsModalOpen(true);
	}

	return (
		<>
			<li
				// onClick={() => onSelectBook(book)}
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
					className="mb-2"
				/>
				<button
					className="bg-primary-700 text-primary-50 rounded-lg px-2 py-1"
					onClick={onOpenModal}
				>
					Add to shelf
				</button>
				<button className="bg-primary-500 text-primary-50 rounded-lg px-2 py-1 mt-1">
					See more
				</button>
			</li>
			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			>
				<ul>
					{shelves.map((shelf) => (
						<li
							key={shelf._id}
							className="p-2 border-b border-primary-800"
							onClick={(e) => {
								e.stopPropagation();
								handleAddToShelf(shelf._id, book);
							}}
						>
							{shelf.name}
						</li>
					))}
				</ul>
				<button onClick={() => setIsModalOpen(false)}>X</button>
			</Modal>
		</>
	);
}

export default BookCard;
