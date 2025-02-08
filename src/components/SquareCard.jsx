import React, { useState, useRef } from 'react';
import { X, Eye } from 'lucide-react';

export const SquareSlide = ({ products }) => {
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);
	const [selectedImage, setSelectedImage] = useState(null);
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

	const handleImageClick = (e, product) => {
		// Only open modal if not dragging
		if (!isDragging) {
			setSelectedImage(product);
		}
	};

	const closeModal = () => {
		setSelectedImage(null);
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
							onClick={(e) => handleImageClick(e, product)}
						>
							<div className="aspect-square relative group">
								<img
									src={product.image}
									alt={product.name}
									className="absolute inset-0 w-full h-full object-cover cursor-pointer"
									draggable="false"
								/>
								{/* Eye icon overlay */}
								<div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/40 transition-all duration-300">
									<Eye className="text-white w-8 h-8" />
								</div>
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

			{/* Modal */}
			{selectedImage && (
				<div
					onClick={closeModal}
					className="fixed inset-0 bg-black/70 bg-opacity-50 z-50 flex items-center justify-center p-4"
				>
					<div className="relative bg-white rounded-lg max-w-4xl w-full mx-auto">
						<button
							onClick={closeModal}
							className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
						>
							<X className="w-6 h-6" />
						</button>
						<div className="p-4">
							<div className="aspect-square relative rounded-lg overflow-hidden">
								<img
									src={selectedImage.image}
									alt={selectedImage.name}
									className="absolute inset-0 w-full h-full object-contain bg-gray-100"
								/>
							</div>
							<div className="mt-4">
								<h2 className="text-xl font-semibold">{selectedImage.name}</h2>
								<div className="flex items-baseline gap-2 mt-2">
									<span className="text-xl font-bold">
										₱{selectedImage.price} PHP
									</span>
									{selectedImage.originalPrice && (
										<span className="text-gray-500 line-through">
											₱{selectedImage.originalPrice} PHP
										</span>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
