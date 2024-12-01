import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	shelves: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Shelf",
		},
	],
});

export default mongoose.models.User ||
	mongoose.model("User", userSchema);
