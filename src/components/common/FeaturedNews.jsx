import { useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";

export const FeaturedNews = () => {
	const [news, setNews] = useState([]);

	useEffect(() => {
		fetch("/news.json")
			.then((response) => response.json())
			.then((data) => setNews(data));
	}, []);
	return (
		<div className="mt-6">
			{news.length > 0 ? (
				<>
					{news.slice(0, 3).map((featured) => (
						<div key={featured._id} className="mb-6">
							<img
								className="w-[267px] h-[150px] object-cover rounded-md"
								src={featured.thumbnail_url}
								alt="thumbnail"
							/>
							<div>
								<h4 className="font-semibold text-xl text-[#403F3F] my-5">
									{featured.title}
								</h4>
								<div className="flex items-center justify-between">
									<p className="font-medium text-base text-[#403F3F]">
										{featured.author.name}
									</p>
									<p className="flex items-center gap-2 text-[#9F9F9F] font-medium text-base">
										<CiCalendar className="text-xl" />
										<span>{featured.author.published_date.split(" ")[0]}</span>
									</p>
								</div>
							</div>
						</div>
					))}
				</>
			) : (
				<p className="">No Featured News</p>
			)}
		</div>
	);
};
