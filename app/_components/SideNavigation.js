"use client";
import {
	BookOpenIcon,
	HeartIcon,
	SparklesIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShelves } from "../_utils/shelvesContext";

const navLinks = [
	{
		name: "Read",
		href: "/library/read",
		icon: <HeartIcon className="h-5 w-5 text-primary-600" />,
	},
	{
		name: "To-be-read",
		href: "/library/to-be-read",
		icon: <SparklesIcon className="h-5 w-5 text-primary-600" />,
	},
	{
		name: "Reading",
		href: "/library/reading",
		icon: <BookOpenIcon className="h-5 w-5 text-primary-600" />,
	},
];

function SideNavigation() {
	const pathname = usePathname();
	const { shelves, isLoading, error } = useShelves();

	return (
		<nav className="border-r border-primary-900 z-100">
			<ul className="flex flex-col gap-2 h-full text-lg">
				{navLinks.map((link) => (
					<li key={link.name}>
						<Link
							href={link.href}
							className={`py-3 px-5 hover:bg-primary-300 hover:text-accent-200 transition-colors flex items-center gap-4 font-semibold text-primary-800 ${
								pathname === link.href ? "bg-primary-100" : ""
							}`}
						>
							{link.icon}
							<span>{link.name}</span>
						</Link>
					</li>
				))}

				<li className="my-4 border-t border-primary-700" />

				{isLoading ? (
					<li className="py-3 px-5 text-primary-700">
						Loading shelves...
					</li>
				) : error ? (
					<li className="py-3 px-5 text-primary-700">
						Error loading shelves
					</li>
				) : (
					shelves.map((shelf) => (
						<li key={shelf._id}>
							<Link
								href={`/library/${shelf._id}`}
								className={`py-3 px-5 hover:bg-primary-300 hover:text-accent-200 transition-colors flex items-center gap-4 font-semibold text-primary-800 ${
									pathname === `/library/shelves/${shelf._id}`
										? "bg-primary-100"
										: ""
								}`}
							>
								<span className="h-5 w-5 text-primary-600" />
								<span>{shelf.name}</span>
							</Link>
						</li>
					))
				)}
			</ul>
		</nav>
	);
}

export default SideNavigation;
