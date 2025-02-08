import { useEffect, useState } from 'react';

export const Hero = () => {
	// Animation classes for elements entering viewport
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		setIsVisible(true);
	}, []);
	return (
		<section
			className={`
    relative h-96 bg-cover bg-center bg-no-repeat
    transform transition-opacity duration-1000
    ${isVisible ? 'opacity-100' : 'opacity-0'}
  `}
			style={{
				backgroundImage:
					'url("https://res.cloudinary.com/dcv5pa6rk/image/upload/f_auto,q_auto/v1/banner/Hero%20Banner")',
			}}
		>
			{/* Overlay for better text readability */}
			<div className="absolute inset-0 bg-black/30" />

			<div className="relative container flex flex-col justify-center items-center h-96 text-center m-auto px-4 z-10">
				<h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
					Beautiful Blooms for Every Occasion
				</h1>
				<p className="text-xl text-white/90 mb-8">
					Handcrafted floral arrangements delivered with care
				</p>
			</div>
		</section>
	);
};
