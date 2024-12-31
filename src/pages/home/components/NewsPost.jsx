import { useEffect, useState } from "react";
import { Title } from "../../../components/ui/Title";
import { NewsComponent } from "./NewsComponent";

export const NewsPost = () => {
	const [news, setNews] = useState([]);

	useEffect(() => {
		fetch("/news.json")
			.then((res) => res.json())
			.then((data) => setNews(data));
	}, []);

	return (
		<div className="">
			<Title>News Home</Title>
			{news.length > 0 ? (
				<>
					{news.map((item) => (
						<NewsComponent key={item._id} news={item} />
					))}
				</>
			) : (
				<p>No News Found</p>
			)}
		</div>
	);
};
