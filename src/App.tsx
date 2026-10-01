import { useState } from "react";
import { Header } from "./components/Header";
import { NexusGeminiBanner } from "./components/NexusGeminiBanner";
import { ProductSidebar } from "./components/ProductSidebar";
import { ResourceColumn } from "./components/ResourceColumn";
import { SourcesStrip } from "./components/SourcesStrip";
import { TagFilter } from "./components/TagFilter";
import { products, type ResourceTag } from "./data/products";
import { sources } from "./data/sources";

function App() {
  const [activeId, setActiveId] = useState(products[0].id);
  const [activeTags, setActiveTags] = useState<ResourceTag[]>([]);
  const activeProduct = products.find((p) => p.id === activeId) ?? products[0];

  function toggleTag(tag: ResourceTag) {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-6 py-8">
        <NexusGeminiBanner />

        <div className="flex flex-col gap-8 md:flex-row">
          <ProductSidebar products={products} activeId={activeId} onSelect={setActiveId} />

          <div className="flex-1">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">{activeProduct.name}</h2>

            <div className="mb-6">
              <TagFilter
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
        </div>
      </main>

      <SourcesStrip sources={sources} />
    </div>
  );
}

export default App;
