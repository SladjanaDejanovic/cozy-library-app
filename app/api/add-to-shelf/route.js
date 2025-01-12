import { NextResponse } from "next/server";
import dbConnect from "../_lib/mongodb";
import Shelf from "../_models/shelfModel";

// export default async function handler(req, res) {
// 	if (req.method === "POST") {
// 		const { shelfId, book } = req.body;
// 		try {
// 			await dbConnect();
// 			const shelf = await Shelf.findById(shelfId);
// 			if (!shelf) {
// 				return res.status(404).json({ error: "Shelf not found" });
// 			}

// 			// avoid adding duplicate books
// 			const alreadyExists = shelf.books.some(
// 				(b) => b.bookId === book.bookId
// 			);
// 			if (!alreadyExists) {
// 				shelf.books.push(book);
// 				await shelf.save();
// 			}

// 			res.status(200).json({ message: "Book added to shelf" });
// 		} catch (err) {
// 			console.error("Error adding book to shelf:", err);
// 			res.status(500).json({ error: "Failed to add book to shelf" });
// 		}
// 	} else {
// 		res.status(405).json({ error: "Method is not allowed" });
// 	}
// }

export async function POST(request) {
	await dbConnect();
	const { shelfId, book } = request.body;

	try {
		const shelf = await Shelf.findById(shelfId);
		if (!shelf)
			return NextResponse.json(
				{ error: "Shelf not found" },
				{ status: 404 }
			);
		shelf.books.push(book);
		await shelf.save();

		return NextResponse.json({ message: "book added successfully" });
	} catch (err) {
		return NextResponse.json({ error: err.message }, { status: 500 });
	}
}
