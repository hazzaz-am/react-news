import { useEffect, useState } from "react";
import { LoginForm } from "../../components/ui/LoginForm";
import { Qzone } from "../../components/ui/Qzone";
import { SocialAccounts } from "../../components/ui/SocialAccounts";
import { Title } from "../../components/ui/Title";
import { SingleNews } from "./components/SingleNews";
import { CiCalendar } from "react-icons/ci";

export const NewsDetails = () => {
	const [news, setNews] = useState([]);

	useEffect(() => {
		fetch("/news.json")
			.then((response) => response.json())
			.then((data) => setNews(data));
	}, []);
	return (
		<section className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10">
			<div className="md:col-span-2">
				<Title>Dragon News</Title>
				<SingleNews />
				<Title>Editors Insight</Title>
				<div className="flex gap-4">
					{news.slice(0, 3).map((item) => (
						<div key={item._id}>
							<img
								className="w-[267px] h-[160px] object-center"
								src={item.thumbnail_url}
								alt=""
							/>
							<h3 className="font-semibold text-sm text-[#403F3F] mb-4 mt-2">
								{item.title}
							</h3>
							<p className="flex items-center gap-2 text-[#9F9F9F] font-medium text-sm">
								<CiCalendar className="text-xl" />
								<span>{item.author.published_date.split(" ")[0]}</span>
							</p>
						</div>
					))}
				</div>
			</div>
			<div className="">
				<LoginForm />
				<SocialAccounts />
				<Qzone />
			</div>
		</section>
	);
};
