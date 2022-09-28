const Button = ({ children }) => {
	return (
		<button
			type="button"
			className="text-sm mt-2 btn rounded-md py-1.5 px-4 cursor-pointer hover:opacity-70 outline-none"
		>
			{children}
		</button>
	);
};

export default Button;
