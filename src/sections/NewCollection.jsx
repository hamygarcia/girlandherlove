import { SquareSlide } from '../components/SquareCard';

export const NewCollection = () => {
	const products = [
		{
			id: 1,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021558/Valentines/fzmssqlcmtzizfkw8t7v.jpg',
		},
		{
			id: 2,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021557/Valentines/ec8ogl6jxhlapfj1w7lh.jpg',
		},
		{
			id: 3,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021557/Valentines/njoauurnrykf8pzwx9vd.jpg',
		},
		{
			id: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021557/Valentines/aw1yptkftqmxumvr9iet.jpg',
		},
	];
	return (
		<div className="bg-pink-50 py-8 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-serif text-gray-900 mb-2">
					New Collection Ideas
				</h2>
				<p className="text-gray-700 mb-6">
					Can't decide what to get? You can never go wrong with classic
					sweetness
				</p>

				<SquareSlide products={products} />
			</div>
		</div>
	);
};
