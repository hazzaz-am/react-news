import PropTypes from "prop-types";

export const Button = ({ children, onLogOut }) => {
	return (
		<button
			onClick={onLogOut}
			className="bg-[#403F3F] text-white text-xl sm:text-lg font-semibold py-2 px-6"
		>
			{children}
		</button>
	);
};

// prop types
Button.propTypes = {
	children: PropTypes.node.isRequired,
	onLogOut: PropTypes.func
};
