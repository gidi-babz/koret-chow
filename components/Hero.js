import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';

import { Container } from '@mui/material';

const Hero = () => {
	return (
		<Container maxWidth="lg" className="w-full h-full">
			<div className="p-4 w-full h-full">
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
					<SwiperSlide className="h-full w-full">
						<div className="h-full w-full p-2">Slide 1</div>
					</SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide>
					...
				</Swiper>
			</div>
		</Container>
	);
};

export default Hero;
