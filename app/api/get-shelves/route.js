import dbConnect from "@/app/_lib/mongodb";

import Shelf from "@/app/_models/shelfModel";
import { NextResponse } from "next/server";

export async function GET() {
	console.log("workinggggg");
	try {
		await dbConnect();

		// console.log("Checking model connection...");
		// const allCollections = await mongoose.connection.db
		// 	.listCollections()
		// 	.toArray();
		// console.log("Available collections in DB:", allCollections);

		const shelves = await Shelf.find({});
		console.log("Shelves fetched from DB:", shelves); // Debug

		return NextResponse.json(shelves);
	} catch (err) {
		console.error("Error fetching shelves:", err.message);
		return NextResponse.json({ error: err.message }, { status: 500 });
	}
}
