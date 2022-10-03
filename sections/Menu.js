import { Container } from '@mui/material';
import SectionHeading from '../components/SectionHeading';

const Menu = () => {
	return (
		<section id="menu" className="bg-gray-100 py-12">
			<Container maxWidth="lg">
				<SectionHeading subHeading="Our Menu" heading="TODAY'S SPECIALITY" />
			</Container>
		</section>
	);
};

export default Menu;
