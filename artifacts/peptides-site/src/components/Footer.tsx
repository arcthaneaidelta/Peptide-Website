import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h2 className="text-lg tracking-[0.15em] uppercase font-light mb-6">PeptideX</h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Engineered for human performance. Research-grade peptides synthesized with uncompromising precision.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase mb-6">Products</h3>
            <ul className="space-y-4">
              <li><Link href="/products?category=Recovery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Recovery</Link></li>
              <li><Link href="/products?category=Performance" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Performance</Link></li>
              <li><Link href="/products?category=Cognitive" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cognitive</Link></li>
              <li><Link href="/products?category=Anti-Aging" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Anti-Aging</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/science" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Our Science</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Research Journal</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase mb-6">Support</h3>
            <ul className="space-y-4">
              <li><Link href="/tracking" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Order Tracking</Link></li>
              <li><Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Client Portal</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PeptideX. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground cursor-pointer hover:text-foreground transition-colors">Privacy Policy</span>
            <span className="text-xs text-muted-foreground cursor-pointer hover:text-foreground transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}