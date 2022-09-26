import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Koret Chow | Order from wherever, whenever </title>
				<meta name="description" content="Order food from anywhere, anytime" />
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<main>{children}</main>

			<footer className="mt-24">
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
