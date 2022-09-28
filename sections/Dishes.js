import * as React from 'react';
import Image from 'next/image';
import { Checkbox, Container, Tooltip } from '@mui/material';
import SectionHeading from '../components/SectionHeading';
import dishesdata from '../assets/dishesdata';
import Card from '../components/Card';
import Button from '../components/Button';

import { IoEyeSharp } from 'react-icons/io5';
import { AiFillHeart } from 'react-icons/ai';

const Dishes = () => {
	const label = { inputProps: { 'aria-label': 'Checkbox' } };
	const [checked, setChecked] = React.useState(false);

	const handleChange = (e) => {
		setChecked(e.target.checked);
	};

	return (
		<section id="dishes" className="bg-gray-100 py-12">
			<Container maxWidth="lg">
				<SectionHeading subHeading="Our Dishes" heading="POPULAR DISHES" />
				<div className="flex flex-wrap justify-center gap-4 lg:gap-3 my-10 lg:mx-40">
					{dishesdata.map((dish) => (
						<Card key={dish.id}>
							<div className="flex justify-between items-center">
								<Tooltip title="more" followCursor>
									<div className="p-2 rounded-full bg-slate-100 cursor-pointer">
										<IoEyeSharp />
									</div>
								</Tooltip>
								<Tooltip title="Save" followCursor>
									<div>
										<Checkbox
											checked={checked}
											onChange={handleChange}
											{...label}
											icon={<AiFillHeart />}
											checkedIcon={<AiFillHeart className="text-green-600" />}
										/>
									</div>
								</Tooltip>
							</div>
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
									<div className="flex justify-center items-center gap-2 mb-2">
										<span className="text-green-600 text-md mr-0 font-semibold self-center">
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
