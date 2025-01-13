import SideNavigation from "@/app/_components/SideNavigation";
import Image from "next/image";
import background from "@/public/bg.png";
import { ShelvesProvider } from "../_utils/shelvesContext";

export default function Layout({ children }) {
	return (
		<ShelvesProvider>
			<div className="grid grid-cols-[16rem_1fr] h-full gap-12">
				<SideNavigation />
				<div className="py-1">{children}</div>
			</div>
		</ShelvesProvider>
	);
}
