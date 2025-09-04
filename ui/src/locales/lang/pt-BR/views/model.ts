export default {
  title: 'Modelos',
  provider: 'Provedor',
  providerPlaceholder: 'Selecionar Provedor',
  addModel: 'Adicionar Modelo',

  delete: {
    confirmTitle: 'Excluir Modelo：',
    confirmMessage:
      'Excluir o modelo afetará os recursos que atualmente o utilizam. Por favor, proceda com cautela.',
  },
  tip: {
    createSuccessMessage: 'Modelo criado com sucesso',
    createErrorMessage: 'Há erros nas informações básicas',
    errorMessage: 'Variável já existe: ',
    emptyMessage1: 'Por favor, selecione primeiro o tipo de modelo e o modelo base nas informações básicas',
    emptyMessage2: 'O modelo selecionado não suporta configurações de parâmetros',
    updateSuccessMessage: 'Modelo atualizado com sucesso',
    saveSuccessMessage: 'Parâmetros do modelo salvos com sucesso',
    downloadError: 'Falha no download',
    noModel: 'Modelo não existe no Ollama',
  },
  modelType: {
    allModel: 'Todos os Modelos',
    publicModel: 'Modelos Públicos',
    privateModel: 'Modelos Privados',
    LLM: 'LLM',
    EMBEDDING: 'Modelo de Embedding',
    RERANKER: 'Rerank',
    STT: 'Fala para Texto',
    TTS: 'TTS',
    IMAGE: 'Modelo de Visão',
    TTI: 'Geração de Imagem',
  },
  modelForm: {
    title: {
      baseInfo: 'Informações Básicas',
      advancedInfo: 'Configurações Avançadas',
      modelParams: 'Parâmetros do Modelo',
      paramSetting: 'Configurações de Parâmetros do Modelo',
      apiParamPassing: 'Parâmetros de Interface',
    },
    modeName: {
      label: 'Nome do Modelo',
      placeholder: 'Defina um nome para o modelo base',
      tooltip: 'Nome personalizado do modelo no MaxKB',
      requiredMessage: 'O nome do modelo não pode estar vazio',
    },
    permissionType: {
      label: 'Permissão',
      privateDesc: 'Disponível apenas para o usuário atual',
      publicDesc: 'Disponível para todos os usuários',
      requiredMessage: 'A permissão não pode estar vazia',
    },
    model_type: {
      label: 'Tipo de Modelo',
      placeholder: 'Selecione um tipo de modelo',
      tooltip1: 'LLM: Um modelo de inferência para chats de IA na Aplicação.',
      tooltip2: 'Modelo de Embedding: Um modelo para vetorizar conteúdo de documentos no conhecimento.',
      tooltip3: 'Fala para Texto: Um modelo usado para reconhecimento de fala na Aplicação.',
      tooltip4: 'TTS: Um modelo usado para TTS na Aplicação.',
      tooltip5:
        'Rerank: Um modelo usado para reordenar segmentos candidatos ao usar recuperação multi-rota em Aplicações de orquestração avançada.',
      tooltip6:
        'Modelo de Visão: Um modelo visual usado para compreensão de imagens em Aplicações de orquestração avançada.',
      tooltip7:
        'Geração de Imagem: Um modelo visual usado para geração de imagens em Aplicações de orquestração avançada.',
      requiredMessage: 'O tipo de modelo não pode estar vazio',
    },
    base_model: {
      label: 'Modelo Base',
      tooltip: 'Para modelos não listados, digite o nome do modelo e pressione Enter',
      placeholder: 'Digite o nome do modelo base e pressione Enter para adicionar',
      requiredMessage: 'O modelo base não pode estar vazio',
    },
  },
  download: {
    downloading: 'Baixando...',
    cancelDownload: 'Cancelar Download',
  },
}
