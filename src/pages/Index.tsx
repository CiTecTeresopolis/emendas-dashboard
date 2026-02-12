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
      <header className="sticky top-0 z-30 border-b bg-card/80 backdrop-blur-md">
        <div className="flex h-14 items-center gap-3 px-4 lg:px-6">
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden h-8 w-8 p-0"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Landmark className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-sm font-bold leading-none">Emendas Parlamentares</h1>
              <p className="text-[10px] text-muted-foreground">Teresópolis/RJ — 2025</p>
            </div>
          </div>
          <div className="ml-auto text-xs text-muted-foreground">
            {filteredData.length} de {emendasData.length} emendas
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:block w-64 shrink-0 border-r bg-card p-4 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto scrollbar-thin">
          <FiltersSidebar filters={filters} onChange={setFilters} onExportCSV={handleExportCSV} />
        </aside>

        {/* Sidebar - Mobile overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
            <aside className="relative z-50 w-72 h-full bg-card p-4 overflow-y-auto shadow-xl">
              <FiltersSidebar filters={filters} onChange={setFilters} onExportCSV={handleExportCSV} />
            </aside>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 min-w-0 p-4 lg:p-6 space-y-6">
          <KPICards data={filteredData} />

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
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
