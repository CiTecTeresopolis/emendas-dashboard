import { useState, useMemo, useCallback } from "react";
import { Landmark, Menu, X, TrendingUp, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { emendasData, Emenda, formatBRL } from "@/data/emendas";
import { KPICards } from "@/components/dashboard/KPICards";
import { TopParlamentaresChart } from "@/components/dashboard/TopParlamentaresChart";
import { PartidoDonutChart } from "@/components/dashboard/PartidoDonutChart";
import { EstruturaChart } from "@/components/dashboard/EstruturaChart";
import { EmendasTable } from "@/components/dashboard/EmendasTable";
import { FiltersSidebar, Filters } from "@/components/dashboard/FiltersSidebar";

const maxValue = Math.max(...emendasData.map((e) => e.valorProposto));

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    partidos: [],
    parlamentares: [],
    valorRange: [0, maxValue],
  });

  const filteredData = useMemo<Emenda[]>(() => {
    return emendasData.filter((e) => {
      if (filters.partidos.length > 0 && !filters.partidos.includes(e.partido))
        return false;
      if (
        filters.parlamentares.length > 0 &&
        !filters.parlamentares.includes(e.parlamentar)
      )
        return false;
      if (
        e.valorProposto < filters.valorRange[0] ||
        e.valorProposto > filters.valorRange[1]
      )
        return false;
      return true;
    });
  }, [filters]);

  const handleExportCSV = useCallback(() => {
    const headers = [
      "Parlamentar",
      "Partido",
      "Valor Proposto",
      "Estrutura",
      "Origem",
      "Objeto",
    ];
    const rows = filteredData.map((e) => [
      e.parlamentar,
      e.partido,
      e.valorProposto.toString(),
      e.estrutura,
      e.origem,
      `"${e.objeto}"`,
    ]);
    const csv = [headers.join(";"), ...rows.map((r) => r.join(";"))].join("\n");
    const blob = new Blob(["\uFEFF" + csv], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "emendas_2025.csv";
    link.click();
    URL.revokeObjectURL(url);
  }, [filteredData]);

  const totalValor = filteredData.reduce((s, e) => s + e.valorProposto, 0);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* ─── HEADER ─── */}
      <header className="sticky top-0 z-40 bg-sidebar text-sidebar-foreground">
        <div className="flex h-16 items-center gap-4 px-5 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent shadow-lg shadow-accent/30">
              <Landmark className="h-5 w-5 text-accent-foreground" />
            </div>
            <div>
              <h1 className="text-[20px] font-extrabold tracking-tight text-sidebar-accent-foreground">
                Emendas Parlamentares
              </h1>
              <p className="text-[12px] font-medium text-sidebar-foreground/60">
                Painel Executivo · Teresópolis/RJ
              </p>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-[11px] font-medium text-sidebar-foreground/60">
              <Calendar className="h-3.5 w-3.5" />
              <span className="text-xs font-bold text-sidebar-accent-foreground">
                2025
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 rounded-full bg-sidebar-accent px-3.5 py-1.5">
              <TrendingUp className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-bold text-sidebar-accent-foreground">
                {formatBRL(totalValor)}
              </span>
            </div>
            <button
              onClick={() => {
                handleExportCSV();
              }}
              className="hidden sm:flex items-center gap-2 rounded-full bg-sidebar-accent px-3.5 py-1.5"
            >
              <span className="text-xs font-bold text-sidebar-accent-foreground">
                Download em CSV
              </span>
            </button>
            <a
              href="https://dados.teresopolis.rj.gov.br/dataset/relacao-de-convenios-emendas-parlamentares/resource/3c5683fc-f99d-4597-a2e7-e7cfcd781e2f"
              target="_blank"
              className="hidden sm:flex items-center gap-2 rounded-full bg-sidebar-accent px-3.5 py-1.5"
            >
              <span className="text-xs font-bold text-sidebar-accent-foreground">
                Base de Dados
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* ─── BODY ─── */}
      <div className="flex flex-1">
        {/* Main */}
        <main className="flex-1 min-w-0 p-5 lg:p-8 space-y-6 max-w-[2440px]">
          <KPICards data={filteredData} />

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">
            <div className="xl:col-span-3">
              <TopParlamentaresChart data={filteredData} />
            </div>
            <div className="xl:col-span-2">
              <PartidoDonutChart data={filteredData} />
            </div>
          </div>

          <EstruturaChart data={filteredData} />
          <EmendasTable data={filteredData} />
        </main>
      </div>

      <footer className="z-40 mb-10 mt-10 text-sidebar-foreground">
        <div className="flex h-[36px] justify-center items-center gap-4 px-5 lg:px-8">
          <div className="flex items-center gap-3">
            <img src="cie.png" className="h-[80px] w-[200px]" />
            <div>
              <h1 className="text-[16px] font-extrabold tracking-tight">
                Prefeitura Municipal de Teresópolis // 2026
              </h1>
              <p className="text-[12px] font-medium">
                Secretaria Municipal de Ciência e Tecnologia · Departamento de
                Governança e Dados
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
