import { Link } from "react-router-dom";
import img_banner from "../../../assets/demo-card-thumbnail.png";
import { IoIosArrowRoundBack } from "react-icons/io";

export const SingleNews = () => {
	return (
		<div className="border p-8 rounded-lg mb-6">
			<img className="w-full" src={img_banner} alt="" />
			<h2 className="font-bold text-[#403F3F] text-2xl my-4">
				Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid
				Package Yet
			</h2>
			<p className="text-[#706F6F] text-base">
				Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe,
				Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States,
				Worthy News (Worthy News) – U.S. President Joe Biden has announced
				nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked
				its independence day six months after Russia invaded the country.&apos;The
				United States of America is committed to supporting the people of
				Ukraine as they continue the fight to defend their sovereignty. As part
				of that commitment, I am proud to announce our biggest tranche of
				security assistance to date: approximately $2. Wednesday, August 24,
				2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military,
				News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy
				News) – U.S. President Joe Biden has announced nearly $3 billion in new
				U.S. military aid for Kyiv as Ukraine marked its independence day six
				months after Russia invaded the country.&apos;The United States of America is
				committed to supporting the people of Ukraine as they continue the fight
				to defend their sovereignty. As part of that commitment, I am proud to
				announce our biggest tranche of security assistance to date:
				approximately $2.
			</p>
			<Link to="/">
				<button className="flex items-center gap-2 text-white bg-[#D72050] text-xl font-medium py-2 px-4 mt-6">
					<IoIosArrowRoundBack className="text-2xl" />
					All news in this category
				</button>
			</Link>
		</div>
	);
};
