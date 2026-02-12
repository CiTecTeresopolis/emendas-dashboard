import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from "recharts";
import { Emenda, formatBRL, formatBRLCompact, CHART_COLORS } from "@/data/emendas";
import { Layers } from "lucide-react";

interface Props {
  data: Emenda[];
}

export function EstruturaChart({ data }: Props) {
  const totals = data.reduce<Record<string, number>>((acc, e) => {
    acc[e.estrutura] = (acc[e.estrutura] || 0) + e.valorProposto;
    return acc;
  }, {});

  const chartData = Object.entries(totals)
    .sort((a, b) => b[1] - a[1])
    .map(([name, value]) => ({ name, value }));

  return (
    <div className="rounded-2xl bg-card border border-border shadow-sm overflow-hidden">
      <div className="px-6 pt-5 pb-2 flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-destructive/10">
          <Layers className="h-4 w-4 text-destructive" />
        </div>
        <div>
          <h3 className="text-sm font-bold">Valor por Área</h3>
          <p className="text-[10px] text-muted-foreground">Distribuição por estrutura</p>
        </div>
      </div>
      <div className="px-4 pb-5">
        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ left: 5, right: 20, top: 15, bottom: 5 }}>
              <CartesianGrid vertical={false} stroke="hsl(210,16%,92%)" strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 10, fill: "hsl(201,20%,46%)" }} interval={0} height={65} angle={-30} textAnchor="end" axisLine={false} tickLine={false} />
              <YAxis tickFormatter={(v) => formatBRLCompact(v)} tick={{ fontSize: 10, fill: "hsl(201,20%,46%)" }} axisLine={false} tickLine={false} />
              <Tooltip
                formatter={(value: number) => [formatBRL(value), "Valor"]}
                contentStyle={{ borderRadius: 12, border: "1px solid hsl(210,16%,90%)", boxShadow: "0 8px 24px rgba(0,0,0,0.08)", fontFamily: "Plus Jakarta Sans", fontSize: 12 }}
                cursor={{ fill: "hsl(210,14%,92%)", radius: 6 }}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={44}>
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
