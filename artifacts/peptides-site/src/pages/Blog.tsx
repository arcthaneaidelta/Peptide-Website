import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal } from "@/components/ScrollReveal";
import { blogPosts } from "@/mockData";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Blog() {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-6">
          <ScrollReveal className="mb-16">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">Research Journal</h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl">
              Latest insights, clinical data reviews, and synthesis advancements from the PeptideX board.
            </p>
          </ScrollReveal>

          {/* Featured Post */}
          <ScrollReveal delay={0.1} className="mb-20">
            <Link href="#" className="group block relative rounded-2xl overflow-hidden aspect-[2/1] md:aspect-[3/1] bg-card border border-border">
              <img src={featuredPost.image} alt={featuredPost.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
                <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-primary mb-4">
                  <span>Featured Report</span>
                  <span>{featuredPost.date}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6 line-clamp-2 md:line-clamp-none">
                  {featuredPost.excerpt}
                </p>
                <div className="inline-flex items-center gap-2 font-medium tracking-wide">
                  Read Full Paper <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Grid Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.1}>
                <Link href="#" className="group block h-full flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs text-muted-foreground uppercase tracking-widest mb-3 flex justify-between">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-medium tracking-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light line-clamp-3 mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm font-medium tracking-wide mt-auto">
                      Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}