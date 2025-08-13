// app/page.tsx
"use client"

import { Analytics } from "@vercel/analytics/next";
import { useEffect } from "react";

const Home = () => {
	useEffect(() => {
		window.location.href = "dashboard";
	}, []);

	return (
		<>
			<Analytics />
			<main>
			</main>
		</>
	);
}

export default Home;