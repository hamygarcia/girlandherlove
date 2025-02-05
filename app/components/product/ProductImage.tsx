interface ProductImage {
	imgUrl: string;
	alt: string;
	isDark: boolean;
}
export const ProductImage = ({ imgUrl, alt, isDark }: ProductImage) => {
	return (
		<div
			className={`inline-block rounded-lg overflow-hidden border-2 ${
				isDark ? 'border-[#EFEDE6]' : 'border-[#9B8059]'
			}`}
		>
			<img src={imgUrl} alt={alt} className="w-full h-auto object-contain" />
		</div>
	);
};
