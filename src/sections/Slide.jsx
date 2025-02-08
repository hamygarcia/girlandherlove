import React, { useState, useRef } from 'react';

export const Slide = ({ products }) => {
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);
	const sliderRef = useRef(null);

	const handleMouseDown = (e) => {
		setIsDragging(true);
		setStartX(e.pageX - sliderRef.current.offsetLeft);
		setScrollLeft(sliderRef.current.scrollLeft);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleMouseMove = (e) => {
		if (!isDragging) return;
		e.preventDefault();
		const x = e.pageX - sliderRef.current.offsetLeft;
		const walk = (x - startX) * 2;
		sliderRef.current.scrollLeft = scrollLeft - walk;
	};
	return (
		<div className="relative">
			<div
				ref={sliderRef}
				className="overflow-x-scroll snap-x snap-mandatory pb-6 cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}
				onMouseMove={handleMouseMove}
			>
				<div className="flex gap-4">
					{products.map((product) => (
						<div
							key={product.id}
							className="snap-start flex-none w-72 bg-white rounded-lg overflow-hidden select-none"
						>
							<div className="aspect-[4/5] relative">
								<img
									src={product.image}
									alt={product.name}
									className="w-full h-full object-cover"
									draggable="false"
								/>
							</div>
							{product.name && (
								<div className="p-4">
									<div className="flex justify-between items-start mb-2">
										<h3 className="text-lg font-medium">{product.name}</h3>
										<button className="text-red-800 hover:bg-red-50 p-2 rounded-full">
											<svg
												className="w-6 h-6"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
												/>
											</svg>
										</button>
									</div>
									<div className="flex items-baseline gap-2">
										<span className="text-lg font-semibold">
											₱{product.price} PHP
										</span>
										{product.originalPrice && (
											<span className="text-sm text-gray-500 line-through">
												₱{product.originalPrice} PHP
											</span>
										)}
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
