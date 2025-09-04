export default {
  title: 'Aplicação',
  createApplication: 'Criar Aplicação Simples',
  createWorkFlowApplication: 'Criar Aplicação com Fluxo de Trabalho',
  importApplication: 'Importar Aplicação',
  copyApplication: 'Copiar Aplicação',
  workflow: 'FLUXO DE TRABALHO',
  simple: 'SIMPLES',
  simplePlaceholder: 'Adequado para iniciantes criarem assistentes usando configurações de formulário',
  workflowPlaceholder:
    'Adequado para usuários avançados construírem assistentes IA com lógica complexa usando arrastar e soltar low-code',
  appTest: 'Depuração e Visualização',
  searchBar: {
    placeholder: 'Pesquisar por nome',
  },
  status: {
    published: 'Publicado',
    unpublished: 'Não Publicado',
  },
  operation: {
    addModel: 'Adicionar Modelo',
    toChat: 'Chat',
    publish: 'Publicar',
  },
  delete: {
    confirmTitle: 'Tem certeza de que deseja excluir esta aplicação: ',
    confirmMessage:
      'Excluir esta aplicação fará com que seus serviços não estejam mais disponíveis. Por favor, proceda com cuidado.',
  },
  tip: {
    publishSuccess: 'Publicado com sucesso',
    ExportError: 'Falha na Exportação',
    professionalMessage:
      'A Edição Comunitária suporta até 5 aplicações. Se você precisar de mais aplicações, faça upgrade para a Edição Profissional.',
    saveErrorMessage: 'Falha ao salvar, verifique sua entrada ou tente novamente mais tarde',
    loadingErrorMessage: 'Falha ao carregar configuração, verifique sua entrada ou tente novamente mais tarde',
  },

  form: {
    appName: {
      label: 'Nome',
      placeholder: 'Por favor, insira o nome da aplicação',
      requiredMessage: 'Nome da aplicação é obrigatório',
    },
    appDescription: {
      label: 'Descrição',
      placeholder:
        'Descreva o cenário e uso da aplicação, ex.: Assistente XXX respondendo perguntas dos usuários sobre o uso do produto XXX',
    },
    appType: {
      label: 'Tipo',
      simplePlaceholder: 'Adequado para iniciantes criarem assistentes.',
      workflowPlaceholder: 'Adequado para usuários avançados personalizarem o fluxo de trabalho do assistente',
    },
    appTemplate: {
      blankApp: {
        title: 'Aplicação em Branco',
      },
      assistantApp: {
        title: 'Assistente de Conhecimento',
        description: 'Adequado para usuários avançados personalizarem o fluxo de trabalho do assistente',
      },
    },
    aiModel: {
      label: 'Modelo IA',
      placeholder: 'Por favor, selecione um modelo IA',
    },
    roleSettings: {
      label: 'Papel do Sistema',
      placeholder: 'Você é o assistente xxx',
    },

    prompt: {
      label: 'Prompt',
      noReferences: '（Sem referências de Conhecimento）',
      references: ' (Referências de Conhecimento)',
      placeholder: 'Por favor, insira o prompt',
      requiredMessage: 'Por favor, insira o prompt',
      tooltip:
        'Ajustando o conteúdo do prompt, você pode guiar a direção do chat do modelo.',

      noReferencesTooltip:
        'Ajustando o conteúdo do prompt, você pode guiar a direção do chat do modelo. Este prompt será fixado no início do contexto. Variáveis usadas: {question} é a pergunta feita pelo usuário.',
      referencesTooltip:
        'Ajustando o conteúdo do prompt, você pode guiar a direção do chat do modelo. Este prompt será fixado no início do contexto. Variáveis usadas: {data} contém informações conhecidas da base de conhecimento; {question} é a pergunta feita pelo usuário.',
      defaultPrompt: `Informações conhecidas: {data}
        Pergunta: {question}
         Requisitos de resposta:
         - Por favor, use linguagem concisa e profissional para responder a pergunta do usuário.
         `,
    },
    historyRecord: {
      label: 'Histórico de Chat',
    },
    relatedKnowledge: {
      label: 'Conhecimento Relacionado',
      placeholder: 'Conhecimentos relacionados são exibidos aqui',
    },
    multipleRoundsDialogue: 'Diálogo de Múltiplas Rodadas',

    prologue: 'Prólogo',
    defaultPrologue:
      'Olá, sou o Assistente XXX. Você pode me fazer perguntas sobre o uso do XXX.\n- Quais são os principais recursos do XXX?\n- Quais LLMs o XXX suporta?\n- Que tipos de documentos o XXX suporta?',
    problemOptimization: {
      label: 'Otimização de Perguntas',
      tooltip:
        'Otimiza a pergunta atual com base no histórico de chat para melhor corresponder aos pontos de conhecimento.',
    },

    voiceInput: {
      label: 'Entrada de Voz',
      placeholder: 'Por favor, selecione um modelo de reconhecimento de fala',
      requiredMessage: 'Por favor, selecione um modelo de entrada de voz',
      autoSend: 'Envio Automático',
    },
    voicePlay: {
      label: 'Reprodução de Voz',
      placeholder: 'Por favor, selecione um modelo de síntese de fala',
      requiredMessage: 'Por favor, selecione um modelo de reprodução de voz',
      autoPlay: 'Reprodução Automática',
      browser: 'Reprodução do Navegador (grátis)',
      tts: 'Modelo TTS',
      listeningTest: 'Pré-visualização',
    },
    reasoningContent: {
      label: 'Saída de Raciocínio',
      tooltip:
        "Por favor, defina o rótulo de raciocínio com base no retorno do modelo, e o conteúdo no meio do rótulo será reconhecido como o processo de raciocínio.",
      start: 'Início',
      end: 'Fim',
    },
  },
  buttons: {},
  dialog: {
    addKnowledge: 'Adicionar Conhecimento Relacionado',
    addKnowledgePlaceholder: 'O conhecimento selecionado deve usar o mesmo modelo de embedding',
    selectSearchMode: 'Modo de Recuperação',
    vectorSearch: 'Busca Vetorial',
    vectorSearchTooltip:
      'A busca vetorial é um método de recuperação baseado em cálculos de distância vetorial, adequado para grandes volumes de dados na base de conhecimento.',
    fullTextSearch: 'Busca de Texto Completo',
    fullTextSearchTooltip:
      'A busca de texto completo é um método de recuperação baseado na similaridade de texto, adequado para pequenos volumes de dados na base de conhecimento.',
    hybridSearch: 'Busca Híbrida',
    hybridSearchTooltip:
      'A busca híbrida é um método de recuperação baseado tanto em similaridade vetorial quanto textual, adequado para volumes médios de dados na base de conhecimento.',
    similarityThreshold: 'Similaridade maior que',
    similarityTooltip: 'Quanto maior a similaridade, mais forte a correlação.',
    topReferences: 'Top N Segmentos',
    maxCharacters: 'Máximo de Caracteres por Referência',
    noReferencesAction: 'Quando não houver referências de conhecimento',
    continueQuestioning: 'Continuar a fazer perguntas ao modelo IA',
    provideAnswer: 'Especificar Conteúdo de Resposta',
    designated_answer:
      'Olá, sou o Assistente XXX. Meu conhecimento contém apenas informações relacionadas aos produtos XXX. Por favor, reformule sua pergunta.',
    defaultPrompt1:
      "O conteúdo dentro dos parênteses () representa a pergunta do usuário. Com base no contexto, por favor especule e complete a pergunta do usuário ({question}). O requisito é produzir uma pergunta completa e colocá-la",
    defaultPrompt2: 'tag',
  },
  applicationAccess: {
    title: 'Acesso à Aplicação',
    wecom: 'WeCom',
    wecomTip: 'Criar aplicação inteligente WeCom',
    wecomBot: 'Bot WeCom',
    wecomBotTip: 'Criar Bot inteligente WeCom',
    dingtalk: 'DingTalk',
    dingtalkTip: 'Criar aplicação inteligente DingTalk',
    wechat: 'WeChat',
    wechatTip: 'Criar aplicação inteligente WeChat',
    lark: 'Lark',
    larkTip: 'Criar aplicação inteligente Lark',
    setting: 'Configuração',
    callback: 'Endereço de Callback',
    callbackTip: 'Por favor, preencha o endereço de callback',
    wecomPlatform: 'Plataforma Aberta WeCom',
    wechatPlatform: 'Plataforma Aberta WeChat',
    dingtalkPlatform: 'Plataforma Aberta DingTalk',
    larkPlatform: 'Plataforma Aberta Lark',
    slack: 'Slack',
    slackTip: 'Criar aplicação inteligente Slack',
    wecomSetting: {
      title: 'Configuração WeCom',
      cropId: 'ID da Empresa',
      cropIdPlaceholder: 'Por favor, insira o ID da empresa',
      agentIdPlaceholder: 'Por favor, insira o ID do agente',
      secretPlaceholder: 'Por favor, insira o secret',
      tokenPlaceholder: 'Por favor, insira o token',
      encodingAesKeyPlaceholder: 'Por favor, insira o EncodingAESKey',
      authenticationSuccessful: 'Sucesso',
      urlInfo:
        '-Gerenciamento de APP-Personalizado-APP criado-Receber mensagens-Defina a "URL" recebida pela API',
    },
    dingtalkSetting: {
      title: 'Configuração DingTalk',
      clientIdPlaceholder: 'Por favor, insira o ID do cliente',
      clientSecretPlaceholder: 'Por favor, insira o secret do cliente',
      urlInfo:
        '-Na página do robô, defina o "Modo de Recebimento de Mensagens" como modo HTTP e preencha a URL acima no "Endereço de Recebimento de Mensagens"',
    },
    wechatSetting: {
      title: 'Configuração WeChat',
      appId: 'APP ID',
      appIdPlaceholder: 'Por favor, insira o APP ID',
      appSecret: 'APP SECRET',
      appSecretPlaceholder: 'Por favor, insira o APP SECRET',
      token: 'TOKEN',
      tokenPlaceholder: 'Por favor, insira o TOKEN',
      aesKey: 'Chave de Criptografia de Mensagem',
      aesKeyPlaceholder: 'Por favor, insira a chave de criptografia de mensagem',
      urlInfo:
        '-Configurações e Desenvolvimento-Configuração Básica-"URL do Endereço do Servidor" na configuração do servidor',
    },
    wecomBotSetting: {
      title: 'Configuração do Bot WeCom',
      urlInfo: '-Ferramentas de Gerenciamento-Bot Inteligente-Criar Bot-Modo API Criar "URL"',
    },
    larkSetting: {
      title: 'Configuração Lark',
      appIdPlaceholder: 'Por favor, insira o APP ID',
      appSecretPlaceholder: 'Por favor, insira o APP secret',
      verificationTokenPlaceholder: 'Por favor, insira o token de verificação',
      urlInfo:
        '-Eventos e callbacks - configuração de eventos - configure o "endereço de solicitação" do método de assinatura',
    },
    slackSetting: {
      title: 'Configuração Slack',
      signingSecretPlaceholder: 'Por favor, insira o signing secret',
      botUserTokenPlaceholder: 'Por favor, insira o token do usuário bot',
    },
    copyUrl: 'Copie o link e preencha',
  },
  hitTest: {
    title: 'Teste de Recuperação',
    text: 'Teste o efeito de acerto da Base de Conhecimento com base no texto de consulta fornecido.',
    emptyMessage1: 'Os resultados do Teste de Recuperação serão mostrados aqui',
    emptyMessage2: 'Nenhuma seção correspondente encontrada',
  },
  publishTime: 'Hora de Publicação',
}