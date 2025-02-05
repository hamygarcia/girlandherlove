import { Description } from '../Description';
import { Product } from '../product/index';
import { Title } from '../Title';

export const FlowerGift = () => {
	const products = [
		{
			imgUrl:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1738688480/other%20items/nkixslga1dv6ee3qo9cf.jpg',
			alt: 'Boxes of stuff toy and flowers',
			title: 'Tiffany (Pink)',
			price: '1,799',
			rating: null,
		},
		{
			imgUrl:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1738688229/other%20items/vox3u80o3pnc66inncbh.jpg',
			alt: 'Boxes of stuff toy and flowers',
			title: 'Box of Sweetness',
			price: '1,350',
			rating: null,
		},
		{
			imgUrl:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1738688355/other%20items/ltvutwn2pmjri4s7n07i.jpg',
			alt: 'Boxes of stuff toy and flowers',
			title: 'Tiffany (Red)',
			price: '1,799',
			rating: null,
		},
	];
	return (
		<section className="bg-[#B3433C]">
			<div className="py-10 p-5 space-y-5">
				<div className="text-gray-100 tracking-widest">
					<Title text="Flower Gifts" />
				</div>
				<div className="text-gray-200">
					<Description text="Can't decide what to get? You can never go wrong with beautiful flowers" />
				</div>
			</div>
			<div className="relative w-full px-5">
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
