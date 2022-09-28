import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

const Header = () => {
	return (
		<header id="home" className="h-auto xl:h-screen w-full">
			<Navbar />
			<Hero />
		</header>
	);
};

export default Header;
