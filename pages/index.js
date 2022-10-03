import Header from '../components/Header';
import About from '../sections/About';
import Dishes from '../sections/Dishes';
import Menu from '../sections/Menu';

export default function Home() {
	return (
		<>
			<Header />
			<Dishes />
			<About />
			<Menu />
		</>
	);
}
