import { Outlet } from "react-router-dom";
import { Header } from "./pages/home/components/Header";

export const App = () => {
	return (
		<>
			<Header />
			<main className="font-primary px-10 sm:px-10 md:px-10 lg:px-10 max-w-6xl mx-auto">
				<Outlet />
			</main>
		</>
	);
};
