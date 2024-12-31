import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { HomePage } from "../pages/home/HomePage";
import { Signin } from "../components/authentication/Signin";
import { Signup } from "../components/authentication/Signup";
import { Authentication } from "../components/authentication/Authentication";
import { NewsDetails } from "../pages/news/NewsDetails";
import { PrivateRoute } from "./PrivateRoute";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/news/:id",
				element: (
					<PrivateRoute>
						<NewsDetails />
					</PrivateRoute>
				),
			},
		],
	},
	{
		path: "*",
		element: <Authentication />,
		children: [
			{
				path: "/*signin",
				element: <Signin />,
			},
			{
				path: "/*signup",
				element: <Signup />,
			},
		],
	},
]);
