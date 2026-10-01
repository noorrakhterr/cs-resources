import { useState } from "react";
import type { Product } from "../data/products";
import { ProductTooltip } from "./ProductTooltip";

type ProductCardProps = {
  product: Product;
  onSelect: (id: string) => void;
};

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => onSelect(product.id)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex h-full w-full flex-col items-start gap-2 rounded-xl border border-slate-200 bg-white px-5 py-6 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-okta-blue/40 hover:shadow-md"
      >
        <span className="font-heading text-lg font-semibold text-slate-900">{product.name}</span>
      </button>
      {hovered && <ProductTooltip product={product} />}
    </div>
  );
}
