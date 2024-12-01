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
				className="mb-2"
			/>
			<button className="bg-primary-700 text-primary-50 rounded-lg px-2 py-1">
				Add to shelf
			</button>
			<button className="bg-primary-500 text-primary-50 rounded-lg px-2 py-1 mt-1">
				See more
			</button>
		</li>
	);
}

export default BookCard;
