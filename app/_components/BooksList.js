import BookCard from "./BookCard";

function BooksList({ books, onSelectBook }) {
	return (
		<ul className="mt-4 flex flex-wrap gap-4">
			{books.map((book) => (
			
				<BookCard
					key={book.id}
					book={book}
					onSelectBook={onSelectBook}
				/>
			))}
		</ul>
	);
}

export default BooksList;
