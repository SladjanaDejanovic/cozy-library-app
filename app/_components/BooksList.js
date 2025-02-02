import { useModal } from "../_utils/modalContext";
import BookCard from "./BookCard";

function BooksList({ books, onSelectBook }) {
	const { isModalOpen, openModal, closeModal } = useModal();
	return (
		<ul
			// className="mt-4 flex flex-wrap gap-4"
			className="grid grid-cols-[repeat(auto-fit,_minmax(12rem,_1fr))] gap-6 place-items-center mt-7"
		>
			{books.map((book) => (
				<BookCard
					key={book.id}
					book={book}
					onSelectBook={onSelectBook}
					openModal={openModal}
				/>
			))}
		</ul>
	);
}

export default BooksList;
