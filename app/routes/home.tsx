import { Notification } from '~/components/Notification';
import type { Route } from './+types/home';
import { Header } from '~/components/Header';
import { FlowerGift } from '~/components/sections/FlowerGift';
import { FlowerBouquet } from '~/components/sections/FlowerBouquet';
import { Shop } from '~/components/sections/Shop';
import { Hero } from '~/components/sections/Hero';
import { DriedFlowers } from '~/components/sections/DriedFlowers';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Girl and her love -Gift Shop' },
		{ name: 'description', content: "Let's create your own gift together" },
	];
}

export default function Home() {
	return (
		<main>
			<h1 className="hidden">Girl and her love - Gift Shop</h1>
			<Notification text="10% off on v-day use code EARLYLOVE10 till february 5!" />
			<Header />
			<Hero />
			<FlowerBouquet />
			<DriedFlowers />
			<FlowerGift />
			<Shop />
		</main>
	);
}
