import Link from "next/link";

function Navigation() {
	return (
		<nav className="z-10 text-xl text-accent-200">
			<ul className="flex gap-16 items-center">
				<li>
					<Link href="/" className=" hover:text-primary-400">
						Home
					</Link>
				</li>
				<li>
					<Link href="/shelves" className=" hover:text-primary-400">
						Shelves
					</Link>
				</li>
				<li>
					<Link href="/quotes" className=" hover:text-primary-400">
						Quotes
					</Link>
				</li>
				<li>
					<Link href="/something" className=" hover:text-primary-400">
						Something
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
