import type { Product } from "../data/products";

type ProductDetailHeaderProps = {
  product: Product;
  onBack: () => void;
};

export function ProductDetailHeader({ product, onBack }: ProductDetailHeaderProps) {
  return (
    <div className="mb-6">
      <button
        type="button"
        onClick={onBack}
        className="mb-4 inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium text-okta-blue transition-colors hover:bg-okta-blue/5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M15 18 9 12 15 6" />
        </svg>
        All products
      </button>
      <h2 className="font-heading text-2xl font-semibold text-slate-900">{product.name}</h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">{product.description}</p>
    </div>
  );
}
