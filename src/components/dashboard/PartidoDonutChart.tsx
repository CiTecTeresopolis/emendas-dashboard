import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Emenda, formatBRL, CHART_COLORS } from "@/data/emendas";

interface Props {
  data: Emenda[];
}

export function PartidoDonutChart({ data }: Props) {
  const partidoTotals = data.reduce<Record<string, number>>((acc, e) => {
    acc[e.partido] = (acc[e.partido] || 0) + e.valorProposto;
    return acc;
  }, {});

  const chartData = Object.entries(partidoTotals)
    .sort((a, b) => b[1] - a[1])
    .map(([name, value]) => ({ name, value }));

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold">Distribuição por Partido</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[360px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="45%"
                innerRadius={65}
                outerRadius={110}
                paddingAngle={2}
                dataKey="value"
                nameKey="name"
                stroke="none"
              >
                {chartData.map((_, i) => (
                  <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => [formatBRL(value), "Valor"]}
                contentStyle={{ borderRadius: 8, border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              />
              <Legend
                verticalAlign="bottom"
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: 11, paddingTop: 12 }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
