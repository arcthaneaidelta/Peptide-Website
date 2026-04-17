import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal } from "@/components/ScrollReveal";
import { orders } from "@/mockData";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { DollarSign, Package, TrendingUp, Users } from "lucide-react";

const chartData = [
  { name: "Mon", rev: 4000 },
  { name: "Tue", rev: 3000 },
  { name: "Wed", rev: 5500 },
  { name: "Thu", rev: 4500 },
  { name: "Fri", rev: 7000 },
  { name: "Sat", rev: 6500 },
  { name: "Sun", rev: 8500 },
];

export default function Dashboard() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h1 className="text-3xl font-light tracking-tight mb-2">Admin Overview</h1>
              <p className="text-muted-foreground font-light">Performance metrics for the current week.</p>
            </div>
            <div className="text-sm font-medium tracking-wide bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20">
              Live Data Feed
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Total Revenue", val: "$39,000", icon: DollarSign, trend: "+12.5%" },
              { label: "Orders Dispatched", val: "142", icon: Package, trend: "+8.2%" },
              { label: "Active Clients", val: "1,204", icon: Users, trend: "+3.1%" },
              { label: "Conversion Rate", val: "4.3%", icon: TrendingUp, trend: "+1.2%" },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-green-500 bg-green-500/10 px-2 py-1 rounded-md">
                      {stat.trend}
                    </span>
                  </div>
                  <h3 className="text-sm text-muted-foreground font-medium mb-1">{stat.label}</h3>
                  <div className="text-2xl font-semibold tracking-tight">{stat.val}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <ScrollReveal className="lg:col-span-2 bg-card border border-border p-6 rounded-2xl shadow-sm h-[400px]">
              <h3 className="text-sm font-medium tracking-wide mb-6">Revenue Trajectory</h3>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} tickFormatter={(val) => `$${val/1000}k`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Area type="monotone" dataKey="rev" stroke="hsl(var(--primary))" strokeWidth={2} fillOpacity={1} fill="url(#colorRev)" />
                </AreaChart>
              </ResponsiveContainer>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="bg-card border border-border p-6 rounded-2xl shadow-sm overflow-hidden flex flex-col">
              <h3 className="text-sm font-medium tracking-wide mb-6">Recent Logistics</h3>
              <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                {orders.slice(0, 5).map((order) => (
                  <div key={order.id} className="flex justify-between items-center pb-4 border-b border-border/50 last:border-0 last:pb-0">
                    <div>
                      <div className="text-sm font-medium">{order.id}</div>
                      <div className="text-xs text-muted-foreground">{order.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">${order.total.toFixed(2)}</div>
                      <div className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full inline-block mt-1
                        ${order.status === 'Delivered' ? 'bg-green-500/10 text-green-500' : 
                          order.status === 'Shipped' ? 'bg-blue-500/10 text-blue-500' : 
                          'bg-orange-500/10 text-orange-500'}`}
                      >
                        {order.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}