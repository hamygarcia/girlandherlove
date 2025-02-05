import { Description } from '../Description';
import { Product } from '../product/index';
import { Title } from '../Title';

export const FlowerBouquet = () => {
	const products = [
		{
			imgUrl:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1738687940/products/datzg5s1cfxhc8leedfc.jpg',
			alt: 'Boxes of stuff toy and flowers',
			title: 'Nara',
			price: '1,290',
			rating: null,
		},
		{
			imgUrl:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1738687940/products/datzg5s1cfxhc8leedfc.jpg',
			alt: 'Boxes of stuff toy and flowers',
			title: 'Ava',
			price: '1,270',
			rating: null,
		},
		{
			imgUrl:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1738687940/products/datzg5s1cfxhc8leedfc.jpg',
			alt: 'Boxes of stuff toy and flowers',
			title: 'Mia',
			price: '1,299',
			rating: null,
		},
		{
			imgUrl:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1738687940/products/datzg5s1cfxhc8leedfc.jpg',
			alt: 'Boxes of stuff toy and flowers',
			title: 'Cora',
			price: '1,599',
			rating: null,
		},
		{
			imgUrl:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1738687940/products/datzg5s1cfxhc8leedfc.jpg',
			alt: 'Boxes of stuff toy and flowers',
			title: 'Emerald',
			price: '1,399',
			rating: null,
		},
		{
			imgUrl:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1738687940/products/datzg5s1cfxhc8leedfc.jpg',
			alt: 'Boxes of stuff toy and flowers',
			title: 'Louise',
			price: '2,399',
			rating: null,
		},
		{
			imgUrl:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1738687940/products/datzg5s1cfxhc8leedfc.jpg',
			alt: 'Boxes of stuff toy and flowers',
			title: 'Fiona',
			price: '1,850',
			rating: null,
		},
	];
	return (
		<section className="bg-[#B3433C]">
			<div className="py-10 p-5 space-y-5">
				<div className="text-gray-100 tracking-widest">
					<Title text="Flower Bouquets" />
				</div>
				<div className="text-gray-200">
					<Description text="Can't decide what to get? You can never go wrong with beautiful flowers" />
				</div>
			</div>
			<div className="relative w-full px-5 xl:px-10">
				<div className="flex snap-x snap-mandatory overflow-x-auto gap-4 pb-4 scrollbar-hide">
					{/* Each product gets wrapped to force width */}
					{products.length > 0 &&
						products.map((productItem, index) => (
							<div
								key={index}
								className="w-1/2 flex-none snap-start md:w-1/3 lg:w-1/4"
							>
								<Product isDark={true} productItem={productItem} />
							</div>
						))}
				</div>
			</div>
		</section>
	);
};
