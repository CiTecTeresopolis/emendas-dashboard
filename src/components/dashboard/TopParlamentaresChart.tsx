import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Emenda, formatBRL, formatBRLCompact, CHART_COLORS } from "@/data/emendas";

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
    <Card className="border-border/50 shadow-sm rounded-2xl overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-bold tracking-tight">Top 10 Parlamentares por Valor</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[360px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical" margin={{ left: 10, right: 20, top: 5, bottom: 5 }}>
              <XAxis type="number" tickFormatter={(v) => formatBRLCompact(v)} tick={{ fontSize: 11 }} />
              <YAxis type="category" dataKey="name" width={140} tick={{ fontSize: 11 }} />
              <Tooltip
                formatter={(value: number) => [formatBRL(value), "Valor"]}
                contentStyle={{ borderRadius: 8, border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                {chartData.map((_, i) => (
                  <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
