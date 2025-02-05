interface ProductPrice {
	text: string;
	isDark: boolean;
}
export const ProductPrice = ({ text, isDark }: ProductPrice) => {
	return (
		<h2
			className={`font-extralight ${isDark ? 'text-white' : 'text-[#9B8059]'}`}
		>
			₱ {text} PHP
		</h2>
	);
};
