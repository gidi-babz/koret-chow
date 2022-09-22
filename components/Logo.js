import { GiKnifeFork } from 'react-icons/gi';
import { Box, Typography } from '@mui/material';

const Logo = () => {
	return (
		<>
			<Box
				sx={{
					width: 145,
					height: 80,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '3px',
				}}
			>
				<GiKnifeFork className="text-2xl text-green-600" />
				<Typography
					variant="h7"
					component="h1"
					className="font-semibold text-xl"
				>
					Koret Chow
				</Typography>
			</Box>
		</>
	);
};

export default Logo;
