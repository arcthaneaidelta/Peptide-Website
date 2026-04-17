import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [, setLocation] = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login -> redirect to dashboard
    setLocation("/dashboard");
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background flex items-center justify-center py-20">
        <div className="container mx-auto px-6 max-w-md">
          <ScrollReveal className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl tracking-[0.15em] uppercase font-light mb-2">PeptideX</h1>
                <p className="text-sm text-muted-foreground font-light">Client Portal</p>
              </div>

              <div className="flex p-1 bg-muted rounded-lg mb-8">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-2 text-sm font-medium tracking-wide rounded-md transition-all ${
                    isLogin ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-2 text-sm font-medium tracking-wide rounded-md transition-all ${
                    !isLogin ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Register
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.form
                  key={isLogin ? "login" : "register"}
                  initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {!isLogin && (
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Full Name</label>
                      <input required type="text" className="w-full h-12 bg-transparent border border-border rounded-md px-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-light text-sm" />
                    </div>
                  )}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Email Address</label>
                    <input required type="email" className="w-full h-12 bg-transparent border border-border rounded-md px-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-light text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Password</label>
                    <input required type="password" className="w-full h-12 bg-transparent border border-border rounded-md px-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-light text-sm" />
                  </div>
                  
                  <button type="submit" className="w-full h-12 bg-primary text-primary-foreground font-medium tracking-wide rounded-md hover:scale-[0.98] transition-transform mt-6">
                    {isLogin ? "Access Portal" : "Create Account"}
                  </button>
                </motion.form>
              </AnimatePresence>
            </div>
            <div className="bg-muted/50 p-6 text-center border-t border-border">
              <p className="text-xs text-muted-foreground font-light">
                Secured via military-grade encryption. Access restricted to verified researchers and clinicians.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  );
}