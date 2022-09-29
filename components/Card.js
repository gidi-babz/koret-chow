import React from 'react';

const Card = ({ children }) => {
	return (
		<div className="shadow-md p-2 bg-white mb-4 lg:mb-0 cursor-pointer">
			{children}
		</div>
	);
};

export default Card;
