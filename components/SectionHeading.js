import React from 'react';

const SectionHeading = ({ subHeading, heading }) => {
	return (
		<div className="text-center">
			<p className="text-md font-semibold text-green-600">{subHeading}</p>
			<h2 className="text-2xl font-bold dishes-heading mb-6">{heading}</h2>
		</div>
	);
};

export default SectionHeading;
