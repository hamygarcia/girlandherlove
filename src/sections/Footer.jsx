export const Footer = () => {
	return (
		<footer className="bg-red-800 text-gray-300 py-16">
			<div className="container mx-auto px-4">
				{/* Top Section with Heading and CTA Buttons */}
				<div className="mb-16">
					<h2 className="text-3xl md:text-4xl font-light text-white mb-8 max-w-2xl">
						YOUR TRUSTED GIFT AND FLOWER SHOP
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
						<div className="space-y-4">
							<div className="flex items-center gap-2">
								<svg
									className="w-5 h-5"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
								</svg>
								<a href="#" className="hover:text-white">
									X
								</a>
							</div>
							<div className="flex items-center gap-2">
								<svg
									className="w-5 h-5"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M12 0C5.374 0 0 5.374 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.626-5.374-12-12-12z" />
								</svg>
								<a href="#" className="hover:text-white">
									Discord
								</a>
							</div>
							<div className="flex items-center gap-2">
								<svg
									className="w-5 h-5"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
								</svg>
								<a href="#" className="hover:text-white">
									Youtube
								</a>
							</div>
						</div>
					</div>

					{/* Middle Links Sections */}
					<div className="lg:col-span-3">
						<h3 className="text-white font-medium mb-4">Blog</h3>
						<p className="text-sm mb-2">Articles from the team</p>
						<h3 className="text-white font-medium mt-6 mb-4">
							Brand Asset Guide
						</h3>
						<p className="text-sm">
							Access our official logo assets and standards
						</p>
					</div>

					<div className="lg:col-span-3">
						<h3 className="text-white font-medium mb-4">Forums</h3>
						<p className="text-sm mb-2">Discuss & Propose topics</p>
						<h3 className="text-white font-medium mt-6 mb-4">White paper</h3>
						<p className="text-sm">Learn what is Secured Finance Protocol</p>
					</div>

					{/* Right Links Section */}
					<div className="lg:col-span-3">
						<h3 className="text-white font-medium mb-4">
							Dried Flower Collection
						</h3>
						<p className="text-sm mb-2">
							Enjoy risk-free trading experience, on the go
						</p>
						<h3 className="text-white font-medium mt-6 mb-4">Box of Flowers</h3>
						<p className="text-sm">Get risk-free test tokens on Sepolia</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
