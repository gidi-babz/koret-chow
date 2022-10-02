import React from 'react';
import Image from 'next/image';
import { Container } from '@mui/material';

import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Button from '../components/Button';
import Ratings from '../components/Ratings';
import dishesdata from '../assets/dishesdata';

const Dishes = () => {
	return (
		<section id="dishes" className="bg-gray-100 py-12">
			<Container maxWidth="lg">
				<SectionHeading subHeading="Our Dishes" heading="POPULAR DISHES" />
				<div className="flex flex-wrap justify-center gap-4 lg:gap-3 my-10 lg:mx-6">
					{dishesdata.map((dish) => (
						<Card key={dish.id}>
							<div className="flex flex-col items-start">
								<div className="mx-5" style={{ width: '200px' }}>
									<Image
										src={dish.imageSrc}
										alt={dish.title}
										width={180}
										height={150}
										className="object-contain w-max h-max"
									/>
									<p className="text-center text-md font-bold">{dish.title}</p>
									<div className="text-center">
										<Ratings ratings={dish.ratings} />
									</div>
									<div className="flex justify-center ease-in duration-300 items-center gap-2 mb-2 lg:hover:scale-x-110">
										<span className="text-green-600 text-md mr-1 font-semibold self-center">
											&#x20A6;{dish.price}
										</span>
										<Button>Add To Cart</Button>
									</div>
								</div>
							</div>
						</Card>
					))}
				</div>
			</Container>
		</section>
	);
};

export default Dishes;
