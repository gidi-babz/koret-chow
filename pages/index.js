import Header from '../components/Header';
import About from '../sections/About';
import Dishes from '../sections/Dishes';

export default function Home() {
	return (
		<>
			<Header />
			<Dishes />
			<About />
		</>
	);
}
