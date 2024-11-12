'use client';

import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);

		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return (
		<div className="fixed bottom-8 right-8 z-[999]">
			{isVisible && (
				<div
					onClick={scrollToTop}
					aria-label="scroll to top"
					className="back-to-top flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-[#004BE0] text-white shadow-2xl transition duration-300 ease-in-out hover:bg-dark"
				>
					<ChevronUp />
				</div>
			)}
		</div>
	);
}
