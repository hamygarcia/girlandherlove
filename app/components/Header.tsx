export const Header = () => {
	return (
		<section className="bg-[#EFEDE6]">
			<div className="flex items-center justify-center gap-2 py-5 md:py-10">
				<img className="h-16" src="logo.svg" alt="Girl and her love logo" />
				<div className="flex flex-col">
					<p className="font-bold text-xl tracking-tight md:text-2xl">
						Girl and Her Love
					</p>
					<p className="font-light tracking-widest text-sm md:text-base">
						Gift Shop
					</p>
				</div>
			</div>
		</section>
	);
};
