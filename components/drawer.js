import React, { useState } from 'react';
import { Link as NavLink } from 'react-scroll';
import Link from 'next/link';

import { Box, Drawer, IconButton } from '@mui/material';
import { Scrollbars } from 'react-custom-scrollbars';
import { IoMenuOutline } from 'react-icons/io5';
import { MdOutlineCancel } from 'react-icons/md';
import { GiKnifeFork } from 'react-icons/gi';

import headerdata from '../assets/headerdata';
import drawericons from '../assets/drawericons';

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
				className="self-center lg:hidden"
			>
				<IoMenuOutline className="lg:hidden self-center" />
			</IconButton>

			<Drawer
				anchor="left"
				open={isDrawerOpen}
				onClose={() => setIsDrawerOpen(false)}
			>
				<Box p={2} mt={2} width="320px" textAlign="start" role="presentation">
					<div className="flex justify-between items-center">
						<div className="flex justify-center items-center gap-3 lg:gap-1">
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
					<div className="flex flex-col justify-content align-items gap-2 lg:gap-4 h-full mt-6 mx-3">
						{headerdata.map((item, i) => (
							<NavLink
								className="cursor-pointer font-medium px-2 py-1 rounded-sm hover:text-green-600 active:bg-green-600 active:text-white mb-5 border-b-2 border-solid border-slate-inherit"
								key={i}
								activeClass="active"
								to={item.path}
								spy={true}
								smooth={true}
								offset={-80}
								duration={600}
								onClick={() => setIsDrawerOpen(false)}
							>
								{item.label}
							</NavLink>
						))}

						<div className="mt-auto flex justify-center items-center gap-3 mb-8">
							{drawericons.map((item, i) => (
								<div className="p-2 mr-2 rounded-full bg-slate-100" key={i}>
									<Link
										target="_blank"
										rel="noopener noreferrer"
										href={item.href}
									>
										{item.icon}
									</Link>
								</div>
							))}
						</div>
					</div>
				</Scrollbars>
			</Drawer>
		</div>
	);
};

export default Sidebar;
