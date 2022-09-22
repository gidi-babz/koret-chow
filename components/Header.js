import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

const Header = () => {
	return (
		<header className="h-screen w-full">
			<Navbar />
			<Hero />
		</header>
	);
};

export default Header;
