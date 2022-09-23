import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { ImSearch } from 'react-icons/im';
import { AiFillHeart } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Logo from './Logo';
import headerdata from '../assets/headerdata';

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

					<ul className="flex flex-1 w-3/4 items-center justify-center gap-5 p-3 mr-6">
						{headerdata.map((item, i) => (
							<Link
								className="cursor-pointer font-medium  px-2 py-1 rounded-sm hover:text-green-600 active:bg-green-600 active:text-white"
								key={i}
								activeClass="active"
								to={item.path}
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								{item.label}
							</Link>
						))}
					</ul>

					<div className="flex items-center justify-center gap-5 mr-2">
						<div className="bg-slate-100 rounded-full p-2 hover:drop-shadow cursor-pointer">
							<ImSearch />
						</div>
						<div className="bg-slate-100 rounded-full p-2 hover:drop-shadow cursor-pointer">
							<AiFillHeart />
						</div>
						<div className="bg-slate-100 rounded-full p-2 hover:drop-shadow cursor-pointer">
							<FaShoppingCart />
						</div>
					</div>
				</Box>
			</Container>
		</nav>
	);
};

export default Navbar;
