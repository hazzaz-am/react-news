import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Title } from "./Title";

export const LoginForm = () => {
	return (
		<div>
			<Title>Login with</Title>
			<div className="space-y-2">
				<button className="w-full flex items-center justify-center gap-2 py-2 border border-blue-500 text-blue-500 rounded-lg">
					<FaGoogle /> Login with Google
				</button>
				<button className="w-full flex items-center justify-center gap-2 py-2 border border-gray-500 rounded-lg text-gray-500">
					<FaGithub /> Login with Github
				</button>
			</div>
		</div>
	);
};
