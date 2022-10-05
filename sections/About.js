import React from 'react';
import Image from 'next/image';
import { Container } from '@mui/material';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdPayment } from 'react-icons/md';
import { RiCustomerService2Fill } from 'react-icons/ri';

const About = () => {
	return (
		<section id="about" className="bg-white py-12">
			<Container maxWidth="lg">
				<SectionHeading subHeading="About Us" heading="WHY CHOOSE US?" />
				<div className="flex flex-col lg:flex-row items-center gap-5 mt-12">
					<div className="flex-1">
						<Image
							src="/img/about-img.png"
							alt="about-us-image"
							width={600}
							height={450}
						/>
					</div>
					<div className="flex flex-col justify-start justify-self-start items-start flex-1 gap-3 lg:mb-12">
						<h2 className="text-3xl text-center self-center lg:self-start font-bold about-desc-heading mb-px ">
							Best Food In The Country
						</h2>
						<p className="text-md text-slate-400 mb-3 sm:mb-2">
							Our online ordering solution allows you to make orders through our
							website and mobile app. From quick setup to instant order
							notifications, dynamic pricing, and instant payment.
						</p>
						<p className="text-md text-slate-400 mb-2 sm:mb-1">
							Koret chow support is available nationwide. Contact our support
							team and we'll connect you to an expert to get your issue resolved
							within 24 business hours.
						</p>
						<div className="flex flex-wrap justify-start items-center gap-3 mt-3 mb-4">
							<div className="flex justify-start items-center gap-2 mr-3 lg:mr-2 mb-3 lg:mb-2 shadow-md py-2 px-4 bg-slate-100 rounded-sm">
								<TbTruckDelivery className="text-xl text-green-600 mr-1 lg:mr-0" />
								<span className="text-xs about__desc--text">Free Delivery</span>
							</div>
							<div className="flex justify-start items-center gap-2 mr-3 lg:mr-2 mb-3 lg:mb-2 shadow-md py-2 px-4 bg-slate-100 rounded-sm">
								<MdPayment className="text-xl text-green-600 mr-1 lg:mr-0" />
								<span className="text-xs about__desc--text">Easy Payments</span>
							</div>
							<div className="flex justify-start items-center gap-2 shadow-md py-2 px-4 mb-3 lg:mb-2 bg-slate-100 rounded-sm">
								<RiCustomerService2Fill className="text-xl text-green-600 mr-1 lg:mr-0" />
								<span className="text-xs about__desc--text">24/7 Service</span>
							</div>
						</div>

						<Button>Learn More</Button>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default About;
