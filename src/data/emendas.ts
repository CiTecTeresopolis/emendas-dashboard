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
  // 2025
  { origem: "Ministério do Turismo", parlamentar: "Deputado Federal Max Lemos", partido: "PDT", programa: "Fomento a Eventos Turísticos - Emendas Parlamentares de Comissao -RP8", proposta: "48043", valorProposto: 304647, contrapartida: 0, anoVigencia: 2025, objeto: "Contratação de um atração artística para a realização das festas de final de ano no Município de Teresópolis/RJ", estrutura: "Turismo" },
  { origem: "Ministério da Educação - Fundo Nacional de Desenvolvimento da Educação", parlamentar: "Senador Carlos Portinho", partido: "PL", programa: "Programa SIMEC/PAR", proposta: "68187", valorProposto: 500000, contrapartida: 0, anoVigencia: 2025, objeto: "Aquisição de mobiliario escolar", estrutura: "Educação" },
  { origem: "Ministério do Esporte", parlamentar: "Deputado Federal Bebeto", partido: "PP", programa: "Apoio a Implantação e Modernização de Infraestrutura para Esporte Amador, Educacional, Recreativo e de Lazer -SNEAELIS (Emenda de Comissão - RP8)", proposta: "68157", valorProposto: 3000000, contrapartida: 0, anoVigencia: 2025, objeto: "Ampliação, modificação e recuperação do Ginásio de Esporte e da Vila Olímpica no Município de Teresópolis/RJ", estrutura: "Esporte e Lazer" },
  { origem: "Ministério do Esporte", parlamentar: "Deputado Federal Hugo Leal", partido: "PSD", programa: "Apoio a Implantação e Modernizacao de Infraestrutura para Esporte Amador, Educacional, Recreativo e de Lazer -SNEAELIS (Emenda Parlamentar Individual - RP6)", proposta: "29663", valorProposto: 490000, contrapartida: 0, anoVigencia: 2025, objeto: "Aquisição e Instalação de Equipamentos Esportivos e Playgrounds no município de Teresópolis/RJ", estrutura: "Turismo" },
  { origem: "Ministério da Integração e do Desenvolvimento Regional", parlamentar: "Deputado Federal Hugo Leal", partido: "PSD", programa: "Gestão de Riscos e de Desastres", proposta: "62375", valorProposto: 1000000, contrapartida: 0, anoVigencia: 2025, objeto: "Aquisição de equipamentos para Secretaria Municipal de Defesa Civil do Município de Teresópolis/RJ", estrutura: "Defesa Civil" },
  { origem: "Ministério do Esporte", parlamentar: "Senador Carlos Portinho", partido: "PL", programa: "Apoio a Implantação e Modernização de Infraestrutura para Esporte Amador, Educacional, Recreativo e de Lazer -SNEAELIS (Emenda Parlamentar Individual - RP6)", proposta: "29289", valorProposto: 1432500, contrapartida: 0, anoVigencia: 2025, objeto: "Construção do Espaço Esportivo Comunitário, no Munícipio de Teresópolis/RJ.", estrutura: "Esporte e Lazer" },
  { origem: "Ministério da Integração e do Desenvolvimento Regional", parlamentar: "Deputado Federal Marcelo Crivella", partido: "REPUBLICANOS", programa: "Apoio a Projetos de Desenvolvimento Sustentável Local Integrado - RP8 - Emenda de Comissão - Equipamentos e Obras - CINDRE", proposta: "57664", valorProposto: 716250, contrapartida: 0, anoVigencia: 2025, objeto: "Aquisição de máquina e equipamentos para apoio à infraestrutura produtiva.", estrutura: "Agricultura" },
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
  // 2024
  {
    "origem": "Fundo Municipal de Saúde do Município de Teresópolis",
    "parlamentar": "Deputada Federal Chris Tonietto",
    "partido": "PL",
    "programa": "Habilita o Estado, Município ou Distrito Federal a receber recursos referentes ao incremento temporário da Média e Alta Complexidade ao custeio dos serviços de Atenção Especializada à Saúde.",
    "proposta": "36000639234202400",
    "valorProposto": 1605337.0,
    "contrapartida": 0.0,
    "anoVigencia": 2024,
    "objeto": "Habilita o Estado, Município ou Distrito Federal a receber recursos referentes ao incremento temporário da Média e Alta Complexidade ao custeio dos serviços de Atenção Especializada à Saúde.",
    "estrutura": "Saúde"
  },
  {
    "origem": "Fundo Municipal de Saúde do Município de Teresópolis",
    "parlamentar": "Deputado Federal Helio Lopes",
    "partido": "PL",
    "programa": "Habilita o Município ou Distrito Federal a receber recursos referentes ao incremento temporário ao custeio dos serviços de Atenção Primária à Saúde.",
    "proposta": "36000639703202400",
    "valorProposto": 500000.0,
    "contrapartida": 0.0,
    "anoVigencia": 2024,
    "objeto": "Habilita o Município ou Distrito Federal a receber recursos referentes ao incremento temporário ao custeio dos serviços de Atenção Primária à Saúde.",
    "estrutura": "Saúde"
  },
  {
    "origem": "Fundo Municipal de Saúde do Município de Teresópolis",
    "parlamentar": "Deputado Federal Helio Lopes",
    "partido": "PL",
    "programa": "Habilita o Estado, Município ou Distrito Federal a receber recursos referentes ao incremento temporário da Média e Alta Complexidade ao custeio dos serviços de Atenção Especializada à Saúde.",
    "proposta": "36000638812202400",
    "valorProposto": 448408.0,
    "contrapartida": 0.0,
    "anoVigencia": 2024,
    "objeto": "Habilita o Estado, Município ou Distrito Federal a receber recursos referentes ao incremento temporário da Média e Alta Complexidade ao custeio dos serviços de Atenção Especializada à Saúde.",
    "estrutura": "Saúde"
  },
  {
    "origem": "Fundo Municipal de Saúde do Município de Teresópolis",
    "parlamentar": "Deputado Federal Marcelo Crivella",
    "partido": "REPUBLICANOS",
    "programa": "Habilita o Estado, Município ou Distrito Federal a receber recursos destinados à aquisição de equipamentos e materiais permanentes para estabelecimentos de saúde.",
    "proposta": "91127424011",
    "valorProposto": 3000000.0,
    "contrapartida": 0.0,
    "anoVigencia": 2024,
    "objeto": "Habilita o Estado, Município ou Distrito Federal a receber recursos destinados à aquisição de equipamentos e materiais permanentes para estabelecimentos de saúde.",
    "estrutura": "Saúde"
  },
  {
    "origem": "Fundo Municipal de Saúde do Município de Teresópolis",
    "parlamentar": "Emenda de Bancada (Coletivas)",
    "partido": "BANCADA",
    "programa": "Habilita o Estado, Município ou Distrito Federal a receber recursos referentes ao incremento temporário da Média e Alta Complexidade ao custeio dos serviços de Atenção Especializada à Saúde.",
    "proposta": "36000582168202400",
    "valorProposto": 1100000.0,
    "contrapartida": 0.0,
    "anoVigencia": 2024,
    "objeto": "Habilita o Estado, Município ou Distrito Federal a receber recursos referentes ao incremento temporário da Média e Alta Complexidade ao custeio dos serviços de Atenção Especializada à Saúde.",
    "estrutura": "Saúde"
  },
  // 2023
  { origem: "Ministério da Integração e do Desenvolvimento Regional", parlamentar: "Deputado Federal Hugo Leal", partido: "PSD", programa: "Construção de Galpão Agrícola", proposta: "Indefinido", valorProposto: 960109, contrapartida: 9700, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Agricultura" },
  { origem: "Ministério da Integração e do Desenvolvimento Regional", parlamentar: "Deputada Federal Rosângela Gomes", partido: "REPUBLICANOS", programa: "Usina de Reciclagem: britador de mandibula, caminhão trucado, retroescavadeira", proposta: "Indefinido", valorProposto: 1623500, contrapartida: 334000, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Serviços Públicos" },
  { origem: "Ministério da Integração e do Desenvolvimento Regional", parlamentar: "Deputada Federal Rosângela Gomes", partido: "REPUBLICANOS", programa: "Patrulha Mecanizada: escavadeira", proposta: "Indefinido", valorProposto: 859500, contrapartida: 870, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Serviços Públicos" },
  { origem: "Ministério da Integração e do Desenvolvimento Regional", parlamentar: "Deputado Federal Lourival Gomes", partido: "PP", programa: "Implementos Agrícolas", proposta: "Indefinido", valorProposto: 191000, contrapartida: 11207.5, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Agricultura" },
  { origem: "Ministério da Integração e do Desenvolvimento Regional", parlamentar: "Deputado Federal Hugo Leal", partido: "PSD", programa: "Equipamentos Agrícolas: motoniveladora, trator 4x4", proposta: "Indefinido", valorProposto: 955000, contrapartida: 50000, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Agricultura" },
  { origem: "Ministério da Integração e do Desenvolvimento Regional", parlamentar: "Deputado Federal Laterça", partido: "PP", programa: "Aquisição de máquinas: retroescavadeira", proposta: "Indefinido", valorProposto: 286500, contrapartida: 3000, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Serviços Públicos" },
  { origem: "Ministério do Turismo", parlamentar: "Deputado Federal Sóstenes", partido: "PL", programa: "Realização do Natal Cultural de Teresópolis", proposta: "Indefinido", valorProposto: 1600000, contrapartida: 24365.5, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Turismo" },
  { origem: "Ministério do Turismo", parlamentar: "Deputado Federal Hugo Leal", partido: "PSD", programa: "Realização do Carnaval 2020", proposta: "Indefinido", valorProposto: 483252.53, contrapartida: 5042.97, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Turismo" },
  { origem: "Ministério do Esporte", parlamentar: "Deputado Federal Hugo Leal", partido: "PSD", programa: "Realização do evento Esportes Radicais", proposta: "Indefinido", valorProposto: 300000, contrapartida: 585.69, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Esporte" },
  { origem: "Ministério do Esporte", parlamentar: "Senador Romário", partido: "PL", programa: "Implantação do Programa de Integração Paradesportiva", proposta: "Indefinido", valorProposto: 698169.38, contrapartida: 1362.53, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Esporte" },
  { origem: "Ministério do Esporte", parlamentar: "Deputado Federal Hugo Leal", partido: "PSD", programa: "Academia ao Ar Livre", proposta: "Indefinido", valorProposto: 300000, contrapartida: 3002, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Esporte" },
  { origem: "Ministério do Esporte", parlamentar: "Deputado Federal Hugo Leal", partido: "PSD", programa: "Academia ao Ar Livre e Parques Adaptados", proposta: "Indefinido", valorProposto: 300000, contrapartida: 1034.68, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Esporte" },
  { origem: "Ministério da Integração e do Desenvolvimento Regional", parlamentar: "Deputado Federal Hugo Leal", partido: "PSD", programa: "Adequação de Calçadas Públicas: Calçadas acessíveis", proposta: "Indefinido", valorProposto: 477500, contrapartida: 477.98, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Serviços Públicos" },
  { origem: "Ministério do Esporte", parlamentar: "Deputado  Federal Hugo Leal", partido: "PSD", programa: "Reforma do Ginásio Pedro Jahara - Pedrão", proposta: "Indefinido", valorProposto: 1910000, contrapartida: 20000, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Esporte" },
  { origem: "Indefinido", parlamentar: "Deputado Federal Paulo Ganime", partido: "NOVO", programa: "Espaço Empreendedor Itinerante: aquisição de van e equipamentos", proposta: "Indefinido", valorProposto: 244665.65, contrapartida: 2573.45, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Trabalho" },
  { origem: "Ministério da Justiça e Segurnça Pública", parlamentar: "Deputado Federal Hugo Leal", partido: "PSD", programa: "Equipamentos de Segurança: viaturas, rádio comunicação e equipamentos de informática", proposta: "Indefinido", valorProposto: 990000, contrapartida: 66361.17, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Segurança Pública" },
  { origem: "Ministério da Justiça e Segurnça Pública", parlamentar: "Deputado Federal Paulo Ganime", partido: "NOVO", programa: "CICOP - Centro Integrado de Comando e Operações", proposta: "Indefinido", valorProposto: 964413.78, contrapartida: 12117.65, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Segurança Pública" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Alessandro Molon", partido: "PSB", programa: "Indefinido", proposta: "Indefinido", valorProposto: 99944, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Hugo Leal", partido: "PSD", programa: "Indefinido", proposta: "Indefinido", valorProposto: 1000000, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputada Federal Chris Tonietto", partido: "PL", programa: "Indefinido", proposta: "Indefinido", valorProposto: 100000, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Rodrigo Maia", partido: "PSDB", programa: "Indefinido", proposta: "Indefinido", valorProposto: 900000, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Hugo Leal", partido: "PSD", programa: "Indefinido", proposta: "Indefinido", valorProposto: 900000, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Christino Áureo", partido: "PP", programa: "Indefinido", proposta: "Indefinido", valorProposto: 234807, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Alessandro Molon", partido: "PSB", programa: "Indefinido", proposta: "Indefinido", valorProposto: 99917, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Relator Geral", partido: "BANCADA", programa: "Indefinido", proposta: "Indefinido", valorProposto: 285654, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Emenda de Bancada (Coletivas)", partido: "BANCADA", programa: "Indefinido", proposta: "Indefinido", valorProposto: 1840000, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Emenda de Bancada (Coletivas)", partido: "BANCADA", programa: "Indefinido", proposta: "Indefinido", valorProposto: 2154986, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Hugo Leal", partido: "PSD", programa: "Indefinido", proposta: "Indefinido", valorProposto: 400000, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Senador Carlos Portinho", partido: "PL", programa: "Indefinido", proposta: "Indefinido", valorProposto: 942099, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Hugo Leal", partido: "PSD", programa: "Indefinido", proposta: "Indefinido", valorProposto: 1500000, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Professor Josiel", partido: "PATRI", programa: "Indefinido", proposta: "Indefinido", valorProposto: 1499913, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Emenda de Bancada (Coletivas)", partido: "BANCADA", programa: "Indefinido", proposta: "Indefinido", valorProposto: 279360, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Senador Carlos Portinho", partido: "PL", programa: "Indefinido", proposta: "Indefinido", valorProposto: 1056000, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Paulo Ramos", partido: "PDT", programa: "Indefinido", proposta: "Indefinido", valorProposto: 20683, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Emenda de Bancada (Coletivas)", partido: "BANCADA", programa: "Indefinido", proposta: "Indefinido", valorProposto: 1056000, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Emenda de Bancada (Coletivas)", partido: "BANCADA", programa: "Indefinido", proposta: "Indefinido", valorProposto: 141318, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Emenda de Bancada (Coletivas)", partido: "BANCADA", programa: "Indefinido", proposta: "Indefinido", valorProposto: 2700000, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Rodrigo Maia", partido: "PSDB", programa: "Indefinido", proposta: "Indefinido", valorProposto: 324799, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputada Federal Rosângela Gomes", partido: "REPUBLICANOS", programa: "Indefinido", proposta: "Indefinido", valorProposto: 300000, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Márcio Labre", partido: "PL", programa: "Indefinido", proposta: "Indefinido", valorProposto: 2000000, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Hugo Leal", partido: "PSD", programa: "Indefinido", proposta: "Indefinido", valorProposto: 3500000, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Emenda de Bancada (Coletivas)", partido: "BANCADA", programa: "Indefinido", proposta: "Indefinido", valorProposto: 1000000, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Márcio Labre", partido: "PL", programa: "Indefinido", proposta: "Indefinido", valorProposto: 2200000, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Relator Geral", partido: "BANCADA", programa: "Indefinido", proposta: "Indefinido", valorProposto: 400000, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Senador Romário", partido: "PL", programa: "Indefinido", proposta: "Indefinido", valorProposto: 1000000, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Senador Carlos Portinho", partido: "PL", programa: "Indefinido", proposta: "Indefinido", valorProposto: 1000000, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Chiquinho Brazão", partido: "UNIÃO", programa: "Indefinido", proposta: "Indefinido", valorProposto: 500000, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Luiz Antônio Corrêa", partido: "PP", programa: "Indefinido", proposta: "Indefinido", valorProposto: 3000000, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado  Federal Chiquinho Brazão", partido: "UNIÃO", programa: "Indefinido", proposta: "Indefinido", valorProposto: 132618, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" },
  { origem: "Ministério da Saúde", parlamentar: "Deputado Federal Chiquinho Brazão", partido: "UNIÃO", programa: "Indefinido", proposta: "Indefinido", valorProposto: 367382, contrapartida: 0, anoVigencia: 2023, objeto: "Indefinido", estrutura: "Saúde" }
];

export const availableYears = Array.from(
  new Set(emendasData.map((e) => e.anoVigencia))
).sort((a, b) => b - a);


export const formatBRL = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  }).format(value);
};

export const formatBRLCompact = (value: number): string => {
  if (value >= 1_000_000) return `R$ ${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `R$ ${(value / 1_000).toFixed(0)}K`;
  return formatBRL(value);
};

export const PARTY_COLORS: Record<string, string> = {
  PL: "hsl(199, 72%, 44%)",
  PSD: "hsl(45, 100%, 50%)",
  PP: "hsl(27, 97%, 49%)",
  PDT: "hsl(196, 53%, 55%)",
  SOLIDARIEDADE: "hsl(201, 95%, 14%)",
  UNIAO: "hsl(162, 60%, 40%)",
  BANCADA: "hsl(201, 30%, 40%)",
  REPUBLICANOS: "hsl(27, 80%, 60%)",
  PODEMOS: "hsl(199, 50%, 60%)",
  MDB: "hsl(45, 80%, 65%)",
  "PC DO B": "hsl(0, 60%, 50%)",
};

export const CHART_COLORS = [
  "hsl(199, 72%, 44%)",
  "hsl(93, 100%, 27%)",
  "hsl(27, 97%, 49%)",
  "hsl(196, 53%, 70%)",
  "hsl(201, 95%, 14%)",
  "hsl(0, 60%, 50%)",
  "hsl(199, 50%, 60%)",
  "hsl(45, 80%, 65%)",
  "hsl(162, 60%, 40%)",
  "hsl(27, 80%, 60%)",
];
