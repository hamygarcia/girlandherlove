import React, { useState, useEffect } from 'react';
import DriedFlowersHero from './sections/DriedFlowerHero';
import MixedBloomsSlider from './sections/MixedBloomsSlider';
import { Notification } from './components/Notification';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { FeaturedProducts } from './sections/FeaturedProducts';
import { Footer } from './sections/Footer';
import { Valentines } from './sections/Valentines';
import { NewCollection } from './sections/NewCollection';

const App = () => {
	const [showPromo, setShowPromo] = useState(true);

	// Sample product data
	const products = [
		{
			id: 1,
			name: 'Miss Dried',
			price: '1,699',
			rating: 5,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021558/Valentines/fzmssqlcmtzizfkw8t7v.jpg',
		},
		{
			id: 2,
			name: 'Black Velvet',
			price: '1,290',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021557/Valentines/ec8ogl6jxhlapfj1w7lh.jpg',
		},
		{
			id: 3,
			name: 'Emerald',
			price: '1,399',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021557/Valentines/njoauurnrykf8pzwx9vd.jpg',
		},
		{
			id: 4,
			name: 'Box Dried Rose (White)',
			price: '1,399',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021557/Valentines/aw1yptkftqmxumvr9iet.jpg',
		},
		{
			id: 5,
			name: 'Ever Tulips',
			price: '1,699',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021556/Valentines/dfdzthy3olyh1usv3eqj.jpg',
		},
		{
			id: 6,
			name: 'Miss Dried Balloon',
			price: '1,990',
			rating: 4,
			image: '',
		},
		{
			id: 7,
			name: 'Noire Fleur',
			price: '1,290',
			rating: 4,
			image: '',
		},
		{
			id: 8,
			name: 'Summer Breeze',
			price: '1,290',
			rating: 4,
			image: '',
		},
		{
			id: 9,
			name: 'Summer Breeze',
			price: '1,290',
			rating: 4,
			image: '',
		},
	];

	return (
		<div className="min-h-screen bg-white">
			{/* Notification */}
			{showPromo && (
				<Notification
					text="Special Offer: 10% OFF - Use Code: WELCOME10"
					setShowPromo={setShowPromo}
				/>
			)}

			{/* Header */}
			<Header />

			{/* Hero Section */}
			<Hero />

			{/* Slideable Section */}
			<Valentines />

			{/* New Collection */}
			<NewCollection />

			{/* Featured Products */}
			<FeaturedProducts products={products} />

			{/* Dried Flower Section */}
			<DriedFlowersHero />

			{/* MixedBloomsSlider */}
			<MixedBloomsSlider />

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default App;
