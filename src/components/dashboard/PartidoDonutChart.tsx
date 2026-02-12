import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { Emenda, formatBRL, CHART_COLORS } from "@/data/emendas";
import { PieChartIcon } from "lucide-react";

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
    .slice(0, 5)
    .map(([name, value]) => ({ name, value }));

  const total = chartData.reduce((s, d) => s + d.value, 0);

  return (
    <div className="rounded-2xl bg-card border border-border shadow-sm overflow-hidden h-full">
      <div className="px-6 pt-5 pb-2 flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15">
          <PieChartIcon className="h-4 w-4 text-accent" />
        </div>
        <div>
          <h3 className="text-lg font-bold">Top 5 Partidos</h3>
          <p className="text-[12px] text-muted-foreground">
            Distribuição de valores
          </p>
        </div>
      </div>
      <div className="px-4 pb-5">
        <div className="h-[380px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="42%"
                innerRadius={70}
                outerRadius={120}
                paddingAngle={3}
                dataKey="value"
                nameKey="name"
                stroke="hsl(0,0%,100%)"
                strokeWidth={3}
              >
                {chartData.map((_, i) => (
                  <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => [formatBRL(value), "Valor"]}
                contentStyle={{
                  borderRadius: 12,
                  border: "1px solid hsl(210,16%,90%)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: 14,
                }}
              />
              <Legend
                verticalAlign="bottom"
                iconType="circle"
                iconSize={8}
                wrapperStyle={{
                  fontSize: 16,
                  paddingTop: 16,
                  fontFamily: "Plus Jakarta Sans",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
