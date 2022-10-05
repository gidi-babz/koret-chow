import React from 'react';

const MenuCard = ({ children }) => {
	return (
		<div className="shadow-md rounded w-64 bg-white mb-4 lg:mb-0 lg:cursor-pointer">
			{children}
		</div>
	);
};

export default MenuCard;
