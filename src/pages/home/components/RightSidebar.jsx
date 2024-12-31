import { LoginForm } from "../../../components/ui/LoginForm";
import { Qzone } from "../../../components/ui/Qzone";
import { SocialAccounts } from "../../../components/ui/SocialAccounts";
import { Sponsor } from "../../../components/ui/Sponsor";

export const RightSidebar = () => {
	return (
		<div className="">
			<LoginForm />
			<SocialAccounts />
			<Qzone />
			<Sponsor />
		</div>
	);
};
