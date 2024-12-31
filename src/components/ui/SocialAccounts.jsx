import { Title } from "./Title";
import facebook from "../../assets/fb.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";

export const SocialAccounts = () => {
	return (
		<div className="my-6">
			<Title>Find Us On</Title>
			<div className="border rounded-md">
				<a
					href="https://www.facebook.com/"
					target="_blank"
					className="text-lg font-medium text-[#706F6F] flex items-center gap-2 border-b p-4"
				>
					<div className="bg-[#F3F3F3] w-8 h-8 rounded-full flex items-center justify-center">
						<img src={facebook} alt="facebook" />
					</div>
					Facebook
				</a>
				<a
					href="https://x.com/"
					target="_blank"
					className="text-lg font-medium text-[#706F6F] flex items-center gap-2 border-b p-4"
				>
					<div className="bg-[#F3F3F3] w-8 h-8 rounded-full flex items-center justify-center">
						<img src={twitter} alt="twitter" />
					</div>
					Twitter
				</a>
				<a
					href="https://www.instagram.com/"
					target="_blank"
					className="text-base font-medium text-[#706F6F] flex items-center gap-2 p-4"
				>
					<div className="bg-[#F3F3F3] w-8 h-8 rounded-full flex items-center justify-center">
						<img src={instagram} alt="instagram" />
					</div>
					Instagram
				</a>
			</div>
		</div>
	);
};
