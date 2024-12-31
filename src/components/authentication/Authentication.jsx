import { Outlet } from "react-router-dom";
import { Navbar } from "../common/Navbar";

export const Authentication = () => {
	return (
		<section className="font-primary px-10 sm:px-10 md:px-10 lg:px-10 max-w-6xl mx-auto">
			<Navbar />
			<Outlet />
		</section>
	);
};
