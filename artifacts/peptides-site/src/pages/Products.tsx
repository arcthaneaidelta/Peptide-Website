import { useState } from "react";
import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/mockData";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["All", "Recovery", "Performance", "Cognitive", "Anti-Aging"];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = products.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-foreground mb-6">
              Research Catalog
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Explore our comprehensive range of high-purity synthesized peptides, engineered for targeted physiological optimization.
            </p>
          </ScrollReveal>

          {/* Filter Tabs */}
          <ScrollReveal delay={0.2} className="flex flex-wrap justify-center gap-2 mb-16">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm tracking-wide transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </ScrollReveal>

          {/* Product Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}