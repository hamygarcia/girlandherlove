import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<header className="bg-pink-50 relative">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="lg:hidden text-gray-600 hover:text-red-800 transition-colors"
					aria-label="Toggle menu"
				>
					{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>

				<div className="flex items-center gap-2">
					<img src="/logo.svg" alt="Secured Finance" className="h-12" />
					<div>
						<h1 className="text-2xl font-serif text-red-800">
							Girl and Her Love
						</h1>
						<p className="-mt-1.5">Gift Shop</p>
					</div>
				</div>

				{/* Mobile Navigation */}
				<div
					className={`
            lg:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
				>
					<div className="p-4 bg-pink-50 flex justify-between items-center">
						<img src="/logo.svg" alt="Secured Finance" className="h-16" />
						<div className="text-2xl font-serif text-red-800">
							Girl and Her Love
						</div>
						<button
							onClick={() => setIsMenuOpen(false)}
							className="text-gray-600 hover:text-red-800 transition-colors"
						>
							<X size={24} />
						</button>
					</div>
					<nav className="p-4 flex flex-col space-y-4">
						<a
							href="#"
							className="text-lg text-gray-600 hover:text-red-800 transition-colors"
							onClick={() => setIsMenuOpen(false)}
						>
							Home
						</a>
						<a
							href="#"
							className="text-lg text-gray-600 hover:text-red-800 transition-colors"
							onClick={() => setIsMenuOpen(false)}
						>
							Collections
						</a>
						<a
							href="#"
							className="text-lg text-gray-600 hover:text-red-800 transition-colors"
							onClick={() => setIsMenuOpen(false)}
						>
							Occasions
						</a>
						<a
							href="#"
							className="text-lg text-gray-600 hover:text-red-800 transition-colors"
							onClick={() => setIsMenuOpen(false)}
						>
							About
						</a>
					</nav>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden lg:flex space-x-8 text-gray-600">
					<a href="#" className="hover:text-red-800 transition-colors">
						Home
					</a>
					<a href="#" className="hover:text-red-800 transition-colors">
						Collections
					</a>
					<a href="#" className="hover:text-red-800 transition-colors">
						Occasions
					</a>
					<a href="#" className="hover:text-red-800 transition-colors">
						About
					</a>
				</nav>

				<div className="flex items-center space-x-4">
					<Search className="w-6 h-6 text-gray-600 hover:text-red-800 transition-colors cursor-pointer" />
					<ShoppingBag className="w-6 h-6 text-gray-600 hover:text-red-800 transition-colors cursor-pointer" />
				</div>
			</div>
		</header>
	);
};
