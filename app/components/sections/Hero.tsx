import { Description } from '../Description';
import { Title } from '../Title';

export const Hero = () => {
	return (
		<section className="w-full">
			<img
				src="https://res.cloudinary.com/dcv5pa6rk/image/upload/v1738770029/banner/xrz9qajn6vv5o7vhierh.jpg"
				alt="roses in box"
				className="w-full h-48 sm:h-[32rem] md:h-[22.5rem] lg:h-[32rem] xl:h-[40rem] object-cover"
			/>
			<div className="py-10 space-y-5 bg-[#EFEDE6]">
				<div className="text-center text-[#9B8059]">
					<Title text="YOUR TRUSTED GIFT DESIGNER" />
				</div>
				<div className="max-w-xl mx-auto text-center text-gray-800">
					<em>
						<Description text="Welcome to Girl and her love! Since 2020, we've been your trusted gift shop in Bulacan, offering thoughtful presents for every occasion. From handpicked merchandise and custom gift baskets to holiday specials and personalized items, we're here to help you find the perfect gift with care and attention." />
					</em>
				</div>
			</div>
		</section>
	);
};
