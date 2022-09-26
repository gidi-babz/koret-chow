import Image from 'next/image';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';

import { Container } from '@mui/material';
import herodata from '../assets/herodata';

const Hero = () => {
	return (
		<Container maxWidth="lg" className="w-full h-full">
			<div className="p-4 w-full h-max-content  lg:mt-14">
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={50}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					// scrollbar={{ draggable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log('slide change')}
					className="w-full h-full"
					effect="fade"
				>
					{herodata.map((hero, i) => (
						<SwiperSlide className="h-full w-full" key={i}>
							<div className="h-full w-full p-2 flex flex-col md:flex-row items-center justify-center  gap-5">
								<div className="flex flex-col gap-2 flex-1 self-start md:mt-24  md:ml-20">
									<p className="text-lg text-green-600 font-semibold">
										Our Special Dish
									</p>
									<h2 className="text-5xl hero-title font-bold">
										{hero.title}
									</h2>
									<p className="text-md text-gray-400 mt-2">
										{hero.description}
									</p>
									<div>
										<button
											type="button"
											className="text-sm mt-2 btn rounded-md py-1.5 px-4 cursor-pointer hover:opacity-70 outline-none"
										>
											Order Now
										</button>
									</div>
								</div>
								<div className="lg:justify-self-end flex-1 mt-12 md:mt-16 lg:mr-14 lg:mt-auto">
									<Image
										src={hero.imageSrc}
										alt={hero.title}
										width={450}
										height={450}
									/>
								</div>
							</div>
						</SwiperSlide>
					))}
					<br />
				</Swiper>
			</div>
		</Container>
	);
};

export default Hero;
