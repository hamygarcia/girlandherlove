import React, { useState } from 'react';
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
	const featuredProducts = [
		{
			id: 1,
			name: 'Noire Fleur',
			price: '1,699',
			rating: 5,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739025568/flower%20bouquet/mvrxpbebs841vaggdbe6.jpg',
		},
		{
			id: 2,
			name: 'Miss Dried',
			price: '1,290',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739025568/flower%20bouquet/mzvo5rbwnccdeup9nuln.jpg',
		},
		{
			id: 3,
			name: 'Sweet Love',
			price: '1,399',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739025568/flower%20bouquet/fech9gufff9bze6up3no.jpg',
		},
		{
			id: 4,
			name: 'Imperial Gold',
			price: '1,399',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739025567/flower%20bouquet/gckfi5wrn49k1zaneaxd.jpg',
		},
		{
			id: 5,
			name: 'Money Bouquet Pink (50)',
			price: '1,699',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739025567/flower%20bouquet/lh0x8jnhqvk2ih8wqzwh.jpg',
		},
		{
			id: 6,
			name: 'Emerald',
			price: '1,990',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739025567/flower%20bouquet/xwtvz5yvaxjkl4uolrtn.jpg',
		},
		{
			id: 7,
			name: 'Simple Talita',
			price: '1,290',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739025567/flower%20bouquet/owrh0wbwcj9twoh79ffj.jpg',
		},
		{
			id: 8,
			name: 'Summer Breeze',
			price: '1,290',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739025566/flower%20bouquet/gvt1py6p3zjtnio2mhx0.jpg',
		},
		{
			id: 9,
			name: 'Gilded Grace',
			price: '1,290',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739025566/flower%20bouquet/kvjjf4o2o9tjwzxn4s9e.jpg',
		},
		{
			id: 10,
			name: 'Lavender Butterfly',
			price: '1,290',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739025565/flower%20bouquet/p4hbswriozqwm1lyznu4.jpg',
		},
		{
			id: 11,
			name: 'Sunset Serenade',
			price: '1,290',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739025565/flower%20bouquet/qo0sbxuhyfvvonlmrtlb.jpg',
		},
		{
			id: 12,
			name: 'Whispering Meadow',
			price: '1,290',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739025565/flower%20bouquet/ikynzewzmrh6uzordsrk.jpg',
		},
		{
			id: 13,
			name: 'Money Bouquet Green (200)',
			price: '1,290',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739025565/flower%20bouquet/vzhtk3qzafdxs8pcfwg9.jpg',
		},
		{
			id: 14,
			name: 'Enchanted Garden',
			price: '1,290',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739025565/flower%20bouquet/o93slqciad5vnkovva6c.jpg',
		},
		{
			id: 15,
			name: 'Urban Sophisticate',
			price: '1,290',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739025563/flower%20bouquet/hnexlravcaxprcfpm6nh.jpg',
		},
		{
			id: 16,
			name: 'Victorian Romance',
			price: '1,290',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739025562/flower%20bouquet/ggpzzq54cuxkfjds0p3x.jpg',
		},
		{
			id: 17,
			name: 'Coastal Breeze ',
			price: '1,290',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739025563/flower%20bouquet/x36lnlxny66la03knamu.jpg',
		},
		{
			id: 18,
			name: 'Summer Rhapsody',
			price: '1,290',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739025561/flower%20bouquet/lfyarcnpqhm3sx3k9pnl.jpg',
		},
		{
			id: 19,
			name: 'Sunshine Symphony',
			price: '1,290',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739025561/flower%20bouquet/ej7ovnrgcnzbjv6kiq9q.jpg',
		},
		{
			id: 20,
			name: "Van Gogh's Garden",
			price: '1,290',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739025561/flower%20bouquet/tyd7ky5x4jcabbtqtngc.jpg',
		},
		{
			id: 21,
			name: 'Midnight Azure',
			price: '1,290',
			rating: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739026735/flower%20bouquet/roslerlijfcb5fe59lm1.jpg',
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
			<FeaturedProducts products={featuredProducts} />

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
