import Image from "next/image";
import background from "@/public/bg.png";
import Link from "next/link";

export default function Page() {
	return (
		<div className="mt-10">
			<Image
				src={background}
				fill
				className="object-cover object-top"
				placeholder="blur"
				quality={80}
				alt="Cozy library background"
			/>
			<div className="relative z-10 text-center ">
				<h1 className="text-4xl text-primary-50 mb-10 tracking-tight font-normal">
					Welcome to Cozy library
				</h1>
				<div className="w-1/2 mx-auto py-5 mb-20">
					<p className="text-primary-200 text-xl">
						Welcome to Cozy Library, your friendly corner for book
						lovers! Whether you&apos;re looking to discover new reads,
						keep track of your favorites, or share your thoughts on
						recent finds, we&apos;ve got you covered.
					</p>
				</div>
				<Link
					href="/shelves"
					className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
				>
					Make your library
				</Link>
			</div>
		</div>
	);
}
