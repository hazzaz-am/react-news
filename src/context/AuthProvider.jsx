import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import PropTypes from "prop-types";
import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");

	// sign up with email and password
	const handleCreateAccount = async (email, password) => {
		setIsLoading(true);
		return await createUserWithEmailAndPassword(auth, email, password);
	};

	// sign in with email and password
	const handleSignin = async (email, password) => {
		setIsLoading(true);
		return await signInWithEmailAndPassword(auth, email, password);
	};

	// signin with google
	const handleGoogleSignin = async () => {
		setIsLoading(true);
		return await signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result.user;
				console.log(user);
				alert("Successfully signed in");
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	// logout
	const handleLogOut = async () => {
		setIsLoading(true);
		return await signOut(auth);
	};

	// set current user
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setCurrentUser(user);
			}
			setIsLoading(false);
		});

		return () => unSubscribe();
	}, []);

	const value = {
		currentUser,
		isLoading,
		error,
		setCurrentUser,
		setIsLoading,
		setError,
		handleCreateAccount,
		handleSignin,
		handleGoogleSignin,
		handleLogOut,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// prop types
AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
