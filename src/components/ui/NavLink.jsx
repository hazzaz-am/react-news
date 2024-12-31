import { NavLink as Link } from "react-router-dom";
import PropTypes from "prop-types";

export const NavLink = ({ path, page }) => {
	return (
		<Link
			to={path}
			className={({ isActive }) =>
				isActive
					? "text-[#403F3F] font-bold text-lg"
					: " text-[#706F6F] text-lg"
			}
		>
			{page}
		</Link>
	);
};

// prop types
NavLink.propTypes = {
	path: PropTypes.string.isRequired,
	page: PropTypes.string.isRequired,
};
