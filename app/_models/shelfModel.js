import mongoose from "mongoose";

const shelfSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	books: [
		{ type: String }, // Array of book IDs
	],
});

export default mongoose.models.Shelf ||
	mongoose.model("Shelf", shelfSchema);
