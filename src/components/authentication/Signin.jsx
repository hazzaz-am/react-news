import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/hooks/useAuth";
import { useState } from "react";

export const Signin = () => {
	const { handleSignin } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const location = useLocation();
	const navigate = useNavigate();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log(email, password);
		handleSignin(email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				{
					location?.state ? navigate(location.state) : navigate("/");
				}
				alert("Login successfully");
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	return (
		<div className="p-20">
			<div className="bg-white shadow-md p-20 w-[752px] mx-auto">
				<h2 className="font-semibold text-4xl text-center text-[#403F3F] pb-14 border-b">
					Login your account
				</h2>

				<form onSubmit={handleFormSubmit}>
					<div className="mt-12 flex flex-col">
						<label
							htmlFor="email"
							className="font-semibold text-xl text-[#403F3F] mb-3"
						>
							Email address
						</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Enter your email address"
							className="bg-[#F3F3F3] py-4 px-5 rounded-md"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mt-6 flex flex-col">
						<label
							htmlFor="password"
							className="font-semibold text-xl text-[#403F3F] mb-3"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="Enter your Password"
							className="bg-[#F3F3F3] py-4 px-5 rounded-md"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="mt-6">
						<button
							type="submit"
							className="bg-[#403F3F] w-full text-white text-xl sm:text-lg font-semibold py-2 px-6"
						>
							Login
						</button>
					</div>
				</form>
				<p className="mt-4 text-center font-semibold text-[#706F6F]">
					Don&apos;t Have An Account ?{" "}
					<Link to="/signup" className="text-[#FF8C47]">
						Sign Up
					</Link>
				</p>
			</div>
		</div>
	);
};
