import { LeftSidebar } from "../../components/common/LeftSidebar";
import { Navbar } from "../../components/common/Navbar";
import { BreakingNews } from "./components/BreakingNews";
import { NewsPost } from "./components/NewsPost";
import { RightSidebar } from "./components/RightSidebar";

export const HomePage = () => {
	return (
		<section className="">
			<BreakingNews/>
			<Navbar />

			{/* main layout */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
				<div>
					<LeftSidebar />
				</div>
				<div className="md:col-span-2">
					<NewsPost />
				</div>
				<div>
					<RightSidebar />
				</div>
			</div>
		</section>
	);
};
