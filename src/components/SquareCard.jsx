import React, { useState, useRef } from 'react';
import { X, Eye } from 'lucide-react';

export const SquareSlide = ({ products }) => {
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);
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

	const handleProductClick = (e, product) => {
		if (!isDragging) {
			setSelectedProduct(product);
			setSelectedImageIndex(0);
		}
	};

	const closeModal = () => {
		setSelectedProduct(null);
		setSelectedImageIndex(0);
	};

	const handleThumbnailClick = (index) => {
		setSelectedImageIndex(index);
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
							onClick={(e) => handleProductClick(e, product)}
						>
							<div className="aspect-square relative group">
								<img
									src={product.images[0]}
									alt={product.name}
									className="absolute inset-0 w-full h-full object-cover cursor-pointer"
									draggable="false"
								/>
								<div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/40 transition-all duration-300">
									<Eye className="text-white w-8 h-8" />
								</div>
							</div>
							{product.name && (
								<div className="p-4">
									<div className="flex justify-between items-start">
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
								</div>
							)}
						</div>
					))}
				</div>
			</div>

			{/* Modal with Gallery */}
			{selectedProduct && (
				<div
					onClick={closeModal}
					className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
				>
					<div
						onClick={(e) => e.stopPropagation()}
						className="relative bg-white rounded-lg max-w-4xl w-full mx-auto"
					>
						<button
							onClick={closeModal}
							className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
						>
							<X className="w-6 h-6" />
						</button>
						<div className="p-4">
							{/* Main Image */}
							<div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100">
								<img
									src={selectedProduct.images[selectedImageIndex]}
									alt={`${selectedProduct.name} - Image ${
										selectedImageIndex + 1
									}`}
									className="absolute inset-0 w-full h-full object-contain"
								/>
							</div>

							{/* Thumbnail Gallery */}
							<div className="mt-4 overflow-x-auto">
								<div className="flex gap-2">
									{selectedProduct.images.map((image, index) => (
										<button
											key={index}
											onClick={() => handleThumbnailClick(index)}
											className={`relative flex-none w-20 h-20 m-2 rounded-lg overflow-hidden cursor-pointer ${
												selectedImageIndex === index
													? 'ring-2 ring-blue-500'
													: 'hover:opacity-80'
											}`}
										>
											<img
												src={image}
												alt={`${selectedProduct.name} - Thumbnail ${index + 1}`}
												className="w-full h-full object-cover"
											/>
										</button>
									))}
								</div>
							</div>

							<div className="mt-4">
								<h2 className="text-xl font-semibold">
									{selectedProduct.name}
								</h2>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
