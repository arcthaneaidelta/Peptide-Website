import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Plus, Minus, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Cart() {
  const { items, updateQuantity, removeFromCart, subtotal, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-background pt-32 pb-24 flex items-center justify-center">
          <ScrollReveal className="text-center max-w-md mx-auto">
            <div className="w-24 h-24 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mx-auto mb-8 border border-green-500/20">
              <ShieldCheck className="w-12 h-12" />
            </div>
            <h1 className="text-3xl font-light tracking-tight mb-4">Order Confirmed</h1>
            <p className="text-muted-foreground font-light mb-8">
              Your compounds are being prepared for cold-chain dispatch. Tracking ID: PX-2024-090
            </p>
            <Link href="/tracking">
              <button className="bg-primary text-primary-foreground h-12 px-8 rounded-full font-medium tracking-wide">
                Track Order
              </button>
            </Link>
          </ScrollReveal>
        </div>
      </PageTransition>
    );
  }

  if (items.length === 0) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-background pt-32 pb-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-light tracking-tight mb-6">Your protocol is empty.</h1>
            <Link href="/products">
              <button className="bg-primary text-primary-foreground h-12 px-8 rounded-full font-medium tracking-wide">
                Explore Catalog
              </button>
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-4xl font-light tracking-tight mb-12">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95, height: 0, overflow: "hidden" }}
                    className="flex gap-6 p-4 rounded-xl border border-border bg-card"
                  >
                    <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-muted">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="flex justify-between">
                        <div>
                          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{item.category}</div>
                          <h3 className="font-medium tracking-tight text-lg">{item.name}</h3>
                        </div>
                        <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 border border-border rounded-full p-1 bg-background">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-muted text-muted-foreground">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-muted text-muted-foreground">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Checkout Form */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-2xl p-8 sticky top-28 shadow-sm">
                <h3 className="text-xl font-medium tracking-tight mb-6">Order Summary</h3>
                <div className="space-y-4 mb-8 text-sm font-light">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cold-Chain Shipping</span>
                    <span>$45.00</span>
                  </div>
                  <div className="border-t border-border pt-4 flex justify-between font-medium text-lg mt-4">
                    <span>Total</span>
                    <span>${(subtotal + 45).toFixed(2)}</span>
                  </div>
                </div>

                <form onSubmit={handleCheckout} className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Shipping Address</label>
                    <input required type="text" placeholder="Full Name" className="w-full h-10 bg-transparent border-b border-border focus:border-primary focus:outline-none text-sm mb-3" />
                    <input required type="text" placeholder="Street Address" className="w-full h-10 bg-transparent border-b border-border focus:border-primary focus:outline-none text-sm mb-3" />
                    <div className="grid grid-cols-2 gap-4">
                      <input required type="text" placeholder="City" className="w-full h-10 bg-transparent border-b border-border focus:border-primary focus:outline-none text-sm" />
                      <input required type="text" placeholder="ZIP Code" className="w-full h-10 bg-transparent border-b border-border focus:border-primary focus:outline-none text-sm" />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isCheckingOut}
                    className="w-full h-14 bg-primary text-primary-foreground font-medium tracking-wide flex items-center justify-center gap-2 rounded-full hover:scale-[0.98] transition-all"
                  >
                    {isCheckingOut ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full" />
                    ) : (
                      <>Complete Order <ArrowRight className="w-4 h-4" /></>
                    )}
                  </button>
                  <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Secure Encrypted Checkout
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}