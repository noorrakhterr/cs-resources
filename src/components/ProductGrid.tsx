import type { Product } from "../data/products";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  products: Product[];
  onSelect: (id: string) => void;
};

export function ProductGrid({ products, onSelect }: ProductGridProps) {
  return (
    <div>
      <h2 className="mb-4 font-heading text-xl font-semibold text-slate-900">Products</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}
