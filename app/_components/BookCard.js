import { useModal } from "../_utils/modalContext";

function BookCard({ book }) {
	// const [isModalOpen, setIsModalOpen] = useState(false);
	const { isModalOpen, openModal, closeModal } = useModal();

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
	console.log("Modal State:", isModalOpen); // Log the modal state
	return (
		<>
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
					className="mb-2"
				/>
				<button
					className="bg-primary-700 text-primary-50 rounded-lg px-2 py-1"
					onClick={() => openModal(book)}
				>
					Add to shelf
				</button>
				<button className="bg-primary-500 text-primary-50 rounded-lg px-2 py-1 mt-1">
					See more
				</button>
			</li>
		</>
	);
}

export default BookCard;
