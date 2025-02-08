import { Slide } from './Slide';

export const Valentines = () => {
	const products = [
		{
			id: 1,
			name: 'Tiffany (Red)',
			price: '1,799.00',
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739018764/flower%20gift/rhrzr2d4grcjn57avdjl.jpg',
		},
		{
			id: 2,
			name: 'Tiffany (Pink)',
			price: '1,799.00',
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739017697/flower%20gift/ashvvzwpommfv10psbnj.jpg',
		},
		{
			id: 3,
			name: 'Box of Sweetness',
			price: '1,350.00',
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739018765/flower%20gift/p7fvfci76msfammc9hdk.jpg',
		},
		{
			id: 4,
			name: 'Bouquet of Sweetness',
			price: '1,350.00',
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739018765/flower%20gift/igwknytqvopkit9kn0fq.jpg',
		},
		{
			id: 5,
			name: 'Midnight Romance',
			price: '1,350.00',
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739027240/Valentines%20Others/rajc9hx9ijznqbo6s2ag.jpg',
		},
		{
			id: 6,
			name: 'Sweet Love Box',
			price: '1,350.00',
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739027240/Valentines%20Others/tcmdzufd811d9ymmxrcp.jpg',
		},
		{
			id: 7,
			name: 'Love Bubble Dreams',
			price: '550.00',
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739027240/Valentines%20Others/vindbgrpgi8ds4tusuzn.jpg',
		},
		{
			id: 8,
			name: 'Rainbow Love Frame',
			price: '1,150.00',
			image:
				'https://res.cloudinary.com/dcv5pa6rk/image/upload/v1739027240/Valentines%20Others/u8pjczzow0gl4g68cwa9.jpg',
		},
	];

	return (
		<div className="bg-red-800 py-8 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-serif text-white mb-2">Valentines 2025</h2>
				<p className="text-white/80 mb-6">
					Out top-picked blooms, perfect for every special moment!
				</p>

				<Slide products={products} />
			</div>
		</div>
	);
};
