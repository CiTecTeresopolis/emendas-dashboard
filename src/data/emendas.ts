export interface Emenda {
  origem: string;
  parlamentar: string;
  partido: string;
  programa: string;
  proposta: string;
  valorProposto: number;
  contrapartida: number;
  anoVigencia: number;
  objeto: string;
  estrutura: string;
}

export const emendasData: Emenda[] = [
  { origem: "Ministério do Turismo", parlamentar: "Deputado Federal Max Lemos", partido: "PDT", programa: "Fomento a Eventos Turísticos - Emendas Parlamentares de Comissao -RP8", proposta: "48043", valorProposto: 304647, contrapartida: 0, anoVigencia: 2025, objeto: "Contratação de um atração artística para a realização das festas de final de ano no Município de Teresópolis/RJ", estrutura: "Turismo" },
  { origem: "Ministério da Educação - Fundo Nacional de Desenvolvimento da Educação", parlamentar: "Senador Carlos Portinho", partido: "PL", programa: "Programa SIMEC/PAR", proposta: "68187", valorProposto: 500000, contrapartida: 0, anoVigencia: 2025, objeto: "Aquisição de mobiliario escolar", estrutura: "Educação" },
  { origem: "Ministério do Esporte", parlamentar: "Deputado Federal Bebeto", partido: "PP", programa: "Apoio a Implantação e Modernização de Infraestrutura para Esporte Amador, Educacional, Recreativo e de Lazer -SNEAELIS (Emenda de Comissão - RP8)", proposta: "68157", valorProposto: 3000000, contrapartida: 0, anoVigencia: 2025, objeto: "Ampliação, modificação e recuperação do Ginásio de Esporte e da Vila Olímpica no Município de Teresópolis/RJ", estrutura: "Esporte e Lazer" },
  { origem: "Ministério do Esporte", parlamentar: "Deputado Federal Hugo Leal", partido: "PSD", programa: "Apoio a Implantação e Modernizacao de Infraestrutura para Esporte Amador, Educacional, Recreativo e de Lazer -SNEAELIS (Emenda Parlamentar Individual - RP6)", proposta: "29663", valorProposto: 490000, contrapartida: 0, anoVigencia: 2025, objeto: "Aquisição e Instalação de Equipamentos Esportivos e Playgrounds no município de Teresópolis/RJ", estrutura: "Turismo" },
  { origem: "Ministério da Integração e do Desenvolvimento Regional", parlamentar: "Deputado Federal Hugo Leal", partido: "PSD", programa: "Gestão de Riscos e de Desastres", proposta: "62375", valorProposto: 1000000, contrapartida: 0, anoVigencia: 2025, objeto: "Aquisição de equipamentos para Secretaria Municipal de Defesa Civil do Município de Teresópolis/RJ", estrutura: "Defesa Civil" },
  { origem: "Ministério do Esporte", parlamentar: "Senador Carlos Portinho", partido: "PL", programa: "Apoio a Implantação e Modernização de Infraestrutura para Esporte Amador, Educacional, Recreativo e de Lazer -SNEAELIS (Emenda Parlamentar Individual - RP6)", proposta: "29289", valorProposto: 1432500, contrapartida: 0, anoVigencia: 2025, objeto: "Construção do Espaço Esportivo Comunitário, no Munícipio de Teresópolis/RJ.", estrutura: "Esporte e Lazer" },
  { origem: "Ministério da Integração e do Desenvolvimento Regional", parlamentar: "Deputado Federal Marcelo Crivella", partido: "REPUBLICANOS", programa: "Apoio a Projetos de Desenvolvimento Sustentável Local Integrado - RP8 - Emenda de Comissão - Equipamentos e Obras - CINDRE", proposta: "57664", valorProposto: 716250, contrapartida: 0, anoVigencia: 2025, objeto: "Aquisição de máquina e equipamentos para apoio à infraestrutura produtiva.", estrutura: "Agricultura e Desenvolvimento Rural" },
  { origem: "Ministério da Saúde", parlamentar: "Emenda de Bancada (Coletivas)", partido: "BANCADA", programa: "Incremento temporário da Média e Alta Complexidade", proposta: "36000698776202500", valorProposto: 500000, contrapartida: 0, anoVigencia: 2025, objeto: "Incremento temporário da Média e Alta Complexidade ao custeio dos serviços de Atenção Especializada à Saúde.", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Emenda de Bancada (Coletivas)", partido: "BANCADA", programa: "Incremento temporário da Média e Alta Complexidade", proposta: "36000695546202500", valorProposto: 11837566, contrapartida: 0, anoVigencia: 2025, objeto: "Incremento temporário da Média e Alta Complexidade ao custeio dos serviços de Atenção Especializada à Saúde.", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Sargento Portugal", partido: "PODEMOS", programa: "Incremento temporário da Média e Alta Complexidade", proposta: "36000669525202500", valorProposto: 1600000, contrapartida: 0, anoVigencia: 2025, objeto: "Incremento temporário da Média e Alta Complexidade ao custeio dos serviços de Atenção Especializada à Saúde.", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Roberto Monteiro Pai", partido: "PL", programa: "Incremento temporário da Média e Alta Complexidade", proposta: "36000669424202500", valorProposto: 2000000, contrapartida: 0, anoVigencia: 2025, objeto: "Incremento temporário da Média e Alta Complexidade ao custeio dos serviços de Atenção Especializada à Saúde.", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Marcos Soares", partido: "UNIAO", programa: "Incremento temporário da Média e Alta Complexidade", proposta: "36000669591202500", valorProposto: 2000000, contrapartida: 0, anoVigencia: 2025, objeto: "Incremento temporário da Média e Alta Complexidade ao custeio dos serviços de Atenção Especializada à Saúde.", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Aureo Ribeiro", partido: "SOLIDARIEDADE", programa: "Incremento temporário da Média e Alta Complexidade", proposta: "36000669260202500", valorProposto: 1500000, contrapartida: 0, anoVigencia: 2025, objeto: "Incremento temporário da Média e Alta Complexidade ao custeio dos serviços de Atenção Especializada à Saúde.", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Bebeto", partido: "PP", programa: "Incremento temporário da Média e Alta Complexidade", proposta: "36000669392202500", valorProposto: 1000000, contrapartida: 0, anoVigencia: 2025, objeto: "Incremento temporário da Média e Alta Complexidade ao custeio dos serviços de Atenção Especializada à Saúde.", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputada Federal Soraya Santos", partido: "PL", programa: "Incremento temporário da Média e Alta Complexidade", proposta: "36000669488202500", valorProposto: 500000, contrapartida: 0, anoVigencia: 2025, objeto: "Incremento temporário da Média e Alta Complexidade ao custeio dos serviços de Atenção Especializada à Saúde.", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Hugo Leal", partido: "PSD", programa: "Incremento temporário ao custeio da Atenção Primária à Saúde", proposta: "36000682206202500", valorProposto: 1000000, contrapartida: 0, anoVigencia: 2025, objeto: "Incremento temporário ao custeio dos serviços de Atenção Primária à Saúde.", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Murillo Gouvea", partido: "UNIAO", programa: "Incremento temporário ao custeio da Atenção Primária à Saúde", proposta: "36000682303202500", valorProposto: 1000000, contrapartida: 0, anoVigencia: 2025, objeto: "Incremento temporário ao custeio dos serviços de Atenção Primária à Saúde.", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Gutemberg Reis", partido: "MDB", programa: "Incremento temporário ao custeio da Atenção Primária à Saúde", proposta: "36000669226202500", valorProposto: 300000, contrapartida: 0, anoVigencia: 2025, objeto: "Incremento temporário ao custeio dos serviços de Atenção Primária à Saúde.", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Emenda de Comissão (Coletivas)", partido: "BANCADA", programa: "Incremento temporário ao custeio da Atenção Primária à Saúde", proposta: "36000698847202500", valorProposto: 7292877, contrapartida: 0, anoVigencia: 2025, objeto: "Incremento temporário ao custeio dos serviços de Atenção Primária à Saúde.", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Emenda de Bancada (Coletivas)", partido: "BANCADA", programa: "Incremento temporário ao custeio da Atenção Primária à Saúde", proposta: "36000698791202500", valorProposto: 5511398, contrapartida: 0, anoVigencia: 2025, objeto: "Incremento temporário ao custeio dos serviços de Atenção Primária à Saúde.", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Aureo Ribeiro", partido: "SOLIDARIEDADE", programa: "Incremento temporário ao custeio da Atenção Primária à Saúde", proposta: "36000682315202500", valorProposto: 500000, contrapartida: 0, anoVigencia: 2025, objeto: "Incremento temporário ao custeio dos serviços de Atenção Primária à Saúde.", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputada Federal Jandira Feghali", partido: "PC DO B", programa: "Incremento temporário ao custeio da Atenção Primária à Saúde", proposta: "63000676910202500", valorProposto: 1160000, contrapartida: 0, anoVigencia: 2025, objeto: "Incremento temporário ao custeio dos serviços de Atenção Primária à Saúde.", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Aureo Ribeiro", partido: "SOLIDARIEDADE", programa: "Incremento temporário da Média e Alta Complexidade", proposta: "63000690628202500", valorProposto: 1000000, contrapartida: 0, anoVigencia: 2025, objeto: "Incremento temporário da Média e Alta Complexidade ao custeio dos serviços de Atenção Especializada à Saúde.", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Aureo Ribeiro", partido: "SOLIDARIEDADE", programa: "Incremento temporário da Média e Alta Complexidade", proposta: "63000687961202500", valorProposto: 5000000, contrapartida: 0, anoVigencia: 2025, objeto: "Incremento temporário da Média e Alta Complexidade ao custeio dos serviços de Atenção Especializada à Saúde.", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Max Lemos", partido: "PDT", programa: "Aquisição de equipamentos e materiais permanentes para saúde", proposta: "11274201000125000", valorProposto: 299000, contrapartida: 0, anoVigencia: 2025, objeto: "Aquisição de equipamentos e materiais permanentes para estabelecimentos de saúde.", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Marcelo Crivella", partido: "REPUBLICANOS", programa: "Aquisição de equipamentos e materiais permanentes para saúde", proposta: "91127425005", valorProposto: 4829040, contrapartida: 0, anoVigencia: 2025, objeto: "Aquisição de equipamentos e materiais permanentes para estabelecimentos de saúde.", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Senador Flávio Bolsonaro", partido: "PL", programa: "Aquisição de equipamentos e materiais permanentes para saúde", proposta: "91127425006", valorProposto: 1489660, contrapartida: 0, anoVigencia: 2025, objeto: "Aquisição de equipamentos e materiais permanentes para estabelecimentos de saúde.", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Hugo Leal", partido: "PSD", programa: "Aquisição de equipamentos e materiais permanentes para saúde", proposta: "91127425007", valorProposto: 995460, contrapartida: 0, anoVigencia: 2025, objeto: "Aquisição de equipamentos e materiais permanentes para estabelecimentos de saúde.", estrutura: "Saúde" },
];

export const formatBRL = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatBRLCompact = (value: number): string => {
  if (value >= 1_000_000) return `R$ ${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `R$ ${(value / 1_000).toFixed(0)}K`;
  return formatBRL(value);
};

export const PARTY_COLORS: Record<string, string> = {
  PL: "hsl(226, 70%, 55%)",
  PSD: "hsl(173, 58%, 39%)",
  PP: "hsl(43, 96%, 56%)",
  PDT: "hsl(0, 84%, 60%)",
  SOLIDARIEDADE: "hsl(262, 60%, 55%)",
  UNIAO: "hsl(190, 70%, 50%)",
  BANCADA: "hsl(215, 16%, 47%)",
  REPUBLICANOS: "hsl(340, 65%, 55%)",
  PODEMOS: "hsl(30, 80%, 55%)",
  MDB: "hsl(120, 40%, 45%)",
  "PC DO B": "hsl(0, 70%, 45%)",
};

export const CHART_COLORS = [
  "hsl(226, 70%, 55%)",
  "hsl(173, 58%, 39%)",
  "hsl(43, 96%, 56%)",
  "hsl(0, 84%, 60%)",
  "hsl(262, 60%, 55%)",
  "hsl(190, 70%, 50%)",
  "hsl(340, 65%, 55%)",
  "hsl(30, 80%, 55%)",
  "hsl(120, 40%, 45%)",
  "hsl(0, 70%, 45%)",
];
