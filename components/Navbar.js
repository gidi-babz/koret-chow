import React from 'react';
import Image from 'next/image';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Logo from './Logo';

const Navbar = () => {
	return (
		<nav className="h-20 shadow-lg">
			<CssBaseline />
			<Container maxWidth="lg">
				<Box
					sx={{
						width: '100%',
						height: '100%',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<Logo />

					<ul className="flex flex-1 w-3/4 items-center justify-center gap-8 p-3 mr-6">
						<li>Home</li>
						<li>Dishes</li>
						<li>About</li>
						<li>Menu</li>
						<li>Review</li>
						<li>Order</li>
					</ul>

					<ul className="flex flex-initial items-center justify-center gap-5 mr-2">
						<li>Icon 1</li>
						<li>Icon 2</li>
						<li>Icon 3</li>
					</ul>
				</Box>
			</Container>
		</nav>
	);
};

export default Navbar;
