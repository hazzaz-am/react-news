import PropTypes from "prop-types";
import {
	IoShareSocialOutline,
	IoBookmarkOutline,
	IoStarOutline,
	IoEyeSharp,
} from "react-icons/io5";
import { Link } from "react-router-dom";

export const NewsComponent = ({ news }) => {
	const {
    _id,
		rating: { number },
		total_view,
		title,
		author: { name, published_date, img },
		image_url,
		details,
	} = news;
	return (
		<div className="mt-6 border rounded-md">
			<div className="flex items-center justify-between bg-[#F3F3F3] p-5">
				<div className="flex items-center gap-3">
					<img className="w-10 h-10 rounded-full" src={img} alt="" />
					<div>
						<h4 className="font-semibold text-base text-[#403F3F]">{name}</h4>
						<p className="text-[#706F6F] text-sm">{published_date}</p>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<IoBookmarkOutline className="text-2xl cursor-pointer text-[#706F6F]" />
					<IoShareSocialOutline className="text-2xl cursor-pointer text-[#706F6F]" />
				</div>
			</div>
			<div className="p-5">
				<h2 className="text-[#403F3F] font-bold text-xl mb-5">{title}</h2>
				<img src={image_url} alt="" />
				<p className="py-7 border-b text-base text-[#706F6F]">
					{details?.slice(0, 250)}...{" "}
					{details.length > 250 && (
						<Link
							to={`/news/${_id}`}
							className="text-[#FF8C47] font-semibold block"
						>
							Read More
						</Link>
					)}{" "}
				</p>
				<div className="flex items-center justify-between pt-5">
					<div className="flex items-center gap-3">
						<div className="flex items-center gap-1">
							<IoStarOutline className="text-[#FF8C47] text-lg" />
							<IoStarOutline className="text-[#FF8C47] text-lg" />
							<IoStarOutline className="text-[#FF8C47] text-lg" />
							<IoStarOutline className="text-[#FF8C47] text-lg" />
							<IoStarOutline className="text-[#FF8C47] text-lg" />
						</div>
						<p className="text-base font-medium text-[#706F6F]">{number}</p>
					</div>
					<p className="flex items-center gap-2 font-medium text-base text-[#706F6F]">
						<IoEyeSharp className="text-lg" />
						<span>{total_view}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

// prop types
NewsComponent.propTypes = {
	news: PropTypes.object,
	_id: PropTypes.string,
	number: PropTypes.string,
	title: PropTypes.string,
	name: PropTypes.string,
	published_date: PropTypes.string,
	img: PropTypes.string,
	image_url: PropTypes.string,
	details: PropTypes.string,
};
