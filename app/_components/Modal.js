function Modal({ isOpen, onClose, children }) {
	return (
		isOpen && (
			<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
				<div className="bg-white rounded-lg shadow-lg p-6">
					<button
						className="absolute top-2 right-2 text-red-600 font-bold"
						onClick={onClose}
					>
						X
					</button>
					{children}
				</div>
			</div>
		)
	);
}
export default Modal;
