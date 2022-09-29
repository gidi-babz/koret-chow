import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

const Ratings = ({ ratings }) => {
	const totalRatings = [];

	for (let i = 0; i < 5; i++) {
		if (i < ratings) {
			totalRatings.push(
				<li
					key={i}
					className="text-sm flex justify-center items-center text-green-600 mr-px my-2"
				>
					<FaStar />
				</li>
			);
		} else {
			totalRatings.push(
				<li
					key={i}
					className="flex justify-center items-center text-green-600 text-sm mr-px my-2"
				>
					<FaRegStar />
				</li>
			);
		}
	}
	return (
		<div>
			<ul className="flex justify-center items-center">{totalRatings}</ul>
		</div>
	);
};

export default Ratings;
