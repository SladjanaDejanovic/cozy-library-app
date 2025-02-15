import { NextResponse } from "next/server";
import dbConnect from "../../_lib/mongodb";
import Shelf from "../../_models/shelfModel";

export async function POST(req) {
	console.log("📢 API Route Hit: /api/add-to-shelf"); //  Debug
	await dbConnect();

	try {
		const { shelfId, book } = await req.json();
		console.log("📩 Received Data:", book.volumeInfo.title, shelfId); //  Debug

		if (!shelfId || !book) {
			return NextResponse.json(
				{ error: "Missing shelfId or book" },
				{ status: 400 }
			);
		}

		const shelf = await Shelf.findById(shelfId);

		if (!shelf)
			return NextResponse.json(
				{ error: "Shelf not found" },
				{ status: 404 }
			);

		shelf.books.push(book);
		await shelf.save();

		return NextResponse.json(
			{ message: "book added successfully" },
			{ status: 200 }
		);
	} catch (err) {
		return NextResponse.json({ error: err.message }, { status: 500 });
	}
}
