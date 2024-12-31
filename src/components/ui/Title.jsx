import PropTypes from "prop-types";

export const Title = ({children}) => {
	return (
		<h2 className="font-semibold text-xl text-[#403F3F] mb-6">{children}</h2>
	);
};

// prop types
Title.propTypes = {
	children: PropTypes.node.isRequired,
};
