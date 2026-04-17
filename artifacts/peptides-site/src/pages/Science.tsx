import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

export default function Science() {
  const steps = [
    { num: "01", title: "Amino Acid Selection", desc: "Only Fmoc-protected amino acids of the highest grade are utilized, ensuring no racemization during coupling." },
    { num: "02", title: "Solid-Phase Synthesis", desc: "Automated microwave-assisted SPPS drives the peptide chain elongation with exceptional fidelity." },
    { num: "03", title: "Cleavage & Deprotection", desc: "Precision cleavage cocktails separate the peptide from the resin while preserving molecular integrity." },
    { num: "04", title: "HPLC Purification", desc: "Preparative high-performance liquid chromatography isolates the target peptide to >99% purity." },
    { num: "05", title: "Lyophilization", desc: "Careful freeze-drying processes stabilize the peptide structure for long-term ambient temperature viability." },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-6">
          <ScrollReveal className="max-w-4xl mx-auto text-center mb-32">
            <div className="text-sm uppercase tracking-widest text-primary mb-6 font-medium">Methodology</div>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8">Uncompromising Scientific Rigor</h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              At PeptideX, we believe that efficacy begins with purity. Our synthesis protocols leverage state-of-the-art automated technology and stringent quality control measures to deliver unparalleled molecular fidelity.
            </p>
          </ScrollReveal>

          {/* Process Timeline */}
          <div className="max-w-5xl mx-auto mb-32">
            <h2 className="text-3xl font-light tracking-tight mb-16 text-center">Synthesis Process</h2>
            <div className="space-y-12">
              {steps.map((step, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="flex flex-col md:flex-row gap-8 items-start group">
                    <div className="text-6xl font-light text-border group-hover:text-primary transition-colors duration-500">
                      {step.num}
                    </div>
                    <div className="flex-1 pt-4 border-t border-border group-hover:border-primary/50 transition-colors duration-500">
                      <h3 className="text-xl font-medium tracking-tight mb-3">{step.title}</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="max-w-5xl mx-auto">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl font-light tracking-tight">Our Research Board</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: "Dr. Elena Rostova", title: "Chief Scientific Officer", img: "https://picsum.photos/seed/sci1/400/400" },
                { name: "Dr. Marcus Chen", title: "Head of Synthesis", img: "https://picsum.photos/seed/sci2/400/400" },
                { name: "Dr. Sarah Jenkins", title: "Director of Quality Control", img: "https://picsum.photos/seed/sci3/400/400" },
              ].map((scientist, index) => (
                <ScrollReveal key={index} delay={index * 0.1} className="text-center">
                  <div className="aspect-square rounded-full overflow-hidden mb-6 mx-auto w-48 border border-border">
                    <img src={scientist.img} alt={scientist.name} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <h4 className="text-lg font-medium tracking-tight mb-1">{scientist.name}</h4>
                  <p className="text-sm text-primary uppercase tracking-wider">{scientist.title}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}