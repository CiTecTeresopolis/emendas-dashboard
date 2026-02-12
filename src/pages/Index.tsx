import { useState, useMemo, useCallback } from "react";
import { Landmark, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { emendasData, Emenda } from "@/data/emendas";
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
      if (filters.partidos.length > 0 && !filters.partidos.includes(e.partido)) return false;
      if (filters.parlamentares.length > 0 && !filters.parlamentares.includes(e.parlamentar)) return false;
      if (e.valorProposto < filters.valorRange[0] || e.valorProposto > filters.valorRange[1]) return false;
      return true;
    });
  }, [filters]);

  const handleExportCSV = useCallback(() => {
    const headers = ["Parlamentar", "Partido", "Valor Proposto", "Estrutura", "Origem", "Objeto"];
    const rows = filteredData.map((e) => [
      e.parlamentar,
      e.partido,
      e.valorProposto.toString(),
      e.estrutura,
      e.origem,
      `"${e.objeto}"`,
    ]);
    const csv = [headers.join(";"), ...rows.map((r) => r.join(";"))].join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "emendas_2025.csv";
    link.click();
    URL.revokeObjectURL(url);
  }, [filteredData]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border/50 bg-card/60 backdrop-blur-xl">
        <div className="flex h-16 items-center gap-3 px-4 lg:px-6">
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden h-9 w-9 p-0"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[hsl(196,53%,60%)] shadow-md shadow-primary/25">
              <Landmark className="h-4.5 w-4.5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-base font-extrabold tracking-tight leading-none">Emendas Parlamentares</h1>
              <p className="text-[11px] text-muted-foreground font-medium">Teresópolis/RJ — Painel Executivo 2025</p>
            </div>
          </div>
          <div className="ml-auto">
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {filteredData.length} de {emendasData.length} emendas
            </span>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:block w-[270px] shrink-0 border-r border-border/50 bg-card/50 backdrop-blur-sm p-5 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto scrollbar-thin">
          <FiltersSidebar filters={filters} onChange={setFilters} onExportCSV={handleExportCSV} />
        </aside>

        {/* Sidebar - Mobile overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
            <aside className="relative z-50 w-72 h-full bg-card p-5 overflow-y-auto shadow-2xl">
              <FiltersSidebar filters={filters} onChange={setFilters} onExportCSV={handleExportCSV} />
            </aside>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 min-w-0 p-4 lg:p-6 space-y-5">
          <KPICards data={filteredData} />

          <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            <TopParlamentaresChart data={filteredData} />
            <PartidoDonutChart data={filteredData} />
          </div>

          <EstruturaChart data={filteredData} />

          <EmendasTable data={filteredData} />
        </main>
      </div>
    </div>
  );
};

export default Index;
