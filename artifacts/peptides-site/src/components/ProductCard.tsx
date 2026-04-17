import { Product } from "@/mockData";
import { Link } from "wouter";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link href={`/products/${product.id}`} className="group block relative w-full h-full bg-card hover:bg-accent/5 transition-colors duration-500 border border-border/50 rounded-lg overflow-hidden flex flex-col">
        <div className="relative aspect-[4/5] overflow-hidden bg-muted/30">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
            {product.category}
          </div>
          <h3 className="text-xl font-medium tracking-tight text-foreground mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-6 flex-grow">
            {product.tagline}
          </p>
          
          <div className="flex items-center justify-between mt-auto">
            <span className="text-lg font-medium tracking-tight">
              ${product.price.toFixed(2)}
            </span>
            <button
              onClick={handleAdd}
              disabled={isAdding}
              className={`relative overflow-hidden rounded-full w-10 h-10 flex items-center justify-center border border-border bg-background transition-all duration-300 hover:border-primary hover:text-primary ${
                isAdding ? "border-primary bg-primary/10 text-primary scale-95" : ""
              }`}
            >
              <Plus className={`w-4 h-4 transition-transform duration-300 ${isAdding ? "rotate-90 scale-125" : ""}`} />
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}