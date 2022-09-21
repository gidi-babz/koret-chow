import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Koret Chow | Order from wherever, whenever </title>
				<meta name="description" content="Order food from anywhere, anytime" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1 className="text-7xl">Hello</h1>
			</main>
		</div>
	);
}
