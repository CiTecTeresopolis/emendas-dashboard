import { useMemo } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RotateCcw, Filter, Download } from "lucide-react";
import { emendasData, formatBRLCompact } from "@/data/emendas";

export interface Filters {
  partidos: string[];
  parlamentares: string[];
  valorRange: [number, number];
}

interface Props {
  filters: Filters;
  onChange: (f: Filters) => void;
  onExportCSV: () => void;
}

export function FiltersSidebar({ filters, onChange, onExportCSV }: Props) {
  const allPartidos = useMemo(() => [...new Set(emendasData.map((e) => e.partido))].sort(), []);
  const allParlamentares = useMemo(() => [...new Set(emendasData.map((e) => e.parlamentar))].sort(), []);
  const maxValue = useMemo(() => Math.max(...emendasData.map((e) => e.valorProposto)), []);

  const togglePartido = (p: string) => {
    const next = filters.partidos.includes(p)
      ? filters.partidos.filter((x) => x !== p)
      : [...filters.partidos, p];
    onChange({ ...filters, partidos: next });
  };

  const toggleParlamentar = (p: string) => {
    const next = filters.parlamentares.includes(p)
      ? filters.parlamentares.filter((x) => x !== p)
      : [...filters.parlamentares, p];
    onChange({ ...filters, parlamentares: next });
  };

  const reset = () => onChange({ partidos: [], parlamentares: [], valorRange: [0, maxValue] });

  return (
    <aside className="w-full space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold">Filtros</h2>
        </div>
        <Button variant="ghost" size="sm" onClick={reset} className="h-7 px-2 text-xs text-muted-foreground">
          <RotateCcw className="h-3 w-3 mr-1" /> Limpar
        </Button>
      </div>

      {/* Partidos */}
      <div className="space-y-2">
        <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Partido</Label>
        <ScrollArea className="h-36">
          <div className="space-y-1.5 pr-3">
            {allPartidos.map((p) => (
              <label key={p} className="flex items-center gap-2 cursor-pointer text-sm hover:text-foreground text-muted-foreground transition-colors">
                <Checkbox
                  checked={filters.partidos.includes(p)}
                  onCheckedChange={() => togglePartido(p)}
                  className="h-3.5 w-3.5"
                />
                {p}
              </label>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Parlamentares */}
      <div className="space-y-2">
        <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Parlamentar</Label>
        <ScrollArea className="h-44">
          <div className="space-y-1.5 pr-3">
            {allParlamentares.map((p) => (
              <label key={p} className="flex items-center gap-2 cursor-pointer text-sm hover:text-foreground text-muted-foreground transition-colors">
                <Checkbox
                  checked={filters.parlamentares.includes(p)}
                  onCheckedChange={() => toggleParlamentar(p)}
                  className="h-3.5 w-3.5"
                />
                <span className="truncate">{p}</span>
              </label>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Valor Range */}
      <div className="space-y-3">
        <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Faixa de Valor</Label>
        <Slider
          min={0}
          max={maxValue}
          step={10000}
          value={filters.valorRange}
          onValueChange={(v) => onChange({ ...filters, valorRange: v as [number, number] })}
          className="py-1"
        />
        <div className="flex justify-between text-[10px] text-muted-foreground">
          <span>{formatBRLCompact(filters.valorRange[0])}</span>
          <span>{formatBRLCompact(filters.valorRange[1])}</span>
        </div>
      </div>

      {/* Export */}
      <Button variant="outline" size="sm" className="w-full text-xs" onClick={onExportCSV}>
        <Download className="h-3.5 w-3.5 mr-1.5" /> Exportar CSV
      </Button>
    </aside>
  );
}
