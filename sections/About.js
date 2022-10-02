import React from 'react';
import Image from 'next/image';
import { Container } from '@mui/material';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const About = () => {
	return (
		<section id="about" className="bg-white py-12">
			<Container maxWidth="lg">
				<SectionHeading subHeading="About Us" heading="WHY CHOOSE US?" />
				<div className="flex items-center gap-5 mt-12">
					<div className="flex-1">
						<Image
							src="/img/about-img.png"
							alt="about-us-image"
							width={600}
							height={450}
						/>
					</div>
					<div className="flex flex-col justify-start justify-self-start items-start flex-1 gap-3">
						<h2 className="text-3xl font-semibold about-desc-heading mb-px ">
							Best Food In The Country
						</h2>
						<p className="text-lg text-slate-400 mb-0">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Distinctio repudiandae perspiciatis impedit debitis amet odit et,
							ea blanditiis odio ipsa, illo quos architecto?
						</p>
						<p className="text-lg text-slate-400">
							Illo quos architecto? Recusandae quo magni odit placeat, incidunt
							ratione perspiciatis impedit debitis.
						</p>
						<Button>Learn More</Button>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default About;
