import { Link } from "react-router-dom";
import userImg from "../../assets/user.png";
import { Button } from "../ui/Button";
import { NavLink } from "../ui/NavLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth } from "../../context/hooks/useAuth";

const navLinks = [
	{
		path: "/",
		page: "Home",
	},
	{
		path: "/about",
		page: "About",
	},
	{
		path: "/career",
		page: "Career",
	},
];

export const Navbar = () => {
	const { currentUser, handleLogOut, setCurrentUser } =
		useAuth();
	const routes = navLinks.map((link) => (
		<NavLink key={link.page} path={link.path} page={link.page} />
	));

	const handleSignOut = () => {
		handleLogOut()
			.then(() => {
				setCurrentUser(null);
				alert("Log out successfully");
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	return (
		<nav className="my-5 flex items-center justify-between">
			<GiHamburgerMenu className="text-2xl sm:hidden" />
			<ul className="hidden sm:flex flex-col sm:flex-row sm:flex-1 sm:items-center gap-6 sm:justify-center">
				{routes}
			</ul>
			<div className="flex items-center gap-3">
				<img src={userImg} alt="user_img" />
				{currentUser ? (
					<button
						className="bg-[#403F3F] text-white text-xl sm:text-lg font-semibold py-2 px-6"
						onClick={handleSignOut}
					>
						Logout
					</button>
				) : (
					<Link to="/signin">
						<Button>Login</Button>
					</Link>
				)}
			</div>
		</nav>
	);
};
