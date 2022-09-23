import React, { useState } from 'react';
import { Box, Drawer, IconButton } from '@mui/material';
import { IoMenuOutline } from 'react-icons/io5';

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
				<Box p={2} width="250px" textAlign="center" role="presentation">
					<h2>Sidebar</h2>
				</Box>
			</Drawer>
		</div>
	);
};

export default Sidebar;
