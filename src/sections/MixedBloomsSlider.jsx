import React, { useState, useRef } from 'react';
import { Card } from '../components/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MixedBloomsSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [startX, setStartX] = useState(null);
	const [isDragging, setIsDragging] = useState(false);
	const sliderRef = useRef(null);

	const slides = [
		{
			id: 1,
			name: 'Fiona',
			price: '1,850.00',
			previewImage:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739018129/flower%20bouquet/Astra%201.jpg',
			zoomedImage:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739018127/flower%20bouquet/Astra%202.jpg',
		},
		{
			id: 2,
			name: 'Harmony',
			price: '1,999.00',
			previewImage:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739020938/flower%20bouquet/Dried%20Rose%202.jpg',
			zoomedImage:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739020937/flower%20bouquet/Dried%20Rose%201.jpg',
		},
		{
			id: 3,
			name: 'Lily',
			price: '1,999.00',
			previewImage:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739018126/flower%20bouquet/kk8qztfhp9cvdts6afxf.jpg',
			zoomedImage:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739018126/flower%20bouquet/Lily%202.jpg',
		},
		{
			id: 4,
			name: 'Sarah',
			price: '1,999.00',
			previewImage:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739018129/flower%20bouquet/Sarah%201.jpg',
			zoomedImage:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739018127/flower%20bouquet/Sarah%202.jpg',
		},
		{
			id: 4,
			name: 'Rosalia',
			price: '1,999.00',
			previewImage:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739018125/flower%20bouquet/Rosalia%201.jpg',
			zoomedImage:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739018124/flower%20bouquet/Rosalia%202.jpg',
		},
	];

	const handleTouchStart = (e) => {
		setStartX(e.touches[0].clientX);
		setIsDragging(true);
	};

	const handleTouchMove = (e) => {
		if (!isDragging || !sliderRef.current) return;

		const currentX = e.touches[0].clientX;
		const diff = startX - currentX;

		if (Math.abs(diff) > 50) {
			if (diff > 0) {
				handleNextSlide();
			} else {
				handlePrevSlide();
			}
		}
	};

	const handleTouchEnd = () => {
		setIsDragging(false);
		setStartX(null);
	};

	const handleNextSlide = () => {
		if (currentSlide < slides.length - 1) {
			setCurrentSlide(currentSlide + 1);
			setIsDragging(false);
		}
	};

	const handlePrevSlide = () => {
		if (currentSlide > 0) {
			setCurrentSlide(currentSlide - 1);
			setIsDragging(false);
		}
	};

	const handleSlideChange = (index) => {
		setCurrentSlide(index);
	};

	return (
		<div className="bg-red-900 py-8 lg:py-12">
			<div className="max-w-5xl mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-8 lg:mb-12 lg:max-w-3xl lg:mx-auto">
					<p className="text-white/80 uppercase tracking-wider mb-2">
						VALENTINE'S DAY
					</p>
					<h2 className="text-3xl lg:text-4xl font-serif text-white mb-4">
						MIXED BLOOMS
					</h2>
					<p className="text-white/80 max-w-3xl mx-auto">
						Mixed Flower Bouquets for Valentine's Day! Express your love with
						our stunning mixed flower bouquets, featuring premium fresh blooms
						beautifully combined for a vibrant and heartfelt gift.
					</p>
				</div>

				{/* Slider Container */}
				<div className="relative">
					{/* Navigation Arrows */}
					<button
						onClick={handlePrevSlide}
						className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg transition-opacity duration-200 hover:bg-white ${
							currentSlide === 0
								? 'opacity-50 cursor-not-allowed'
								: 'opacity-100'
						}`}
						disabled={currentSlide === 0}
					>
						<ChevronLeft className="w-6 h-6" />
					</button>

					<button
						onClick={handleNextSlide}
						className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg transition-opacity duration-200 hover:bg-white ${
							currentSlide === slides.length - 1
								? 'opacity-50 cursor-not-allowed'
								: 'opacity-100'
						}`}
						disabled={currentSlide === slides.length - 1}
					>
						<ChevronRight className="w-6 h-6" />
					</button>

					{/* Main Slider */}
					<div className="relative flex items-center">
						{/* Vertical Navigation (Medium screens) */}
						<div className="hidden md:flex lg:hidden flex-col gap-4 mr-6 h-96 justify-center">
							{slides.map((_, index) => (
								<button
									key={index}
									onClick={() => handleSlideChange(index)}
									className={`w-2 h-2 rounded-full transition-colors duration-200 ${
										currentSlide === index ? 'bg-white' : 'bg-white/50'
									}`}
								/>
							))}
						</div>

						<div className="flex-1 relative">
							<div
								ref={sliderRef}
								className="overflow-hidden touch-pan-x"
								onTouchStart={handleTouchStart}
								onTouchMove={handleTouchMove}
								onTouchEnd={handleTouchEnd}
							>
								<div
									className="flex transition-transform duration-500 ease-out"
									style={{ transform: `translateX(-${currentSlide * 100}%)` }}
								>
									{slides.map((slide) => (
										<div key={slide.id} className="w-full flex-none">
											<div className="lg:flex lg:gap-4 lg:items-center lg:max-w-4xl lg:mx-auto">
												{/* Preview Card */}
												<Card className="relative aspect-[3/4] lg:w-1/3 overflow-hidden mb-4 lg:mb-0">
													<div className="w-full h-full">
														<img
															src={slide.previewImage}
															alt={slide.name}
															className="w-full h-full object-cover"
														/>
													</div>
													<div className="absolute bottom-0 left-0 right-0 bg-white p-4">
														<h3 className="text-lg font-medium">
															{slide.name}
														</h3>
														<p className="text-gray-900">₱{slide.price} PHP</p>
													</div>
												</Card>

												{/* Zoomed Image */}
												<div className="relative aspect-[3/4] lg:w-2/3 overflow-hidden rounded-lg">
													<div className="w-full h-full transform transition-transform duration-1000 hover:scale-110">
														<img
															src={slide.zoomedImage}
															alt={`${slide.name} detail view`}
															className="w-full h-full object-cover scale-110"
														/>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Bottom Navigation Dots */}
							<div className="flex justify-center gap-3 mt-6">
								{slides.map((_, index) => (
									<button
										key={index}
										onClick={() => handleSlideChange(index)}
										className={`w-2 h-2 rounded-full transition-colors duration-200 ${
											currentSlide === index ? 'bg-white' : 'bg-white/50'
										}`}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MixedBloomsSlider;
