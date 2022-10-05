import React, { useState } from 'react';

import { Checkbox, Tooltip } from '@mui/material';
import { AiFillHeart } from 'react-icons/ai';

const MenuCard = ({ children }) => {
	const [isVisible, setIsVisible] = useState(false);
	const label = { inputProps: { 'aria-label': 'Checkbox' } };

	return (
		<div
			className="shadow-md relative rounded w-64 bg-white mb-4 lg:mb-0 lg:cursor-pointer"
			onMouseOver={() => setIsVisible(true)}
			onMouseLeave={() => setIsVisible(false)}
		>
			<>
				<Tooltip title="Save" followCursor>
					<div
						className={`ease-in duration-300 hover:bg-green-100 lg:opacity-0 ${
							isVisible && 'lg:opacity-100'
						} absolute top-4 right-4 z-10 bg-slate-100 rounded-full`}
					>
						<Checkbox
							// checked={checked}
							// onChange={handleChange}
							{...label}
							sx={{ fontSize: 28 }}
							icon={<AiFillHeart />}
							checkedIcon={<AiFillHeart className="text-green-600" />}
						/>
					</div>
				</Tooltip>
				{children}
			</>
		</div>
	);
};

export default MenuCard;
