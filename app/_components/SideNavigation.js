"use client";
import {
	AcademicCapIcon,
	BoltIcon,
	BookmarkSquareIcon,
	BookOpenIcon,
	BuildingLibraryIcon,
	CakeIcon,
	CloudIcon,
	FireIcon,
	GiftIcon,
	GlobeEuropeAfricaIcon,
	HeartIcon,
	LightBulbIcon,
	PuzzlePieceIcon,
	RocketLaunchIcon,
	SparklesIcon,
	StarIcon,
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

const icons = [
	{
		name: "read",
		icon: <HeartIcon className="h-5 w-5 text-primary-600" />,
	},
	{
		name: "to-be-read",
		icon: <SparklesIcon className="h-5 w-5 text-primary-600" />,
	},
	{
		name: "reading",
		icon: <BookOpenIcon className="h-5 w-5 text-primary-600" />,
	},
];

const randomIcons = [
	{
		id: 1,
		icon: <AcademicCapIcon className="h-5 w-5 text-primary-600" />,
	},
	{
		id: 2,
		icon: <BoltIcon className="h-5 w-5 text-primary-600" />,
	},
	{
		id: 3,
		icon: <BookmarkSquareIcon className="h-5 w-5 text-primary-600" />,
	},
	{
		id: 4,
		icon: (
			<BuildingLibraryIcon className="h-5 w-5 text-primary-600" />
		),
	},
	{
		id: 5,
		icon: <CakeIcon className="h-5 w-5 text-primary-600" />,
	},
	{
		id: 6,
		icon: <CloudIcon className="h-5 w-5 text-primary-600" />,
	},
	{
		id: 7,
		icon: <FireIcon className="h-5 w-5 text-primary-600" />,
	},
	{
		id: 8,
		icon: (
			<GlobeEuropeAfricaIcon className="h-5 w-5 text-primary-600" />
		),
	},
	{
		id: 9,
		icon: <GiftIcon className="h-5 w-5 text-primary-600" />,
	},
	{
		id: 10,
		icon: <LightBulbIcon className="h-5 w-5 text-primary-600" />,
	},
	{
		id: 11,
		icon: <PuzzlePieceIcon className="h-5 w-5 text-primary-600" />,
	},
	{
		id: 12,
		icon: <RocketLaunchIcon className="h-5 w-5 text-primary-600" />,
	},
	{
		id: 13,
		icon: <StarIcon className="h-5 w-5 text-primary-600" />,
	},
];

function SideNavigation() {
	const pathname = usePathname();
	const { shelves, isLoading, error } = useShelves();

	const getShelfIcon = (shelfName) => {
		const predefinedIcon = icons.find(
			(icon) => icon.name.toLowerCase() === shelfName.toLowerCase()
		);

		return predefinedIcon
			? predefinedIcon.icon
			: randomIcons[Math.floor(Math.random() * randomIcons.length)]
					.icon;
	};

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
								<span>{getShelfIcon(shelf.name)}</span>

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
