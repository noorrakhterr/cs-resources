import { useState } from "react";
import type { Product } from "../data/products";
import { ProductTooltip } from "./ProductTooltip";

type ProductSidebarProps = {
  products: Product[];
  activeId: string;
  onSelect: (id: string) => void;
};

export function ProductSidebar({ products, activeId, onSelect }: ProductSidebarProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const hoveredProduct = products.find((p) => p.id === hoveredId);

  return (
    <nav className="w-full shrink-0 md:w-64">
      <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
        Products
      </p>
      <ul className="space-y-1">
        {products.map((product) => {
          const isActive = product.id === activeId;
          return (
            <li key={product.id} className="relative">
              <button
                type="button"
                onClick={() => onSelect(product.id)}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={
                  "w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors " +
                  (isActive
                    ? "bg-okta-blue text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900")
                }
              >
                {product.name}
              </button>
              {hoveredProduct?.id === product.id && <ProductTooltip product={hoveredProduct} />}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
