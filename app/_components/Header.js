// import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
	return (
		<header className="px-8 py-5 bg-primary-500">
			<div className="flex justify-between items-center max-w-7xl mx-auto">
				{/* <Logo /> */}
				<Navigation />
			</div>
		</header>
	);
}

export default Header;
