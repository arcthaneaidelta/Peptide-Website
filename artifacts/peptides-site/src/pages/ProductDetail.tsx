import { useParams } from "wouter";
import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal } from "@/components/ScrollReveal";
import { products } from "@/mockData";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Check, Beaker, Shield, Activity } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  if (!product) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-light">Product not found.</h1>
        </div>
      </PageTransition>
    );
  }

  const handleAdd = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 1500);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Image Area */}
            <ScrollReveal className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden bg-card border border-border">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </ScrollReveal>

            {/* Content Area */}
            <div className="flex flex-col justify-center">
              <ScrollReveal delay={0.1}>
                <div className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
                  {product.category}
                </div>
                <h1 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-muted-foreground font-light mb-8">
                  {product.tagline}
                </p>
                <div className="text-3xl font-medium tracking-tight mb-8">
                  ${product.price.toFixed(2)}
                </div>

                <div className="prose prose-p:font-light prose-p:leading-relaxed prose-p:text-muted-foreground mb-12">
                  <p>{product.description}</p>
                </div>

                <div className="mb-12">
                  <h3 className="text-sm font-medium uppercase tracking-widest mb-6">Physiological Benefits</h3>
                  <ul className="space-y-4">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground font-light">
                        <Check className="w-5 h-5 text-primary shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={handleAdd}
                  disabled={isAdding}
                  className={`relative w-full h-14 rounded-full font-medium tracking-wide flex items-center justify-center transition-all duration-300 overflow-hidden ${
                    isAdding 
                      ? "bg-green-500 text-white scale-[0.98]" 
                      : "bg-primary text-primary-foreground hover:scale-[0.99] shadow-lg shadow-primary/20"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {isAdding ? (
                      <motion.div
                        key="added"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-center gap-2"
                      >
                        <Check className="w-5 h-5" /> Added to protocol
                      </motion.div>
                    ) : (
                      <motion.div
                        key="add"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-center gap-2"
                      >
                        <Plus className="w-5 h-5" /> Add to Cart
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </ScrollReveal>
            </div>
          </div>

          {/* Science Section */}
          <ScrollReveal className="py-24 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="w-12 h-12 mx-auto rounded-full border border-border flex items-center justify-center mb-6">
                  <Beaker className="w-5 h-5 text-muted-foreground" />
                </div>
                <h4 className="font-medium tracking-tight mb-2">HPLC Verified</h4>
                <p className="text-sm text-muted-foreground font-light">Independent mass spectrometry confirms &gt;99% sequence purity.</p>
              </div>
              <div>
                <div className="w-12 h-12 mx-auto rounded-full border border-border flex items-center justify-center mb-6">
                  <Activity className="w-5 h-5 text-muted-foreground" />
                </div>
                <h4 className="font-medium tracking-tight mb-2">Bio-Identical</h4>
                <p className="text-sm text-muted-foreground font-light">Exact amino acid sequencing mirroring natural human peptides.</p>
              </div>
              <div>
                <div className="w-12 h-12 mx-auto rounded-full border border-border flex items-center justify-center mb-6">
                  <Shield className="w-5 h-5 text-muted-foreground" />
                </div>
                <h4 className="font-medium tracking-tight mb-2">Sterile Synthesis</h4>
                <p className="text-sm text-muted-foreground font-light">Produced in ISO 5 cleanroom environments under strict SOPs.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="pt-24 border-t border-border">
              <ScrollReveal>
                <h2 className="text-2xl font-light tracking-tight mb-12">Synergistic Compounds</h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}