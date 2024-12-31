import PropTypes from "prop-types";
import { useAuth } from "../context/hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
	const { currentUser, isLoading } = useAuth();
  const location = useLocation()

	if (isLoading) {
		return <h2 className="text-4xl text-center">Loading...</h2>;
	}
	if (currentUser) {
		return children;
	}
	return <Navigate to="/signin" state={location.pathname} />;
};

PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
};
