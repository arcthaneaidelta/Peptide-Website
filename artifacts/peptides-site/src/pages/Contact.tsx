import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useState } from "react";
import { Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-8">Connect with our facility.</h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12">
                For inquiries regarding custom synthesis, bulk orders, or detailed analytical reports, please reach out to our support team.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium tracking-widest uppercase mb-2">Facility</h3>
                  <p className="text-muted-foreground font-light">100 Biotech Parkway<br />Cambridge, MA 02142</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium tracking-widest uppercase mb-2">Direct</h3>
                  <p className="text-muted-foreground font-light">support@peptidex.io<br />+1 (800) 555-0199</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-sm">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
                    >
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                        <Check className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-light tracking-tight mb-4">Message Received</h3>
                      <p className="text-muted-foreground font-light">Our team will review your inquiry and respond within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-sm font-medium tracking-wide mb-2 text-foreground/80">Name</label>
                        <input
                          required
                          type="text"
                          className="w-full h-12 bg-transparent border-b border-border focus:border-primary focus:outline-none transition-colors font-light text-foreground"
                          placeholder="Dr. Jane Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium tracking-wide mb-2 text-foreground/80">Email</label>
                        <input
                          required
                          type="email"
                          className="w-full h-12 bg-transparent border-b border-border focus:border-primary focus:outline-none transition-colors font-light text-foreground"
                          placeholder="jane@institute.edu"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium tracking-wide mb-2 text-foreground/80">Inquiry</label>
                        <textarea
                          required
                          rows={4}
                          className="w-full bg-transparent border-b border-border focus:border-primary focus:outline-none transition-colors font-light text-foreground resize-none py-2"
                          placeholder="How can we assist you?"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 bg-primary text-primary-foreground font-medium tracking-wide flex items-center justify-center gap-3 hover:scale-[0.98] transition-transform duration-300 mt-8 rounded-md"
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                          />
                        ) : (
                          <>Send Message <Send className="w-4 h-4" /></>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}