"use client";
import { useShelves } from "../_utils/shelvesContext";

function Modal({ isOpen, onClose }) {
	const { shelves, isLoading, error } = useShelves();

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white rounded-lg shadow-lg p-6 w-96">
				<button
					className="absolute top-2 right-2 text-red-600 font-bold"
					onClick={onClose}
				>
					X
				</button>
				<h2 className="text-xl font-bold mb-4 text-accent-500">
					Add to Shelf
				</h2>
				{isLoading ? (
					<p>Loading shelves...</p>
				) : error ? (
					<p className="text-red-500">Error: {error}</p>
				) : (
					<ul className="space-y-2">
						{shelves.map((shelf) => (
							<li
								key={shelf._id}
								// className="border-b pb-2 last:border-b-0 text-primary-600"
								className="py-3 px-4 bg-primary-100 rounded-lg flex items-center gap-4 font-medium text-primary-900 transition-transform hover:translate-x-2 hover:bg-primary-200 cursor-pointer"
							>
								<span>{shelf.name}</span>
							</li>
						))}
					</ul>
				)}
				<div className="mt-4 flex justify-end">
					<button
						onClick={onClose}
						className="px-4 py-2 bg-primary-800 text-white rounded-md"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);

	// return (
	// 	isOpen && (
	// 		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
	// 			<div className="bg-white rounded-lg shadow-lg p-6">
	// 				<button
	// 					className="absolute top-2 right-2 text-red-600 font-bold"
	// 					onClick={onClose}
	// 				>
	// 					X
	// 				</button>
	// 				{children}
	// 			</div>
	// 		</div>
	// 	)
	// );
}
export default Modal;
