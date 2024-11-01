import "@/app/_styles/globals.css";
import Header from "./_components/Header";

export const metadata = {
	title: {
		template: "%s | Cozy Library",
		default: "Welcome / Cozy Library", //maybe change this into personalized name of the library
	},
	description: "Cozy virtual library",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="antialiased bg-primary-200 text-primary-100 min-h-screen flex flex-col relative">
				<Header />
				<div className="grid flex-1 px-8 py-12">
					<main className="max-w-7xl mx-auto w-full">{children}</main>
				</div>
			</body>
		</html>
	);
}
