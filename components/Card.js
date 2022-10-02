import React, { useState } from 'react';
import { Checkbox, Tooltip } from '@mui/material';
import { IoEyeSharp } from 'react-icons/io5';
import { AiFillHeart } from 'react-icons/ai';

const Card = ({ children }) => {
	const [isVisible, setIsVisible] = useState(false);
	const label = { inputProps: { 'aria-label': 'Checkbox' } };

	return (
		<div
			className={`shadow-md p-2 bg-white mb-4 lg:mb-0 lg:cursor-pointer`}
			onMouseOver={() => setIsVisible(true)}
			onMouseLeave={() => setIsVisible(false)}
		>
			<>
				<div
					className={`flex justify-between items-center ease-in-out duration-300 lg:opacity-0 ${
						isVisible && 'lg:opacity-100'
					}`}
				>
					<Tooltip title="more" followCursor>
						<div className="p-2 rounded-full bg-slate-100 cursor-pointer">
							<IoEyeSharp />
						</div>
					</Tooltip>
					<Tooltip title="Save" followCursor>
						<div>
							<Checkbox
								// checked={checked}
								// onChange={handleChange}
								{...label}
								icon={<AiFillHeart />}
								checkedIcon={<AiFillHeart className="text-green-600" />}
							/>
						</div>
					</Tooltip>
				</div>
				{children}
			</>
		</div>
	);
};

export default Card;
