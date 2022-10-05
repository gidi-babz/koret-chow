import React, { useState } from 'react';
import Image from 'next/image';

import { Container, Pagination, paginationItemClasses } from '@mui/material';
import SectionHeading from '../components/SectionHeading';
import MenuCard from '../components/MenuCard';
import Ratings from '../components/Ratings';
import Button from '../components/Button';

import menudata from '../assets/menudata';

const Menu = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const menuPerPage = 8;

	const lastMenuIndex = currentPage * menuPerPage;

	const firstMenuIndex = lastMenuIndex - menuPerPage;

	const currentMenuDishes = menudata.slice(firstMenuIndex, lastMenuIndex);

	const paginate = (e, value) => {
		setCurrentPage(value);

		window.scrollTo({ top: 20, behavior: 'smooth' });
	};
	return (
		<section id="menu" className="bg-gray-100 py-12">
			<Container maxWidth="lg">
				<SectionHeading subHeading="Our Menu" heading="TODAY'S SPECIALITY" />
				<div className="flex flex-wrap justify-center items-start gap-4 lg:gap-3 my-10 lg:mx-6">
					{currentMenuDishes?.map((menu, i) => (
						<MenuCard key={i}>
							<div className="flex flex-col items-start justify-start p-3 w-full">
								<div
									className="justify-self-start "
									style={{ width: 'auto', height: 'auto' }}
								>
									<Image
										src={menu.imgSrc}
										alt={menu.title}
										width={290}
										height={180}
										className="object-cover w-max h-max rounded"
									/>
								</div>
								<div className="text-center">
									<Ratings ratings={menu.rating} />
								</div>
								<p className="text-start text-md font-bold">{menu.title}</p>
								<p className="text-start text-sm text-gray-400 my-2 w-full">
									{menu.desc}
								</p>
								<div className="flex justify-center ease-in duration-300 items-center gap-2 mb-2 lg:hover:scale-x-105">
									<Button>Add To Cart</Button>
									<span className="text-green-600 text-md mr-1 font-semibold self-center">
										&#x20A6;{menu.price}
									</span>
								</div>
							</div>
						</MenuCard>
					))}
				</div>
				<div className="flex justify-center mt-8">
					{menudata.length > 8 && (
						<Pagination
							size="small"
							defaultPage={1}
							count={Math.ceil(menudata.length / menuPerPage)}
							page={currentPage}
							onChange={paginate}
						/>
					)}
				</div>
			</Container>
		</section>
	);
};

export default Menu;
