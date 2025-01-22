import Image from "next/image";
import { useModal } from "../_utils/modalContext";

function BookCard({ book }) {
	const { isModalOpen, openModal, closeModal } = useModal();
	const imageUrl = book.volumeInfo.imageLinks?.thumbnail;
	console.log(book.volumeInfo.imageLinks?.thumbnail);
	// async function handleAddToShelf(shelfId, book) {
	// 	//call api to add book to shelf
	// 	try {
	// 		await addToShelf(shelfId, book);

	// 		console.log("Book added to shelf");
	// 		setIsModalOpen(false);
	// 	} catch (err) {
	// 		console.log("Error adding book to shelf", err.message);
	// 	}
	// }

	return (
		<>
			<li
				key={book.id}
				className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 w-48 h-72 max-w-xs"
			>
				{/*<h3 className="font-bold text-primary-900">
					{book.volumeInfo.title}
				</h3>
				<p className="text-accent-800 font-semibold">
					{book.volumeInfo.authors?.join(", ")}
				</p>
				 <img
					alt="book image"
					src={book.volumeInfo.imageLinks?.thumbnail}
					className="mb-2"
				/> *
				<Image
					src={imageUrl || "/placeholder-image.png"}
					alt={book.volumeInfo.title || "Book image"}
					fill
					className="object-contain rounded-md"
				/>
				<button
					className="bg-primary-700 text-primary-50 rounded-lg px-2 py-1"
					onClick={() => openModal(book)}
				>
					Add to shelf
				</button>
				<button className="bg-primary-500 text-primary-50 rounded-lg px-2 py-1 mt-1">
					See more
				</button>/}
				{/* Book Image */}
				<div className="w-full h-36 relative mb-2">
					<Image
						src={
							book.volumeInfo.imageLinks?.thumbnail ||
							"/placeholder-image.png"
						}
						alt={book.volumeInfo.title || "Book image"}
						fill
						className="object-contain rounded-md"
					/>
				</div>

				{/* Book Title */}
				<h3 className="font-bold text-primary-900 text-center line-clamp-2 text-sm">
					{book.volumeInfo.title || "Untitled"}
				</h3>

				{/* Author */}
				<p className="text-accent-800 font-semibold text-sm text-center line-clamp-1">
					{book.volumeInfo.authors?.join(", ") || "Unknown Author"}
				</p>

				{/* Actions */}
				<div className="mt-auto flex flex-col gap-2 w-full">
					<button
						className="bg-primary-700 text-primary-50 rounded-lg px-2 py-1 text-sm w-full"
						onClick={() => openModal(book)}
					>
						Add to shelf
					</button>
					<button className="bg-primary-500 text-primary-50 rounded-lg px-2 py-1 text-sm w-full">
						See more
					</button>
				</div>
			</li>
		</>
	);
}

export default BookCard;
