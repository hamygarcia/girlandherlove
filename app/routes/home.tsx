import { Notification } from '~/components/Notification';
import type { Route } from './+types/home';
import { Header } from '~/components/Header';
import { FlowerGift } from '~/components/sections/FlowerGift';
import { FlowerBouquet } from '~/components/sections/FlowerBouquet';
import { Shop } from '~/components/sections/Shop';
import { Hero } from '~/components/sections/Hero';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Girl and her love' },
		{ name: 'description', content: "Let's create your own gift together" },
	];
}

export default function Home() {
	return (
		<main>
			<h1 className="hidden">Girl and her love - Gift Shop</h1>
			<Notification />
			<Header />
			<Hero />
			<FlowerGift />
			<FlowerBouquet />
			<Shop />
		</main>
	);
}
