"use client";
import SideNavigation from "@/app/_components/SideNavigation";
import { ShelvesProvider } from "../_utils/shelvesContext";
import Modal from "../_components/Modal";

import { ModalProvider, useModal } from "../_utils/modalContext";

export default function Layout({ children }) {
	return (
		<ShelvesProvider>
			<ModalProvider>
				<div className="grid grid-cols-[16rem_1fr] h-full gap-12">
					<SideNavigation />
					<div className="py-1">{children}</div>
					<ConditionalModal />
				</div>
			</ModalProvider>
		</ShelvesProvider>
	);
}

function ConditionalModal() {
	const { isModalOpen, closeModal, selectedBook } = useModal();

	return (
		isModalOpen && (
			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				book={selectedBook} // Pass the selected book to the modal
			/>
		)
	);
}
