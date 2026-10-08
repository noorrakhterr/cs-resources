import { useState } from "react";
import { Header } from "./components/Header";
import { NexusGeminiBanner } from "./components/NexusGeminiBanner";
import { ProductGrid } from "./components/ProductGrid";
import { QuickResourceGrid } from "./components/QuickResourceGrid";
import { ResourceCenter } from "./components/ResourceCenter";
import { ResourceColumn } from "./components/ResourceColumn";
import { SectionHeader } from "./components/SectionHeader";
import { SlideDeckGrid } from "./components/SlideDeckGrid";
import { TagFilterDropdown } from "./components/TagFilterDropdown";
import { products, type ResourceTag } from "./data/products";
import { quickResources } from "./data/quickResources";
import { sources } from "./data/sources";

type View = "home" | "product" | "quick";

function App() {
  const [view, setView] = useState<View>("home");
  const [activeProductId, setActiveProductId] = useState<string | null>(null);
  const [activeQuickId, setActiveQuickId] = useState<string | null>(null);
  const [activeTags, setActiveTags] = useState<ResourceTag[]>([]);

  const activeProduct = products.find((p) => p.id === activeProductId) ?? null;
  const activeQuickGroup = quickResources.find((g) => g.id === activeQuickId) ?? null;

  function openProduct(id: string) {
    setActiveProductId(id);
    setView("product");
  }

  function openQuickResource(id: string) {
    setActiveQuickId(id);
    setView("quick");
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
        {view === "home" && (
          <>
            <ResourceCenter sources={sources} />
            <NexusGeminiBanner />
            <QuickResourceGrid groups={quickResources} onSelect={openQuickResource} />
            <ProductGrid products={products} onSelect={openProduct} />
          </>
        )}

        {view === "product" && activeProduct && (
          <div>
            <SectionHeader title={activeProduct.name} onBack={goHome} />

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

        {view === "quick" && activeQuickGroup && (
          <div>
            <SectionHeader title={activeQuickGroup.name} onBack={goHome} backLabel="Home" />

            {activeQuickGroup.id === "slide-decks" ? (
              <SlideDeckGrid resources={activeQuickGroup.resources} />
            ) : activeQuickGroup.categories ? (
              <div className="flex flex-col gap-6 sm:flex-row">
                {activeQuickGroup.categories.map((category) => (
                  <ResourceColumn
                    key={category.name}
                    title={category.name}
                    links={category.resources}
                    activeTags={[]}
                  />
                ))}
              </div>
            ) : (
              <ResourceColumn
                links={activeQuickGroup.resources}
                activeTags={[]}
                showTags={false}
              />
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
