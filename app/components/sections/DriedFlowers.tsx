import { Description } from '../Description';
import { Product } from '../product/index';
import { Title } from '../Title';

export const DriedFlowers = () => {
	const products = [
		{
			imgUrl:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1738688480/other%20items/nkixslga1dv6ee3qo9cf.jpg',
			alt: 'Boxes of stuff toy and flowers',
			title: 'Nara',
			price: '1,290',
			rating: null,
		},
		{
			imgUrl:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1738688480/other%20items/nkixslga1dv6ee3qo9cf.jpg',
			alt: 'Boxes of stuff toy and flowers',
			title: 'Ava',
			price: '1,270',
			rating: null,
		},
		{
			imgUrl:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1738688480/other%20items/nkixslga1dv6ee3qo9cf.jpg',
			alt: 'Boxes of stuff toy and flowers',
			title: 'Mia',
			price: '1,299',
			rating: null,
		},
		{
			imgUrl:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1738688480/other%20items/nkixslga1dv6ee3qo9cf.jpg',
			alt: 'Boxes of stuff toy and flowers',
			title: 'Ramia',
			price: '1,299',
			rating: null,
		},
		{
			imgUrl:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1738688480/other%20items/nkixslga1dv6ee3qo9cf.jpg',
			alt: 'Boxes of stuff toy and flowers',
			title: 'Stell',
			price: '1,199',
			rating: null,
		},
		{
			imgUrl:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1738688480/other%20items/nkixslga1dv6ee3qo9cf.jpg',
			alt: 'Boxes of stuff toy and flowers',
			title: 'Lucy',
			price: '1,499',
			rating: null,
		},
		{
			imgUrl:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1738688480/other%20items/nkixslga1dv6ee3qo9cf.jpg',
			alt: 'Boxes of stuff toy and flowers',
			title: 'Astra',
			price: '1,999',
			rating: null,
		},
		{
			imgUrl:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1738688480/other%20items/nkixslga1dv6ee3qo9cf.jpg',
			alt: 'Boxes of stuff toy and flowers',
			title: 'Eleanor',
			price: '2,199',
			rating: null,
		},
		{
			imgUrl:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1738688480/other%20items/nkixslga1dv6ee3qo9cf.jpg',
			alt: 'Boxes of stuff toy and flowers',
			title: 'Devion',
			price: '1,650',
			rating: null,
		},
		{
			imgUrl:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1738688480/other%20items/nkixslga1dv6ee3qo9cf.jpg',
			alt: 'Boxes of stuff toy and flowers',
			title: 'Box Dried Rose',
			price: '1,399',
			rating: null,
		},
	];
	return (
		<section className="bg-[#EFEDE6]">
			<div className="py-10 p-5 space-y-5">
				<div className="text-gray-900 tracking-widest">
					<Title text="Dried Flowers" />
				</div>
				<div className="text-gray-700">
					<Description text="Can't decide what to get? You can never go wrong with beautiful flowers" />
				</div>
			</div>
			<div className="relative w-full px-5">
				<div className="grid gap-5 grid-cols-2 md:grid-cols-3 xl:flex xl:snap-x xl:snap-mandatory xl:overflow-x-auto xl:gap-4 xl:pb-4 xl:scrollbar-hide">
					{/* Each product gets wrapped to force width */}
					{products.length > 0 &&
						products.map((productItem, index) => (
							<div key={index} className="xl:w-1/6 xl:flex-none xl:snap-start">
								<Product isDark={false} productItem={productItem} />
							</div>
						))}
				</div>
			</div>
		</section>
	);
};
