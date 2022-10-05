import React from 'react';
import { Container } from '@mui/material';
import SectionHeading from '../components/SectionHeading';

const Review = () => {
	return (
		<section id="review" className="bg-white py-12">
			<Container maxWidth="lg">
				<SectionHeading
					subHeading="Customer's Review"
					heading="WHAT THEY SAY?"
				/>
			</Container>
		</section>
	);
};

export default Review;
