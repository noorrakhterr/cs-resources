import type { Product } from "../data/products";

type ProductTooltipProps = {
  product: Product;
};

export function ProductTooltip({ product }: ProductTooltipProps) {
  return (
    <div
      role="tooltip"
      className="absolute left-1/2 top-full z-10 mt-2 w-72 -translate-x-1/2 rounded-lg border border-slate-200 bg-white p-4 text-left shadow-lg"
    >
      <p className="mb-1.5 font-heading text-sm font-semibold text-slate-900">{product.name}</p>
      <p className="text-xs leading-relaxed text-slate-600">{product.description}</p>
    </div>
  );
}
