function BookCard({ book, onSelectBook }) {
	return (
		<li
			onClick={() => onSelectBook(book)}
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
	);
}

export default BookCard;
