export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  price: number;
  category: "Recovery" | "Performance" | "Cognitive" | "Anti-Aging";
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
}

export interface Order {
  id: string;
  date: string;
  status: "Processing" | "Shipped" | "Delivered";
  total: number;
  items: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
}

export const products: Product[] = [
  {
    id: "bpc-157",
    name: "BPC-157",
    tagline: "Rapid Tissue Repair & Gut Healing",
    description: "A pentadecapeptide discovered in human gastric juice, renowned for its unparalleled systemic healing properties. BPC-157 accelerates the repair of tendons, muscles, and the nervous system while offering profound cytoprotective effects.",
    benefits: ["Accelerated tendon & ligament healing", "Gut mucosal integrity", "Anti-inflammatory action", "Neuroprotection"],
    price: 185.0,
    category: "Recovery",
    image: "https://picsum.photos/seed/bpc157/800/800"
  },
  {
    id: "tb-500",
    name: "TB-500",
    tagline: "Cellular Migration & Muscle Recovery",
    description: "A synthetic fraction of Thymosin Beta-4. TB-500 upregulates cell building proteins like actin, significantly enhancing cell migration, flexibility, and recovery in muscle and connective tissues.",
    benefits: ["Enhanced muscle recovery", "Promotes cell migration", "Reduces scar tissue", "Improves flexibility"],
    price: 195.0,
    category: "Recovery",
    image: "https://picsum.photos/seed/tb500/800/800"
  },
  {
    id: "ipamorelin",
    name: "Ipamorelin",
    tagline: "Selective GH Secretagogue",
    description: "A highly specific, third-generation GHRP that stimulates a massive release of natural growth hormone without significantly elevating cortisol or prolactin levels.",
    benefits: ["Lean muscle synthesis", "Fat metabolism", "Deep restorative sleep", "Anti-aging cellular repair"],
    price: 145.0,
    category: "Performance",
    image: "https://picsum.photos/seed/ipa/800/800"
  },
  {
    id: "cjc-1295",
    name: "CJC-1295",
    tagline: "Sustained GH Elevation",
    description: "A synthetic GHRH analog that increases plasma growth hormone and IGF-1 levels. Often paired with Ipamorelin for a synergistic amplification of recovery and performance.",
    benefits: ["Elevates IGF-1", "Increases bone density", "Promotes lean body mass", "Systemic rejuvenation"],
    price: 160.0,
    category: "Performance",
    image: "https://picsum.photos/seed/cjc/800/800"
  },
  {
    id: "sermorelin",
    name: "Sermorelin",
    tagline: "Natural GH Optimization",
    description: "A bio-identical peptide sequence of 29 amino acids that stimulates the pituitary gland to naturally produce and secrete increased amounts of human growth hormone.",
    benefits: ["Natural GH stimulation", "Improves vitality", "Enhances sleep quality", "Supports immune function"],
    price: 125.0,
    category: "Anti-Aging",
    image: "https://picsum.photos/seed/sermorelin/800/800"
  },
  {
    id: "aod-9604",
    name: "AOD-9604",
    tagline: "Targeted Adipose Reduction",
    description: "A modified fragment of human growth hormone strictly focused on lipolysis. It stimulates fat breakdown and inhibits the transformation of non-fatty foods into body fat.",
    benefits: ["Targeted lipolysis", "Inhibits lipogenesis", "Cartilage repair", "No insulin resistance"],
    price: 135.0,
    category: "Performance",
    image: "https://picsum.photos/seed/aod/800/800"
  },
  {
    id: "hexarelin",
    name: "Hexarelin",
    tagline: "Potent GHRP for Maximum Output",
    description: "One of the most potent synthetic growth hormone-releasing peptides. Hexarelin provides a powerful pulse of GH, highly favored by elite athletes for rapid strength and size gains.",
    benefits: ["Maximum GH pulse", "Rapid strength gains", "Cardioprotective properties", "Joint rejuvenation"],
    price: 155.0,
    category: "Performance",
    image: "https://picsum.photos/seed/hexarelin/800/800"
  },
  {
    id: "pt-141",
    name: "PT-141",
    tagline: "Neurological Vitality & Libido",
    description: "Bremelanotide acts directly on the nervous system to increase arousal and sexual function. A unique peptide offering profound benefits for human vitality.",
    benefits: ["Enhances libido", "Neurological arousal", "Treats dysfunction", "Boosts energy"],
    price: 110.0,
    category: "Performance",
    image: "https://picsum.photos/seed/pt141/800/800"
  },
  {
    id: "epithalon",
    name: "Epithalon",
    tagline: "Telomerase Activation",
    description: "A synthetic pineal peptide known for its ability to regulate the cell cycle through the upregulation of telomerase activity. The ultimate anti-aging compound.",
    benefits: ["Lengthens telomeres", "Normalizes circadian rhythm", "Increases lifespan potential", "Antioxidant defense"],
    price: 250.0,
    category: "Anti-Aging",
    image: "https://picsum.photos/seed/epithalon/800/800"
  },
  {
    id: "ghk-cu",
    name: "GHK-Cu",
    tagline: "Copper-binding Cellular Renewal",
    description: "A naturally occurring copper complex that regulates thousands of human genes. It dramatically improves tissue regeneration, collagen synthesis, and cognitive function.",
    benefits: ["Collagen stimulation", "Cognitive enhancement", "Wound healing", "Skin rejuvenation"],
    price: 140.0,
    category: "Cognitive",
    image: "https://picsum.photos/seed/ghkcu/800/800"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "peptide-synthesis-future",
    title: "The Future of Solid-Phase Peptide Synthesis",
    excerpt: "Exploring the next generation of automated SPPS and how it guarantees 99.9% purity at scale.",
    author: "Dr. Elena Rostova",
    date: "Oct 12, 2024",
    image: "https://picsum.photos/seed/blog1/800/500"
  },
  {
    id: "bpc157-mechanisms",
    title: "Mechanisms of BPC-157 in Angiogenesis",
    excerpt: "A deep dive into how BPC-157 upregulates VEGF expression to form new blood vessels in damaged tissue.",
    author: "Dr. Marcus Chen",
    date: "Sep 28, 2024",
    image: "https://picsum.photos/seed/blog2/800/500"
  },
  {
    id: "gh-secretagogues",
    title: "Comparing GH Secretagogues: Ipamorelin vs Hexarelin",
    excerpt: "Analyzing the pharmacokinetics and receptor affinities of third-generation GHRPs.",
    author: "Dr. Sarah Jenkins",
    date: "Sep 15, 2024",
    image: "https://picsum.photos/seed/blog3/800/500"
  },
  {
    id: "telomerase-activation",
    title: "Epithalon and Telomerase Activation",
    excerpt: "Reviewing the clinical data on Epithalon's ability to extend the Hayflick limit in human somatic cells.",
    author: "Dr. Elena Rostova",
    date: "Aug 30, 2024",
    image: "https://picsum.photos/seed/blog4/800/500"
  }
];

export const orders: Order[] = [
  { id: "PX-2024-089", date: "2024-10-24", status: "Processing", total: 545.00, items: 3 },
  { id: "PX-2024-088", date: "2024-10-23", status: "Shipped", total: 185.00, items: 1 },
  { id: "PX-2024-087", date: "2024-10-21", status: "Delivered", total: 320.00, items: 2 },
  { id: "PX-2024-086", date: "2024-10-20", status: "Delivered", total: 850.00, items: 5 },
  { id: "PX-2024-085", date: "2024-10-18", status: "Delivered", total: 145.00, items: 1 },
  { id: "PX-2024-084", date: "2024-10-15", status: "Delivered", total: 460.00, items: 3 },
  { id: "PX-2024-083", date: "2024-10-12", status: "Delivered", total: 250.00, items: 1 },
  { id: "PX-2024-082", date: "2024-10-10", status: "Delivered", total: 110.00, items: 1 },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "The purity of PeptideX's BPC-157 is unmatched. It cut my post-surgical recovery time in half. True clinical grade.",
    author: "Jonathan M.",
    title: "Professional Athlete"
  },
  {
    id: "t2",
    quote: "As a longevity researcher, I demand third-party mass spec testing. PeptideX provides it. Their Epithalon is flawless.",
    author: "Dr. Alistair C.",
    title: "Biohacker & Physician"
  },
  {
    id: "t3",
    quote: "The cold chain shipping and presentation instantly told me this was a serious biotech firm. The results proved it.",
    author: "Sarah V.",
    title: "Executive"
  }
];