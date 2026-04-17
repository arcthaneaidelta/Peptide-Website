import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageTransition } from "@/components/PageTransition";
import { ProductCard } from "@/components/ProductCard";
import { products, testimonials } from "@/mockData";
import { ArrowRight, Activity, ShieldCheck, Zap } from "lucide-react";
import { useRef } from "react";

export default function Landing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const featuredProducts = products.slice(0, 3);

  return (
    <PageTransition>
      <div ref={containerRef} className="relative min-h-screen bg-background overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
          <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
            <svg className="absolute w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" className="fill-border" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </motion.div>

          <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-widest mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Clinical Grade Synthesis
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-foreground mb-8 leading-tight">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  Engineered for
                </motion.span>
              </span>
              <span className="block overflow-hidden font-medium text-primary">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  Human Performance
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Research-grade peptides synthesized with uncompromising precision. Designed for those who demand the absolute best in longevity, recovery, and optimization.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link href="/products">
                <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-8 font-medium text-primary-foreground hover:scale-[0.98] transition-transform duration-300">
                  <span className="relative z-10 flex items-center gap-2 tracking-wide">
                    Explore Catalog <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 h-full w-full scale-0 rounded-full bg-white/20 transition-all duration-300 ease-out group-hover:scale-100" />
                </button>
              </Link>
              <Link href="/science">
                <button className="inline-flex h-14 items-center justify-center rounded-full border border-border bg-transparent px-8 font-medium text-foreground transition-colors hover:bg-accent hover:border-accent">
                  <span className="tracking-wide">Our Science</span>
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Scientific Credibility */}
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <ScrollReveal delay={0.1}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Activity className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium mb-3 tracking-tight">99.9% Purity Standard</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every batch undergoes rigorous HPLC and MS testing to ensure absolute molecular integrity.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium mb-3 tracking-tight">Cold Chain Logistics</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lyophilized stability maintained through advanced thermal packaging from our lab to your door.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Zap className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium mb-3 tracking-tight">Rapid Systemic Action</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Optimized molecular structures for maximum bioavailability and immediate physiological response.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-32 relative">
          <div className="container mx-auto px-6">
            <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-foreground mb-4">
                  Flagship Compounds
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl font-light">
                  Our most sought-after research peptides, synthesized for elite applications.
                </p>
              </div>
              <Link href="/products" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium tracking-wide">
                View full catalog <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 bg-card border-y border-border">
          <div className="container mx-auto px-6">
            <ScrollReveal className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-foreground mb-4">
                Clinical Feedback
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, index) => (
                <ScrollReveal key={t.id} delay={index * 0.1}>
                  <div className="p-8 rounded-2xl border border-border bg-background relative h-full">
                    <div className="text-primary text-4xl font-serif absolute top-6 left-6 opacity-20">"</div>
                    <p className="text-lg font-light leading-relaxed mb-8 relative z-10 pt-4">
                      {t.quote}
                    </p>
                    <div className="mt-auto">
                      <div className="font-medium tracking-wide">{t.author}</div>
                      <div className="text-sm text-muted-foreground">{t.title}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
                Ready to optimize?
              </h2>
              <p className="text-xl text-muted-foreground mb-12 font-light">
                Join the elite tier of professionals demanding the highest standard in peptide research.
              </p>
              <Link href="/products">
                <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-10 font-medium text-primary-foreground hover:scale-[0.98] transition-transform duration-300">
                  <span className="relative z-10 tracking-wide">Enter Catalog</span>
                  <div className="absolute inset-0 h-full w-full scale-0 rounded-full bg-white/20 transition-all duration-300 ease-out group-hover:scale-100" />
                </button>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}