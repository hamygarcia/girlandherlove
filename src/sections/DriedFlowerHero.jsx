import React from 'react';

const DriedFlowersHero = () => {
	return (
		<div className="relative w-full">
			{/* Image container */}
			<div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
				<picture>
					{/* Large screens */}
					<source media="(min-width: 1024px)" srcSet="dried-flower.avif" />
					{/* Medium screens */}
					<source media="(min-width: 768px)" srcSet="dried-flower.avif" />
					{/* Small screens */}
					<source media="(min-width: 640px)" srcSet="dried-flower.avif" />
					{/* Default/mobile */}
					<img
						src="dried-flower.avif"
						alt="Dried flowers arrangement for Valentine's Day"
						className="w-full h-full object-cover"
					/>
				</picture>

				{/* Dark overlay */}
				<div className="absolute inset-0 bg-black/30"></div>

				{/* Text content */}
				<div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-4">
						Dried Flowers for Valentine's Day
					</h1>
					<p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
						Celebrate love with premium natural dried flowers, carefully
						arranged for a timeless gift. Minimal use of faux flowers ensures
						each bouquet radiates natural beauty and charm.
					</p>

					{/* Optional CTA Button */}
					<button className="mt-6 px-6 py-3 bg-white/90 hover:bg-white text-red-800 rounded-md transition-colors duration-200 font-medium">
						Shop Dried Flowers
					</button>
				</div>
			</div>
		</div>
	);
};

export default DriedFlowersHero;
