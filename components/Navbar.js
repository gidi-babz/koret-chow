import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { ImSearch } from 'react-icons/im';
import { AiFillHeart } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';

import CssBaseline from '@mui/material/CssBaseline';
import { Badge, Box, Container, Tooltip } from '@mui/material';
import Logo from './Logo';
import headerdata from '../assets/headerdata';
import Sidebar from './drawer';

import { useStateContext } from '../context/StateContext';

const Navbar = () => {
	const [count, setCount] = useState(1);
	const [invisible, setInvisible] = useState(true);

	const { isSticky, setIsSticky } = useStateContext();

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY >= 550);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	return (
		<nav
			className={`h-20 w-full shadow-lg overflow-hidden bg-white ease-in-out duration-300 ${
				isSticky ? 'fixed top-0' : null
			}  z-50 `}
		>
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

					<ul className="flex-1 w-3/4 items-center justify-center gap-5 p-3 mr-6 hidden lg:flex">
						{headerdata.map((item, i) => (
							<Link
								className="cursor-pointer font-small px-2 py-1 rounded-sm hover:text-green-600 active:bg-green-600 active:text-white"
								key={i}
								activeClass="active"
								to={item.path}
								spy={true}
								smooth={true}
								offset={-80}
								duration={600}
							>
								{item.label}
							</Link>
						))}
					</ul>

					<div className="flex items-center justify-center gap-4 ml-auto sm:ml-80 md:ml-auto lg:gap-5 lg:ml-0 mr-2 self-center">
						<Tooltip title="Search">
							<div className="bg-slate-100 mr-2 lg:mr-0 rounded-full p-2 hover:drop-shadow cursor-pointer outline-none">
								<ImSearch />
							</div>
						</Tooltip>
						<Tooltip title="Saved">
							<div className="bg-slate-100 mr-2 lg:mr-0 rounded-full p-2 hover:drop-shadow cursor-pointer outline-none">
								<AiFillHeart />
							</div>
						</Tooltip>
						<Tooltip title="Cart">
							<Badge badgeContent={4} color="success" invisible={invisible}>
								<div className="bg-slate-100 rounded-full p-2 hover:drop-shadow cursor-pointer outline-none">
									<FaShoppingCart />
								</div>
							</Badge>
						</Tooltip>
					</div>
					<div className="flex items-center justify-center ml-2 cursor-pointer self-center">
						<Sidebar />
					</div>
				</Box>
			</Container>
		</nav>
	);
};

export default Navbar;
