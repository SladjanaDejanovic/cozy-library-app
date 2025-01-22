import Link from "next/link";

function Page() {
	<div>
		<h2 className="font-semibold text-2xl text-accent-900 mb-7">
			Your library
		</h2>
		<p>Some stats here</p>
		<p>Last added</p>
		<p>something something</p>
		<Link
			href="/library/search-new"
			className="text-primary-900 text-lg font-bold"
		>
			Search for new books
		</Link>
	</div>;
}

export default Page;
