import Image from "next/image";
import { useModal } from "../_utils/modalContext";

function BookCard({ book }) {
	const { isModalOpen, openModal, closeModal } = useModal();
	const imageUrl = book.volumeInfo.imageLinks?.thumbnail;

	

	return (
		<>
			<li
				key={book.id}
				className="flex flex-col items-center bg-primary-100 shadow-lg rounded-lg p-4 w-52 h-80 max-w-xs"
			>
				<div className="w-full h-36 relative">
					<Image
						src={
							book.volumeInfo.imageLinks?.thumbnail ||
							"/placeholder-image.png"
						}
						alt={book.volumeInfo.title || "Book image"}
						fill
						className="object-contain"
					/>
				</div>

				{/* Book Title */}
				<div className="mt-auto flex flex-col gap-1">
					<h3 className="font-bold text-primary-900 text-center line-clamp-2 text-sm ">
						{book.volumeInfo.title || "Untitled"}
					</h3>

					{/* Author */}
					<p className="text-accent-800 font-semibold text-sm text-center line-clamp-1 ">
						{book.volumeInfo.authors?.join(", ") || "Unknown Author"}
					</p>
				</div>
				{/* Actions */}
				<div className="mt-auto flex flex-col gap-2 w-full">
					<button
						className="bg-accent-800 text-primary-50 rounded-lg px-2 py-1 text-sm w-full hover:bg-accent-400 transition-colors"
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
