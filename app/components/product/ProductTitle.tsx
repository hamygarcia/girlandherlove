interface ProductTitle {
	text: string;
	isDark: boolean;
}
export const ProductTitle = ({ text, isDark }: ProductTitle) => {
	return (
		<h2
			className={`font-serif font-extralight tracking-wide ${
				isDark ? 'text-white' : 'text-[#9B8059]'
			}`}
		>
			{text}
		</h2>
	);
};
