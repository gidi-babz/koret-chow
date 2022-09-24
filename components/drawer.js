import React, { useState } from 'react';
import { Box, Drawer, IconButton } from '@mui/material';
import { Scrollbars } from 'react-custom-scrollbars';
import { IoMenuOutline } from 'react-icons/io5';
import { MdOutlineCancel } from 'react-icons/md';

import headerdata from '../assets/headerdata';
import { Link } from 'react-scroll';
import Logo from './Logo';
import { GiKnifeFork } from 'react-icons/gi';

const Sidebar = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	return (
		<div>
			<IconButton
				size="medium"
				edge="start"
				color="inherit"
				aria-label="Drawer"
				onClick={() => setIsDrawerOpen(true)}
			>
				<IoMenuOutline className="lg:hidden" />
			</IconButton>

			<Drawer
				anchor="left"
				open={isDrawerOpen}
				onClose={() => setIsDrawerOpen(false)}
			>
				<Box p={2} mt={2} width="300px" textAlign="start" role="presentation">
					<div className="flex justify-between items-center">
						<div className="flex justify-center items-center gap-1">
							<GiKnifeFork className="text-lg text-green-600" />
							<h2 className="font-semibold text-lg">Koret Chow</h2>
						</div>
						<div
							className="cursor-pointer"
							onClick={() => setIsDrawerOpen(false)}
						>
							<MdOutlineCancel className="text-xl text-green-600 hover:text-green-400" />
						</div>
					</div>
				</Box>
				<Scrollbars autoHide>
					<div className="flex flex-col justify-content align-items gap-4 h-full mt-6 mx-3">
						{headerdata.map((item, i) => (
							<Link
								className="cursor-pointer font-medium px-2 py-1 rounded-sm hover:text-green-600 active:bg-green-600 active:text-white active:ease-in border-b-2 border-solid border-slate-inherit"
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
					</div>
				</Scrollbars>
			</Drawer>
		</div>
	);
};

export default Sidebar;
