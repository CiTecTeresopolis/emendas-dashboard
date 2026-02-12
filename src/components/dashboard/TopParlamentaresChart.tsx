import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Emenda, formatBRL, formatBRLCompact, CHART_COLORS } from "@/data/emendas";
import { BarChart3 } from "lucide-react";

interface Props {
  data: Emenda[];
}

export function TopParlamentaresChart({ data }: Props) {
  const parlamentarTotals = data.reduce<Record<string, number>>((acc, e) => {
    acc[e.parlamentar] = (acc[e.parlamentar] || 0) + e.valorProposto;
    return acc;
  }, {});

  const chartData = Object.entries(parlamentarTotals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([name, value]) => ({
      name: name.replace(/^(Deputad[oa] Federal |Senador[a]? )/, ""),
      value,
    }));

  return (
    <div className="rounded-2xl bg-card border border-border shadow-sm overflow-hidden h-full">
      <div className="px-6 pt-5 pb-2 flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
          <BarChart3 className="h-4 w-4 text-primary" />
        </div>
        <div>
          <h3 className="text-sm font-bold">Top 10 Parlamentares</h3>
          <p className="text-[10px] text-muted-foreground">Por valor proposto</p>
        </div>
      </div>
      <div className="px-4 pb-5">
        <div className="h-[380px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical" margin={{ left: 10, right: 20, top: 10, bottom: 5 }}>
              <XAxis type="number" tickFormatter={(v) => formatBRLCompact(v)} tick={{ fontSize: 10, fill: "hsl(201,20%,46%)" }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="name" width={135} tick={{ fontSize: 11, fill: "hsl(201,95%,14%)" }} axisLine={false} tickLine={false} />
              <Tooltip
                formatter={(value: number) => [formatBRL(value), "Valor"]}
                contentStyle={{ borderRadius: 12, border: "1px solid hsl(210,16%,90%)", boxShadow: "0 8px 24px rgba(0,0,0,0.08)", fontFamily: "Plus Jakarta Sans", fontSize: 12 }}
                cursor={{ fill: "hsl(210,14%,92%)", radius: 6 }}
              />
              <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={22}>
                {chartData.map((_, i) => (
                  <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
