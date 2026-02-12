import { DollarSign, FileText, Users, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Emenda, formatBRL } from "@/data/emendas";

interface KPICardsProps {
  data: Emenda[];
}

export function KPICards({ data }: KPICardsProps) {
  const totalValor = data.reduce((sum, e) => sum + e.valorProposto, 0);
  const totalEmendas = data.length;

  const partidoTotals = data.reduce<Record<string, number>>((acc, e) => {
    acc[e.partido] = (acc[e.partido] || 0) + e.valorProposto;
    return acc;
  }, {});
  const topPartido = Object.entries(partidoTotals).sort((a, b) => b[1] - a[1])[0];

  const estruturaTotals = data.reduce<Record<string, number>>((acc, e) => {
    acc[e.estrutura] = (acc[e.estrutura] || 0) + e.valorProposto;
    return acc;
  }, {});
  const topEstrutura = Object.entries(estruturaTotals).sort((a, b) => b[1] - a[1])[0];

  const cards = [
    {
      title: "Valor Total em Emendas",
      value: formatBRL(totalValor),
      icon: DollarSign,
      description: "Total proposto em 2025",
      accent: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "Quantidade de Emendas",
      value: totalEmendas.toString(),
      icon: FileText,
      description: "Emendas registradas",
      accent: "text-success",
      bg: "bg-success/10",
    },
    {
      title: "Partido com Maior Aporte",
      value: topPartido?.[0] || "-",
      icon: Users,
      description: topPartido ? formatBRL(topPartido[1]) : "",
      accent: "text-accent",
      bg: "bg-accent/10",
    },
    {
      title: "Área Mais Beneficiada",
      value: topEstrutura?.[0] || "-",
      icon: Building2,
      description: topEstrutura ? formatBRL(topEstrutura[1]) : "",
      accent: "text-warning",
      bg: "bg-warning/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, i) => (
        <Card
          key={card.title}
          className="border-0 shadow-sm hover:shadow-md transition-shadow"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {card.title}
                </p>
                <p className="text-2xl font-bold tracking-tight">{card.value}</p>
                <p className="text-xs text-muted-foreground">{card.description}</p>
              </div>
              <div className={`rounded-lg p-2.5 ${card.bg}`}>
                <card.icon className={`h-5 w-5 ${card.accent}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
