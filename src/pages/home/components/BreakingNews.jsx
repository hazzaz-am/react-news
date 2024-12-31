import Marquee from "react-fast-marquee";
import { Button } from "../../../components/ui/Button";

const breakingNews = [
	"Global Tech Giant Unveils Revolutionary Quantum Computing Breakthrough",
	"Historic Climate Agreement Reached at International Summit",
	"Major Medical Discovery Could Transform Cancer Treatment",
	"Unprecedented Space Mission Successfully Lands on Europa",
	"Groundbreaking AI System Achieves New Milestone in Problem-Solving",
];

export const BreakingNews = () => {
	const newsLinks = breakingNews.map((heading) => (
		<li key={heading}>{heading}</li>
	));
	return (
		<div className="flex items-center sticky top-4 bg-[#f3f3f3] py-2">
			<div className="absolute z-10">
				<Button>Latest News</Button>
			</div>
			<Marquee>
				<ul className="flex items-center gap-10">{newsLinks}</ul>
			</Marquee>
		</div>
	);
};
