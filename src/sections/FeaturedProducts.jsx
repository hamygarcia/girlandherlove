export const FeaturedProducts = ({ products }) => {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-serif text-center mb-12">
					Featured Collections
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{products.map((product) => (
						<div
							key={product.id}
							className="group transition-transform duration-300 hover:-translate-y-2"
						>
							<div className="relative aspect-square overflow-hidden rounded-lg mb-4">
								<img
									src={product.image}
									alt={product.name}
									className="object-cover w-full h-full"
								/>
							</div>
							<h3 className="text-lg font-medium">{product.name}</h3>
							<p className="text-gray-600">₱{product.price}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
