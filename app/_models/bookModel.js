import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
	_id: { type: String, required: true }, // bookId from the Google Books API
	title: { type: String, required: true },
	authors: [String],
	thumbnail: String,
});

export default mongoose.models.Book ||
	mongoose.model("Book", bookSchema);
