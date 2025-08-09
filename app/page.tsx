// app/page.tsx
'use client';

import { Analytics } from "@vercel/analytics/next";
import { useEffect, useState } from "react";

const Home = () => {
	const [campuses, setCampuses] = useState<string[]>([]);

	useEffect(() => {
		const fetchCampuses = async () => {
			const res = await fetch("/api/campuses");
			const data = await res.json();
			setCampuses(data);
		};
		fetchCampuses();
	}, []);

	return (
		<>
			<Analytics />
			<main>
				<pre>
					{JSON.stringify(campuses, null, 4)}
				</pre>
			</main>
		</>
	);
}

export default Home;