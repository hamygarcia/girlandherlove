import { ProductImage } from './ProductImage';
import { ProductPrice } from './ProductPrice';
import { ProductTitle } from './ProductTitle';

interface ProductItem {
	imgUrl: string;
	alt: string;
	title: string;
	price: string;
	rating: number | null;
}

interface ProductInterface {
	productItem: ProductItem;
	isDark: boolean;
}

export const Product = ({ isDark, productItem }: ProductInterface) => {
	if (!productItem) return null;
	return (
		<div>
			<ProductImage
				imgUrl={productItem.imgUrl}
				alt={productItem.alt}
				isDark={isDark}
			/>
			<ProductTitle text={productItem.title} isDark={isDark} />
			<ProductPrice text={productItem.price} isDark={isDark} />
		</div>
	);
};
