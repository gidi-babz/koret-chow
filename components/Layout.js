import React from 'react';
import Head from 'next/head';

import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Koret Chow | Order from wherever, whenever </title>
				<meta name="description" content="Order food from anywhere, anytime" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>{children}</main>

			<footer className="mt-24">
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
