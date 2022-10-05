import Header from '../components/Header';
import About from '../sections/About';
import Dishes from '../sections/Dishes';
import Menu from '../sections/Menu';
import Review from '../sections/Review';

export default function Home() {
	return (
		<>
			<Header />
			<Dishes />
			<About />
			<Menu />
			<Review />
		</>
	);
}
