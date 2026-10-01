import { useState } from "react";
import { Header } from "./components/Header";
import { NexusGeminiBanner } from "./components/NexusGeminiBanner";
import { ProductDetailHeader } from "./components/ProductDetailHeader";
import { ProductGrid } from "./components/ProductGrid";
import { ResourceColumn } from "./components/ResourceColumn";
import { SourcesStrip } from "./components/SourcesStrip";
import { TagFilterDropdown } from "./components/TagFilterDropdown";
import { products, type ResourceTag } from "./data/products";
import { sources } from "./data/sources";

type View = "home" | "product";

function App() {
  const [view, setView] = useState<View>("home");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeTags, setActiveTags] = useState<ResourceTag[]>([]);

  const activeProduct = products.find((p) => p.id === activeId) ?? null;

  function openProduct(id: string) {
    setActiveId(id);
    setView("product");
  }

  function goHome() {
    setView("home");
    setActiveTags([]);
  }

  function toggleTag(tag: ResourceTag) {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header onLogoClick={goHome} />

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-6 py-8">
        <NexusGeminiBanner />

        {view === "home" || !activeProduct ? (
          <ProductGrid products={products} onSelect={openProduct} />
        ) : (
          <div>
            <ProductDetailHeader product={activeProduct} onBack={goHome} />

            <div className="mb-6">
              <TagFilterDropdown
                activeTags={activeTags}
                onToggle={toggleTag}
                onClear={() => setActiveTags([])}
              />
            </div>

            <div className="flex flex-col gap-6 sm:flex-row">
              <ResourceColumn
                title="Customer-Facing Resources"
                links={activeProduct.customerFacing}
                activeTags={activeTags}
              />
              <ResourceColumn
                title="Internal Information"
                links={activeProduct.internal}
                activeTags={activeTags}
              />
            </div>
          </div>
        )}
      </main>

      <SourcesStrip sources={sources} />
    </div>
  );
}

export default App;
