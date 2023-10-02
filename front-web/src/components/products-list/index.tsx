import { checkIsSelected } from "../../services/helpers";
import { Product } from "../../services/types";
import ProductCard from "../product-card";

type Props = {
  products: Product[];
  selectedProducts: Product[];
  onSelectProduct: (product: Product) => void;
};

export default function ProductsList({
  products,
  onSelectProduct,
  selectedProducts,
}: Props) {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelectProduct={onSelectProduct}
            isSelected={checkIsSelected(selectedProducts, product)}
          />
        ))}
      </div>
    </div>
  );
}
