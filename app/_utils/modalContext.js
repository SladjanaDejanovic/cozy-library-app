import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedBook, setSelectedBook] = useState(null);
	function openModal(book) {
		setSelectedBook(book);
		setIsModalOpen(true);
	}

	function closeModal() {
		setIsModalOpen(false);
		setSelectedBook(null);
	}

	return (
		<ModalContext.Provider
			value={{
				isModalOpen,
				openModal,
				closeModal,
				selectedBook,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
}

export function useModal() {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error("useModal must be used within a ModalProvider");
	}
	return context;
}
