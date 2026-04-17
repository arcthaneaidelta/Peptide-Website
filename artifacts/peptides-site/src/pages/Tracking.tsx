import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useState } from "react";
import { Search, Package, CheckCircle2, Truck, Box } from "lucide-react";
import { motion } from "framer-motion";

export default function Tracking() {
  const [orderId, setOrderId] = useState("PX-2024-001");
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTracking(true);
  };

  const steps = [
    { title: "Order Confirmed", desc: "Protocol received and verified.", icon: Box, status: "complete" },
    { title: "Synthesis & QC", desc: "HPLC purity testing cleared.", icon: CheckCircle2, status: "complete" },
    { title: "Cold-Chain Packaging", desc: "Thermal shielding applied.", icon: Package, status: "active" },
    { title: "In Transit", desc: "Dispatched via premium courier.", icon: Truck, status: "pending" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <ScrollReveal className="text-center mb-16">
            <h1 className="text-4xl font-light tracking-tight mb-4">Track Protocol</h1>
            <p className="text-muted-foreground font-light">Monitor your shipment's temperature-controlled journey.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <form onSubmit={handleTrack} className="relative mb-20">
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="w-full h-16 bg-card border border-border rounded-full pl-8 pr-32 text-lg font-light focus:border-primary focus:outline-none shadow-sm transition-colors uppercase tracking-wider"
                placeholder="ENTER ORDER ID"
              />
              <button type="submit" className="absolute right-2 top-2 bottom-2 bg-primary text-primary-foreground px-6 rounded-full font-medium tracking-wide flex items-center gap-2 hover:bg-primary/90 transition-colors">
                <Search className="w-4 h-4" /> Track
              </button>
            </form>
          </ScrollReveal>

          {isTracking && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm"
            >
              <div className="flex justify-between items-center pb-8 border-b border-border mb-12">
                <div>
                  <h3 className="text-lg font-medium tracking-tight">Order {orderId}</h3>
                  <p className="text-sm text-muted-foreground font-light mt-1">Expected Delivery: Oct 28, 2024</p>
                </div>
                <div className="text-right">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs uppercase tracking-widest rounded-full font-medium border border-primary/20">
                    Processing
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-1/2" />
                
                <div className="space-y-12 relative">
                  {steps.map((step, index) => (
                    <div key={index} className={`flex items-start md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""} gap-6`}>
                      <div className="md:w-1/2 md:text-right flex flex-col md:items-end w-full pl-16 md:pl-0 md:px-8">
                        <h4 className={`text-lg font-medium tracking-tight mb-1 ${step.status === 'pending' ? 'text-muted-foreground' : 'text-foreground'}`}>
                          {step.title}
                        </h4>
                        <p className="text-sm text-muted-foreground font-light">{step.desc}</p>
                      </div>
                      
                      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full border-[3px] flex items-center justify-center bg-card transition-colors duration-500
                        ${step.status === 'complete' ? 'border-primary text-primary' : 
                          step.status === 'active' ? 'border-primary bg-primary text-primary-foreground' : 
                          'border-border text-muted-foreground'}"
                      >
                        <step.icon className="w-5 h-5" />
                      </div>
                      
                      <div className="hidden md:block md:w-1/2" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}