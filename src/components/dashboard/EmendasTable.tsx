import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpDown, Search } from "lucide-react";
import { Emenda, formatBRL, PARTY_COLORS } from "@/data/emendas";

interface Props {
  data: Emenda[];
}

type SortKey = "parlamentar" | "partido" | "valorProposto" | "estrutura" | "origem";

export function EmendasTable({ data }: Props) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("valorProposto");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortKey(key); setSortDir("desc"); }
  };

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return data
      .filter((e) =>
        e.parlamentar.toLowerCase().includes(q) ||
        e.partido.toLowerCase().includes(q) ||
        e.estrutura.toLowerCase().includes(q) ||
        e.origem.toLowerCase().includes(q) ||
        e.objeto.toLowerCase().includes(q)
      )
      .sort((a, b) => {
        const valA = a[sortKey];
        const valB = b[sortKey];
        const cmp = typeof valA === "number" ? valA - (valB as number) : String(valA).localeCompare(String(valB));
        return sortDir === "asc" ? cmp : -cmp;
      });
  }, [data, search, sortKey, sortDir]);

  const SortHeader = ({ label, field }: { label: string; field: SortKey }) => (
    <TableHead
      className="cursor-pointer select-none hover:text-foreground transition-colors text-xs"
      onClick={() => handleSort(field)}
    >
      <div className="flex items-center gap-1">
        {label}
        <ArrowUpDown className="h-3 w-3 text-muted-foreground" />
      </div>
    </TableHead>
  );

  return (
    <Card className="border-border/50 shadow-sm rounded-2xl overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-sm font-bold tracking-tight">Detalhamento de Emendas</CardTitle>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar emendas..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 h-9 text-sm"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="overflow-x-auto scrollbar-thin max-h-[420px] overflow-y-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <SortHeader label="Parlamentar" field="parlamentar" />
                <SortHeader label="Partido" field="partido" />
                <SortHeader label="Valor" field="valorProposto" />
                <SortHeader label="Estrutura" field="estrutura" />
                <SortHeader label="Origem" field="origem" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((e, i) => (
                <TableRow key={i} className="text-sm">
                  <TableCell className="font-medium max-w-[200px] truncate">{e.parlamentar}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className="text-[10px] font-semibold border-0"
                      style={{
                        backgroundColor: `${PARTY_COLORS[e.partido] || "hsl(215,16%,47%)"}20`,
                        color: PARTY_COLORS[e.partido] || "hsl(215,16%,47%)",
                      }}
                    >
                      {e.partido}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-semibold tabular-nums">{formatBRL(e.valorProposto)}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-[10px]">{e.estrutura}</Badge>
                  </TableCell>
                  <TableCell className="max-w-[180px] truncate text-muted-foreground text-xs">
                    {e.origem}
                  </TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                    Nenhuma emenda encontrada.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
