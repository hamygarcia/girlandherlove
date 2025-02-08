import { SquareSlide } from '../components/SquareCard';

export const NewCollection = () => {
	const products = [
		{
			id: 1,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021558/Valentines/fzmssqlcmtzizfkw8t7v.jpg',
			images: [
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021558/Valentines/fzmssqlcmtzizfkw8t7v.jpg',
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021557/Valentines/qcvwlt70a4pqiuiyobju.jpg',
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021555/Valentines/fenh6zterajkklk9iq8i.jpg',
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021555/Valentines/gbzz6m30w8ssgxeuy80q.jpg',
			],
		},
		{
			id: 2,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021557/Valentines/ec8ogl6jxhlapfj1w7lh.jpg',
			images: [
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021557/Valentines/ec8ogl6jxhlapfj1w7lh.jpg',
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021556/Valentines/dfdzthy3olyh1usv3eqj.jpg',
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021556/Valentines/pz2lhchtpoarbj1dgywq.jpg',
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021555/Valentines/xbw5txyprgq4csqf22xr.jpg',
			],
		},
		{
			id: 3,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021557/Valentines/njoauurnrykf8pzwx9vd.jpg',
			images: [
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021557/Valentines/njoauurnrykf8pzwx9vd.jpg',
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021555/Valentines/zqt1i9fkntl4ocsc8mje.jpg',
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021555/Valentines/elsuotnxcxizcxel3vqi.jpg',
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021555/Valentines/un0bgvicwntlcdk3lzcd.jpg',
			],
		},
		{
			id: 4,
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021557/Valentines/aw1yptkftqmxumvr9iet.jpg',
			images: [
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021557/Valentines/aw1yptkftqmxumvr9iet.jpg',
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021556/Valentines/bvsxcbkpzes5k2gre5yx.jpg',
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021556/Valentines/hc8qlasxc15hhefegzc4.jpg',
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739021556/Valentines/evkres98newgpapxrnfi.jpg',
			],
		},
	];
	return (
		<div className="bg-pink-50 py-8 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-serif text-gray-900 mb-2">
					New Collection Ideas
				</h2>
				<p className="text-gray-700 mb-6">
					Can't decide what to get? You can never go wrong with classic ideas
				</p>

				<SquareSlide products={products} />
			</div>
		</div>
	);
};
