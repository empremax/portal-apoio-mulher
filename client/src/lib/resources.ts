export type ResourceCategory =
  | "denuncia"
  | "apoio"
  | "capacitacao"
  | "saude"
  | "direitos"
  | "digital";

export interface Resource {
  id: number;
  title: string;
  description: string;
  url: string;
  category: ResourceCategory;
  tags: string[];
  steps?: string[];
  phone?: string;
  isEmergency?: boolean;
}

export const categoryInfo: Record<
  ResourceCategory,
  { label: string; icon: string; color: string; description: string }
> = {
  denuncia: {
    label: "Denúncia e Segurança",
    icon: "Shield",
    color: "terracotta",
    description:
      "Canais para denunciar violência, ameaças e crimes contra a mulher",
  },
  apoio: {
    label: "Apoio Jurídico e Psicológico",
    icon: "Heart",
    color: "rose-soft",
    description:
      "Atendimento gratuito com advogadas, psicólogas e assistentes sociais",
  },
  capacitacao: {
    label: "Capacitação e Educação",
    icon: "GraduationCap",
    color: "olive",
    description:
      "Cursos gratuitos, programas de inclusão e oportunidades de aprendizado",
  },
  saude: {
    label: "Saúde e Bem-estar",
    icon: "HeartPulse",
    color: "warm-brown",
    description:
      "Informações sobre saúde da mulher, direitos reprodutivos e bem-estar",
  },
  direitos: {
    label: "Informação e Direitos",
    icon: "Scale",
    color: "terracotta-dark",
    description:
      "Conheça seus direitos, legislação e órgãos de proteção à mulher",
  },
  digital: {
    label: "Segurança Digital",
    icon: "Smartphone",
    color: "olive-dark",
    description:
      "Proteção online, remoção de conteúdo e denúncia em redes sociais",
  },
};

export const resources: Resource[] = [
  // === DENÚNCIA E SEGURANÇA ===
  {
    id: 1,
    title: "Ligue 180 - Central de Atendimento à Mulher",
    description:
      "Canal gratuito do Governo Federal para denúncias de violência contra a mulher. Funciona 24 horas, todos os dias, inclusive feriados. Atende em português, espanhol e inglês.",
    url: "https://www.gov.br/mulheres/pt-br/central-de-conteudos/ligue-180",
    category: "denuncia",
    tags: ["violência", "denúncia", "emergência", "governo", "180"],
    phone: "180",
    isEmergency: true,
    steps: [
      "Ligue 180 de qualquer telefone (fixo ou celular), gratuitamente",
      "Relate o ocorrido com o máximo de detalhes possível",
      "Solicite orientação ou encaminhamento para a rede de proteção",
      "Se necessário, peça para ser encaminhada à Delegacia da Mulher",
    ],
  },
  {
    id: 2,
    title: "Disque 100 - Direitos Humanos",
    description:
      "Canal para denúncias de violações de direitos humanos, incluindo violência contra mulheres, crianças, idosos e pessoas com deficiência. Funciona 24h.",
    url: "https://www.gov.br/mdh/pt-br/acesso-a-informacao/disque-100",
    category: "denuncia",
    tags: ["direitos humanos", "denúncia", "100", "governo"],
    phone: "100",
    isEmergency: true,
    steps: [
      "Ligue 100 de qualquer telefone, gratuitamente",
      "Informe o tipo de violação que deseja denunciar",
      "Forneça detalhes sobre a vítima e o agressor",
      "Solicite acompanhamento do caso",
    ],
  },
  {
    id: 3,
    title: "Delegacia Eletrônica - Boletim de Ocorrência Online",
    description:
      "Registre um boletim de ocorrência sem sair de casa. Disponível para crimes como ameaça, perseguição, injúria, calúnia e outros delitos.",
    url: "https://delegaciaeletronica.policiacivil.sp.gov.br",
    category: "denuncia",
    tags: ["boletim", "ocorrência", "delegacia", "online", "polícia"],
    steps: [
      "Acesse o site da Delegacia Eletrônica do seu estado",
      "Clique em 'Registrar Ocorrência'",
      "Preencha seus dados pessoais com atenção",
      "Descreva o ocorrido com o máximo de detalhes",
      "Salve o número do B.O. para acompanhamento",
    ],
  },
  {
    id: 4,
    title: "App Penhas - Apoio contra Violência Doméstica",
    description:
      "Aplicativo gratuito que oferece apoio a mulheres em situação de violência doméstica, com chat seguro, rede de acolhimento e informações sobre seus direitos.",
    url: "https://www.penhas.com.br/",
    category: "denuncia",
    tags: ["aplicativo", "violência doméstica", "chat", "apoio"],
    steps: [
      "Baixe o app Penhas na Play Store ou App Store",
      "Crie sua conta de forma segura",
      "Acesse o chat para conversar com especialistas",
      "Use o botão de emergência se precisar de ajuda imediata",
    ],
  },

  // === APOIO JURÍDICO E PSICOLÓGICO ===
  {
    id: 5,
    title: "Mapa do Acolhimento",
    description:
      "Rede de psicólogas e advogadas voluntárias que oferecem atendimento gratuito para mulheres vítimas de violência em todo o Brasil.",
    url: "https://www.mapadoacolhimento.org/",
    category: "apoio",
    tags: ["psicóloga", "advogada", "gratuito", "voluntária", "acolhimento"],
    steps: [
      "Acesse o site do Mapa do Acolhimento",
      "Preencha o formulário de cadastro",
      "Você será conectada a uma profissional voluntária da sua região",
      "O atendimento é totalmente gratuito e sigiloso",
    ],
  },
  {
    id: 6,
    title: "Justiceiras - Força-tarefa Pró-Mulher",
    description:
      "Projeto que oferece apoio jurídico, psicológico e socioassistencial online e gratuito para mulheres em situação de violência.",
    url: "https://www.justiceiras.org.br/",
    category: "apoio",
    tags: ["jurídico", "psicológico", "online", "gratuito", "violência"],
    steps: [
      "Acesse o site das Justiceiras",
      "Clique em 'Peça Ajuda'",
      "Preencha o formulário com sua situação",
      "Uma equipe de voluntárias entrará em contato",
    ],
  },
  {
    id: 7,
    title: "Defensoria Pública da União (DPU)",
    description:
      "Assistência jurídica integral e gratuita para quem não pode pagar advogado. Atende em diversas áreas do direito, incluindo violência doméstica e familiar.",
    url: "https://www.dpu.def.br/",
    category: "apoio",
    tags: ["defensoria", "jurídico", "gratuito", "advogado", "direito"],
    steps: [
      "Procure a unidade da DPU mais próxima de você",
      "Leve documento de identidade e comprovante de renda",
      "Explique sua situação ao defensor público",
      "O atendimento é gratuito para quem comprova necessidade",
    ],
  },
  {
    id: 8,
    title: "PROCON - Proteção ao Consumidor",
    description:
      "Reclamações sobre golpes, cobranças indevidas, produtos com defeito e serviços não prestados. Proteja-se contra fraudes financeiras.",
    url: "https://www.procon.sp.gov.br",
    category: "apoio",
    tags: ["consumidor", "golpe", "reclamação", "cobrança", "fraude"],
    steps: [
      "Reúna comprovantes (notas, prints, contratos)",
      "Acesse o site do PROCON do seu estado",
      "Registre a reclamação online ou presencialmente",
      "Acompanhe o andamento pelo número de protocolo",
    ],
  },

  // === CAPACITAÇÃO E EDUCAÇÃO ===
  {
    id: 9,
    title: "Mulheres Mil - Ministério da Educação",
    description:
      "Programa do governo federal para elevar a escolaridade e promover a inclusão socioprodutiva de mulheres em situação de vulnerabilidade socioeconômica.",
    url: "https://www.gov.br/mec/pt-br/assuntos/ept/mulheres-mil",
    category: "capacitacao",
    tags: ["educação", "governo", "inclusão", "escolaridade", "curso"],
    steps: [
      "Acesse o site do programa Mulheres Mil",
      "Verifique se há turmas abertas na sua região",
      "Faça a inscrição com seus documentos pessoais",
      "Participe das aulas e receba certificado ao final",
    ],
  },
  {
    id: 10,
    title: "Escola Virtual do Governo (ENAP)",
    description:
      "Plataforma com dezenas de cursos gratuitos e com certificado sobre cidadania, direitos, tecnologia, gestão e muito mais.",
    url: "https://www.escolavirtual.gov.br/",
    category: "capacitacao",
    tags: ["curso", "gratuito", "certificado", "online", "governo"],
    steps: [
      "Acesse o site e crie sua conta gratuita",
      "Navegue pelo catálogo de cursos disponíveis",
      "Inscreva-se no curso desejado",
      "Complete as atividades e obtenha seu certificado",
    ],
  },
  {
    id: 11,
    title: "Associação Mulheres pela Paz - Cursos Gratuitos",
    description:
      "Cursos gratuitos de capacitação para mulheres de todo o Brasil, incluindo empreendedorismo, educação financeira e marketing digital.",
    url: "https://mulherespaz.org.br/cursos/",
    category: "capacitacao",
    tags: ["empreendedorismo", "financeiro", "marketing", "gratuito"],
    steps: [
      "Acesse o site da Associação Mulheres pela Paz",
      "Veja os cursos disponíveis",
      "Faça sua inscrição online",
      "Participe das aulas e receba certificado",
    ],
  },
  {
    id: 12,
    title: "Curso: Violência de Gênero - Escola Virtual Gov",
    description:
      "Curso aberto, gratuito e com certificado sobre prevenção à violência de gênero contra mulheres e meninas. Ideal para quem quer entender e combater a violência.",
    url: "https://www.escolavirtual.gov.br/curso/1204",
    category: "capacitacao",
    tags: ["violência", "gênero", "curso", "gratuito", "certificado"],
    steps: [
      "Acesse o link do curso",
      "Faça login ou crie sua conta na Escola Virtual",
      "Inscreva-se no curso",
      "Complete os módulos e obtenha o certificado",
    ],
  },

  // === SAÚDE E BEM-ESTAR ===
  {
    id: 13,
    title: "Saúde da Mulher - Ministério da Saúde",
    description:
      "Portal com informações completas sobre saúde da mulher: exames preventivos, pré-natal, planejamento familiar, saúde mental e direitos reprodutivos.",
    url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-mulher",
    category: "saude",
    tags: ["saúde", "SUS", "preventivo", "pré-natal", "governo"],
    steps: [
      "Acesse o portal do Ministério da Saúde",
      "Navegue pelas informações sobre saúde da mulher",
      "Procure a UBS (Unidade Básica de Saúde) mais próxima",
      "Agende consultas e exames pelo SUS gratuitamente",
    ],
  },
  {
    id: 14,
    title: "CVV - Centro de Valorização da Vida (Ligue 188)",
    description:
      "Apoio emocional e prevenção do suicídio. Atendimento 24 horas por telefone, chat ou e-mail. Totalmente gratuito e sigiloso.",
    url: "https://www.cvv.org.br/",
    category: "saude",
    tags: ["emocional", "suicídio", "apoio", "188", "chat"],
    phone: "188",
    isEmergency: true,
    steps: [
      "Ligue 188 a qualquer hora do dia ou da noite",
      "Ou acesse o chat pelo site do CVV",
      "Converse com um voluntário treinado",
      "O atendimento é sigiloso e sem julgamentos",
    ],
  },
  {
    id: 15,
    title: "Instituto Natura - Direitos e Saúde das Mulheres",
    description:
      "Iniciativas voltadas ao bem-estar feminino, com foco em saúde, educação e empoderamento de mulheres em comunidades vulneráveis.",
    url: "https://www.institutonatura.org/pt-br/direitos-e-saude-das-mulheres/",
    category: "saude",
    tags: ["saúde", "empoderamento", "comunidade", "instituto"],
  },

  // === INFORMAÇÃO E DIREITOS ===
  {
    id: 16,
    title: "ONU Mulheres Brasil",
    description:
      "Entidade das Nações Unidas dedicada à igualdade de gênero e ao empoderamento das mulheres. Notícias, campanhas e recursos sobre direitos femininos.",
    url: "https://www.onumulheres.org.br/",
    category: "direitos",
    tags: ["ONU", "igualdade", "gênero", "empoderamento", "direitos"],
  },
  {
    id: 17,
    title: "Secretaria da Mulher - Câmara dos Deputados",
    description:
      "Informações sobre legislação, como buscar ajuda em caso de violência e a rede de atendimento à mulher no Brasil.",
    url: "https://www2.camara.leg.br/a-camara/estruturaadm/secretarias/secretaria-da-mulher",
    category: "direitos",
    tags: ["legislação", "câmara", "deputados", "rede", "atendimento"],
  },
  {
    id: 18,
    title: "ODS 5 - Igualdade de Gênero (IPEA)",
    description:
      "Página do IPEA sobre o Objetivo de Desenvolvimento Sustentável 5: alcançar a igualdade de gênero e empoderar todas as mulheres e meninas.",
    url: "https://www.ipea.gov.br/ods/ods5.html",
    category: "direitos",
    tags: ["ODS", "igualdade", "gênero", "IPEA", "desenvolvimento"],
  },
  {
    id: 19,
    title: "Lei Maria da Penha - Texto Completo",
    description:
      "Acesse o texto completo da Lei 11.340/2006 (Lei Maria da Penha), que cria mecanismos para coibir a violência doméstica e familiar contra a mulher.",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm",
    category: "direitos",
    tags: ["lei", "Maria da Penha", "violência", "doméstica", "legislação"],
  },

  // === SEGURANÇA DIGITAL ===
  {
    id: 20,
    title: "StopNCII - Remoção de Imagens Íntimas",
    description:
      "Ferramenta global para impedir o compartilhamento de imagens íntimas sem consentimento. Cria um código digital da imagem para bloquear em plataformas.",
    url: "https://stopncii.org",
    category: "digital",
    tags: ["imagem", "íntima", "remoção", "privacidade", "consentimento"],
    steps: [
      "Acesse o site StopNCII.org",
      "Envie a imagem com segurança (não será publicada)",
      "A plataforma cria um código digital (hash) da imagem",
      "Esse código é enviado às plataformas para bloquear o conteúdo",
    ],
  },
  {
    id: 21,
    title: "SaferNet Brasil - Denúncia de Crimes na Internet",
    description:
      "Denuncie de forma anônima crimes como racismo, misoginia, pornografia infantil, exposição íntima e outros delitos cibernéticos.",
    url: "https://new.safernet.org.br/denuncie",
    category: "digital",
    tags: ["internet", "crime", "anônimo", "denúncia", "cibernético"],
    steps: [
      "Copie o link do conteúdo ofensivo",
      "Acesse o site da SaferNet",
      "Cole o link e descreva o problema",
      "Envie a denúncia de forma anônima",
    ],
  },
  {
    id: 22,
    title: "Remover Conteúdo Pessoal do Google",
    description:
      "Solicite a remoção de conteúdos que violam sua privacidade nos resultados de busca do Google, como dados pessoais, imagens íntimas ou informações sensíveis.",
    url: "https://support.google.com/websearch/troubleshooter/3111061",
    category: "digital",
    tags: ["Google", "remoção", "privacidade", "busca", "dados"],
    steps: [
      "Copie o link do conteúdo que deseja remover",
      "Acesse o formulário de remoção do Google",
      "Explique que se trata de violação de privacidade",
      "Envie e acompanhe a resposta por e-mail",
    ],
  },
  {
    id: 23,
    title: "Denunciar no Instagram e Facebook",
    description:
      "Publicações ofensivas, ameaças, perfis falsos ou imagens íntimas podem ser denunciados diretamente nas plataformas da Meta.",
    url: "https://help.instagram.com/165828726894770",
    category: "digital",
    tags: ["Instagram", "Facebook", "rede social", "denúncia", "perfil falso"],
    steps: [
      "Abra a publicação ou perfil ofensivo",
      "Clique nos três pontos (...)",
      "Escolha 'Denunciar'",
      "Informe o motivo corretamente e envie",
    ],
  },
  {
    id: 24,
    title: "Denunciar no WhatsApp",
    description:
      "Perfis que ameaçam, assediam ou enviam conteúdo impróprio podem ser denunciados e bloqueados diretamente no WhatsApp.",
    url: "https://faq.whatsapp.com/1142481766359885",
    category: "digital",
    tags: ["WhatsApp", "assédio", "ameaça", "bloquear", "denúncia"],
    steps: [
      "Abra a conversa com o contato",
      "Toque no nome do contato no topo",
      "Role até encontrar 'Denunciar contato'",
      "Confirme a denúncia e bloqueie se necessário",
    ],
  },
  {
    id: 25,
    title: "Não Me Perturbe - Bloqueio de Telemarketing",
    description:
      "Cadastre seu número para bloquear ligações indesejadas de telemarketing de operadoras de telefonia.",
    url: "https://www.naomeperturbe.com.br",
    category: "digital",
    tags: ["telemarketing", "bloqueio", "telefone", "ligação"],
    steps: [
      "Acesse o site Não Me Perturbe",
      "Cadastre seu número de telefone",
      "Selecione as operadoras que deseja bloquear",
      "Aguarde até 30 dias para o bloqueio ser efetivado",
    ],
  },
];

export function searchResources(query: string): Resource[] {
  if (!query.trim()) return resources;
  const terms = query.toLowerCase().split(/\s+/);
  return resources.filter((r) => {
    const text = `${r.title} ${r.description} ${r.tags.join(" ")} ${r.category}`.toLowerCase();
    return terms.every((term) => text.includes(term));
  });
}

export function getResourcesByCategory(
  category: ResourceCategory
): Resource[] {
  return resources.filter((r) => r.category === category);
}

export function getEmergencyResources(): Resource[] {
  return resources.filter((r) => r.isEmergency);
}
