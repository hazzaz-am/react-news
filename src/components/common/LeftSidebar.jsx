import { useEffect, useState } from "react";
import { Title } from "../ui/Title";
import { FeaturedNews } from "./FeaturedNews";

export const LeftSidebar = () => {
	const [categories, setCategories] = useState([]);
	const [activeCategory, setActiveCategory] = useState("All News");

	useEffect(() => {
		fetch("/categories.json")
			.then((response) => response.json())
			.then((data) => setCategories(data));
	}, []);
	return (
		<div className="">
			<Title>All Category</Title>

			<div>
				<ul className="flex flex-col">
					{categories.map((category) => (
						<li
							className={`${
								activeCategory === category.name
									? "bg-[#E7E7E7] text-[#403F3F] font-semibold"
									: "font-medium text-[#9F9F9F]"
							} text-xl rounded-md py-4 pl-8 cursor-pointer`}
							key={category.id}
							onClick={() => setActiveCategory(category.name)}
						>
							{category.name}
						</li>
					))}
				</ul>
			</div>
			<FeaturedNews />
		</div>
	);
};
