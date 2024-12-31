import moment from "moment";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<section className="text-center py-10">
			<h1 className="font-title text-3xl sm:text-6xl text-[#444444] cursor-pointer">
				<Link to='/'>The Dragon News</Link>
			</h1>
			<p className="text-base sm:text-base text-[#706F6F] mt-4">
				Journalism Without Fear or Favour
			</p>
			<p className="font-medium text-lg sm:text-base text-[#706F6F] mt-2">
				<span className="text-[#403F3F]">{moment().format("dddd")},</span>{" "}
				{moment().format("MMMM DD, YYYY")}
			</p>
		</section>
	);
};
