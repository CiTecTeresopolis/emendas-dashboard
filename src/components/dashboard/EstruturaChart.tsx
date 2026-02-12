import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Emenda, formatBRL, formatBRLCompact, CHART_COLORS } from "@/data/emendas";

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
    <Card className="border-border/50 shadow-sm rounded-2xl overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-bold tracking-tight">Valor por Área (Estrutura)</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[360px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ left: 0, right: 20, top: 5, bottom: 5 }}>
              <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} height={60} angle={-25} textAnchor="end" />
              <YAxis tickFormatter={(v) => formatBRLCompact(v)} tick={{ fontSize: 11 }} />
              <Tooltip
                formatter={(value: number) => [formatBRL(value), "Valor"]}
                contentStyle={{ borderRadius: 8, border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={36}>
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
