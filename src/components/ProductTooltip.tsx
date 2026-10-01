import type { Product } from "../data/products";

type ProductTooltipProps = {
  product: Product;
};

export function ProductTooltip({ product }: ProductTooltipProps) {
  return (
    <div
      role="tooltip"
      className="absolute left-full top-0 z-10 ml-2 w-72 rounded-lg border border-slate-200 bg-white p-4 text-left shadow-lg"
    >
      <p className="mb-1.5 text-sm font-semibold text-slate-900">{product.name}</p>
      <p className="text-xs leading-relaxed text-slate-600">{product.description}</p>
    </div>
  );
}
