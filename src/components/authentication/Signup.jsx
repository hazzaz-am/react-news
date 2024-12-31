import { Link } from "react-router-dom";
import { useAuth } from "../../context/hooks/useAuth";
import { useState } from "react";

export const Signup = () => {
	const { handleCreateAccount } =
		useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [photoUrl, setPhotoUrl] = useState("");

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log(email, password);
		handleCreateAccount(email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				alert("Account created successfully");
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
	return (
		<div className="p-20">
			<div className="bg-white shadow-md p-20  w-[752px] mx-auto">
				<h2 className="font-semibold text-4xl text-[#403F3F] pb-14 border-b text-center">
					Register your account
				</h2>

				<form onSubmit={handleFormSubmit}>
					<div className="mt-12 flex flex-col">
						<label
							htmlFor="name"
							className="font-semibold text-xl text-[#403F3F] mb-3"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							placeholder="Enter your name"
							className="bg-[#F3F3F3] py-4 px-5 rounded-md"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="mt-6 flex flex-col">
						<label
							htmlFor="photo"
							className="font-semibold text-xl text-[#403F3F] mb-3"
						>
							Photo Url
						</label>
						<input
							type="text"
							id="photo"
							placeholder="Enter your image link"
							className="bg-[#F3F3F3] py-4 px-5 rounded-md"
							value={photoUrl}
							onChange={(e) => setPhotoUrl(e.target.value)}
						/>
					</div>
					<div className="mt-6 flex flex-col">
						<label
							htmlFor="email"
							className="font-semibold text-xl text-[#403F3F] mb-3"
						>
							Email address
						</label>
						<input
							type="email"
							id="email"
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
							placeholder="Enter your Password"
							className="bg-[#F3F3F3] py-4 px-5 rounded-md"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="mt-6">
						<button className="bg-[#403F3F] w-full text-white text-xl sm:text-lg font-semibold py-2 px-6">
							Signup
						</button>
					</div>
				</form>
				<p className="mt-4 text-center font-semibold text-[#706F6F]">
					Already Have An Account ?{" "}
					<Link to="/signin" className="text-[#FF8C47]">
						Sign In
					</Link>
				</p>
			</div>
		</div>
	);
};
