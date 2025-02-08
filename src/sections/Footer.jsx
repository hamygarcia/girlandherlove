import { Facebook } from '../../public/socials/Facebook';
import { Instagram } from '../../public/socials/Instagram';
import { Pinterest } from '../../public/socials/Pinterest';
import { Twitter } from '../../public/socials/Twitter';
import { Contact } from './Contact';

export const Footer = () => {
	return (
		<footer className="bg-red-800 text-gray-300 py-16">
			<div className="container mx-auto px-4">
				{/* Top Section with Heading and CTA Buttons */}
				<div className="mb-16">
					<p className="w-full text-center mb-4">
						&copy; 2020 Girl and Her Love - Gift Shop
					</p>
					<h2 className="text-3xl md:text-4xl font-light text-white mb-8 max-w-2xl md:text-center md:max-w-full">
						LET'S CREATE YOUR OWN GIFT TOGETHER
					</h2>
				</div>

				{/* Main Footer Content */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
					{/* Logo and Social Section */}
					<div className="lg:col-span-3">
						<div className="mb-8">
							<img
								src="/logo-footer.svg"
								alt="Secured Finance"
								className="h-16"
							/>
						</div>
						<div className="flex items-center gap-4">
							<Facebook />
							<Instagram />
							<Pinterest />
							<Twitter />
						</div>
					</div>

					{/* Middle Links Sections */}
					<div className="lg:col-span-3">
						<h3 className="text-white font-medium">Flower Gift Package</h3>
						<h3 className="text-sm mb-2">
							Elegant floral arrangements paired with thoughtfully curated gifts
						</h3>
						<h3 className="text-white font-medium mt-6">Our Store</h3>
						<h3 className="text-sm">
							A charming boutique where flowers and treasured gifts come
							together
						</h3>
					</div>

					<div className="lg:col-span-3">
						<h3 className="text-white font-medium">Flower Bouquet</h3>
						<h3 className="text-sm mb-2">
							Fresh, artfully arranged blooms to brighten any occasion
						</h3>
						<h3 className="text-white font-medium mt-6">Box of Sweetness</h3>
						<h3 className="text-sm">Delightful treats and treasures</h3>
						<h3 className="text-white font-medium mt-6">Souvenirs</h3>
						<h3 className="text-sm mb-2">
							Unique keepsakes and mementos to cherish forever
						</h3>
					</div>

					<div className="lg:col-span-3">
						<h3 className="text-white font-medium">Corporate Items</h3>
						<h3 className="text-sm mb-2">Corporate Bulk Orders</h3>
						<h3 className="text-white font-medium mt-6">
							Custom Corporate Gifts
						</h3>
						<h3 className="text-sm">Branded Corporate Packages & Events</h3>
					</div>
				</div>

				{/* Contact Section */}
				<Contact />
			</div>
		</footer>
	);
};
