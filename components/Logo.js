import { GiKnifeFork } from 'react-icons/gi';
import { Box, Typography } from '@mui/material';

const Logo = () => {
	return (
		<>
			<Box
				sx={{
					width: { xs: '30px', sm: 145 },
					height: 80,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '3px',
				}}
			>
				<GiKnifeFork className="text-2xl text-green-600 cursor-pointer" />
				<Typography
					variant="h7"
					component="h1"
					sx={{
						display: { xs: 'none', sm: 'block' },
					}}
					className="font-semibold text-xl cursor-pointer"
				>
					Koret Chow
				</Typography>
			</Box>
		</>
	);
};

export default Logo;
