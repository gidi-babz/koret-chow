const Button = ({ children }) => {
	return (
		<button
			type="button"
			className="text-sm mt-2 btn transition-all duration-300 ease-in rounded-md py-1.5 px-4 cursor-pointer hover:bg-green-700 outline-none z-10"
		>
			{children}
		</button>
	);
};

export default Button;
