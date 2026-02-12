import { DollarSign, FileText, Users, Building2 } from "lucide-react";
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
      gradient: "from-[hsl(199,72%,44%)] to-[hsl(196,53%,60%)]",
      iconBg: "bg-[hsl(199,72%,44%)]/15",
      iconColor: "text-[hsl(199,72%,44%)]",
    },
    {
      title: "Quantidade de Emendas",
      value: totalEmendas.toString(),
      icon: FileText,
      description: "Emendas registradas",
      gradient: "from-[hsl(162,60%,40%)] to-[hsl(196,53%,60%)]",
      iconBg: "bg-[hsl(162,60%,40%)]/15",
      iconColor: "text-[hsl(162,60%,40%)]",
    },
    {
      title: "Partido com Maior Aporte",
      value: topPartido?.[0] || "-",
      icon: Users,
      description: topPartido ? formatBRL(topPartido[1]) : "",
      gradient: "from-[hsl(45,100%,50%)] to-[hsl(27,97%,49%)]",
      iconBg: "bg-[hsl(45,100%,50%)]/15",
      iconColor: "text-[hsl(45,100%,50%)]",
    },
    {
      title: "Área Mais Beneficiada",
      value: topEstrutura?.[0] || "-",
      icon: Building2,
      description: topEstrutura ? formatBRL(topEstrutura[1]) : "",
      gradient: "from-[hsl(27,97%,49%)] to-[hsl(45,100%,50%)]",
      iconBg: "bg-[hsl(27,97%,49%)]/15",
      iconColor: "text-[hsl(27,97%,49%)]",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, i) => (
        <div
          key={card.title}
          className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          {/* Top gradient accent line */}
          <div className={`h-1 w-full bg-gradient-to-r ${card.gradient}`} />
          <div className="p-5">
            <div className="flex items-start justify-between">
              <div className="space-y-1.5">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {card.title}
                </p>
                <p className="text-2xl font-extrabold tracking-tight">{card.value}</p>
                <p className="text-xs text-muted-foreground">{card.description}</p>
              </div>
              <div className={`rounded-xl p-2.5 ${card.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                <card.icon className={`h-5 w-5 ${card.iconColor}`} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
