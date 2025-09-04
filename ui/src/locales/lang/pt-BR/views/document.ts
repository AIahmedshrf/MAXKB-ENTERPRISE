export default {
  uploadDocument: 'Enviar Documento',
  importDocument: 'Importar Documento',
  syncDocument: 'Sincronizar Documento',
  items: 'Itens',
  migrateDocument: 'Migrar para',
  searchBar: {
    placeholder: 'Pesquisar por nome do documento',
  },
  setting: {
    migration: 'Mover',
    cancelGenerateQuestion: 'Cancelar Geração de Perguntas',
    cancelVectorization: 'Cancelar Vetorização',
    cancelGenerate: 'Cancelar Geração',
    export: 'Exportar para',
    download: 'Baixar',
  },

  tip: {
    saveMessage: 'As alterações atuais não foram salvas. Confirmar saída?',
    cancelSuccess: 'Sucesso',
    sendMessage: 'Sucesso',
    vectorizationSuccess: 'Sucesso',
    nameMessage: 'O nome do documento não pode estar vazio!',
    importMessage: 'Sucesso',
    migrationSuccess: 'Sucesso',
    fileLimitCountTip1: 'Máximo de upload por vez',
    fileLimitCountTip2: 'arquivos',
    fileLimitSizeTip1: 'cada arquivo não deve exceder',
  },
  upload: {
    selectFile: 'Selecionar Arquivo',
    selectFiles: 'Selecionar Pasta',
    uploadMessage: 'Arraste e solte os arquivos aqui para enviar ou',
    formats: 'Formatos suportados:',
    requiredMessage: 'Por favor, envie um arquivo',
    errorMessage1: 'O tamanho do arquivo excede 100MB',
    errorMessage2: 'Formato de arquivo não suportado',
    errorMessage3: 'O arquivo não pode estar vazio',
    errorMessage4: 'Até 50 arquivos podem ser enviados de uma vez',
    template: 'Modelo',
    download: 'Baixar',
  },

  fileType: {
    txt: {
      label: 'Arquivo de Texto',
      tip1: '1. É recomendado padronizar os marcadores de segmento no arquivo antes de enviar.',
      tip2: '2. Até 50 arquivos podem ser enviados de uma vez, cada arquivo não deve exceder 100MB.',
    },
    table: {
      label: 'Tabela',
      tip1: '1. Clique para baixar o modelo correspondente e complete as informações:',
      tip2: '2. A primeira linha deve conter os cabeçalhos das colunas, e os cabeçalhos devem ser termos significativos. Cada registro na tabela será tratado como um segmento.',
      tip3: '3. Cada planilha do arquivo enviado será tratada como um documento, com o nome da planilha como nome do documento.',
      tip4: '4. Até 50 arquivos podem ser enviados de uma vez, cada arquivo não deve exceder 100MB.',
    },
    QA: {
      label: 'Pares de Perguntas e Respostas',
      tip1: '1. Clique para baixar o modelo correspondente e complete as informações:',
      tip2: '2. Cada planilha do arquivo enviado será tratada como um documento, com o nome da planilha como nome do documento.',
      tip3: '3. Até 50 arquivos podem ser enviados de uma vez, cada arquivo não deve exceder 100MB.',
    },
  },
  setRules: {
    title: {
      setting: 'Definir Regras de Segmentação',
      preview: 'Visualizar',
    },
    intelligent: {
      label: 'Segmentação Automática (Recomendado)',
      text: 'Se você não tem certeza de como definir regras de segmentação, é recomendado usar a segmentação automática.',
    },
    advanced: {
      label: 'Segmentação Avançada',
      text: 'Os usuários podem personalizar delimitadores de segmentação, comprimento do segmento e regras de limpeza com base nos padrões do documento.',
    },
    patterns: {
      label: 'Delimitadores de Segmento',
      tooltip:
        'Dividir recursivamente de acordo com os símbolos selecionados em ordem. Se o resultado da divisão exceder o comprimento do segmento, será truncado para o comprimento do segmento.',
      placeholder: 'Por favor, selecione',
    },
    limit: {
      label: 'Comprimento do Segmento',
    },
    with_filter: {
      label: 'Limpeza Automática',
      text: 'Remover símbolos extras duplicados, espaços, linhas em branco e palavras de tabulação.',
    },
    checkedConnect: {
      label: 'Adicionar seção "Perguntas Relacionadas" para pares de perguntas e respostas durante a importação.',
    },
  },
  buttons: {
    prev: 'Anterior',
    next: 'Próximo',
    import: 'Iniciar Importação',
    preview: 'Aplicar',
  },
  table: {
    name: 'Nome do Documento',
    char_length: 'Caracteres',
    paragraph: 'Segmento',
    all: 'Todos',
    updateTime: 'Hora da Atualização',
  },
  fileStatus: {
    label: 'Status do Arquivo',
    SUCCESS: 'Sucesso',
    FAILURE: 'Falha',
    EMBEDDING: 'Indexando',
    PENDING: 'Na Fila',
    GENERATE: 'Gerando',
    SYNC: 'Sincronizando',
    REVOKE: 'Cancelando',
    finish: 'Concluído',
  },
  enableStatus: {
    label: 'Status',
    enable: 'Ativado',
    close: 'Desativado',
  },
  sync: {
    label: 'Sincronizar',
    confirmTitle: 'Confirmar sincronização do documento?',
    confirmMessage1:
      'A sincronização excluirá os dados existentes e recuperará novos dados. Por favor, proceda com cautela.',
    confirmMessage2: 'Não é possível sincronizar, por favor defina a URL do documento primeiro.',
    successMessage: 'Sucesso',
  },
  delete: {
    confirmTitle1: 'Confirmar exclusão em lote de',
    confirmTitle2: 'documentos?',
    confirmMessage:
      'Os segmentos dentro dos documentos selecionados também serão excluídos. Por favor, proceda com cautela.',
    successMessage: 'Sucesso',
    confirmTitle3: 'Confirmar exclusão do documento:',
    confirmMessage1: 'Neste documento',
    confirmMessage2: 'Todos os segmentos serão excluídos, por favor opere com cautela.',
  },
  form: {
    source_url: {
      label: 'URL do Documento',
      placeholder: 'Digite a URL do documento, uma por linha. URL incorreta causará falha na importação.',
      requiredMessage: 'Por favor, digite a URL do documento',
    },
    selector: {
      label: 'Seletor',
      placeholder: 'Padrão é body, você pode inserir .classname/#idname/tagname',
    },
    hit_handling_method: {
      label: 'Recuperar-Responder',
      tooltip: 'Quando o usuário faz uma pergunta, manipula os segmentos correspondentes de acordo com o método definido.',
    },
    similarity: {
      label: 'Similaridade Superior a',
      placeholder: 'Retornar diretamente o conteúdo do segmento',
      requiredMessage: 'Por favor, digite o valor de similaridade',
    },
    allow_download: {
     label: 'Permitir download na fonte da base de conhecimento',
    }
  },
  hitHandlingMethod: {
    optimization: 'Otimização do modelo',
    directly_return: 'Responder diretamente',
  },
  movePosition: {
    title: 'Mover posição',
    moveUp: 'Mover para cima',
    moveDown: 'Mover para baixo',
  },
  generateQuestion: {
    title: 'Gerar Perguntas',
    successMessage: 'Sucesso',
    tip1: 'O {data} no prompt é um marcador para conteúdo segmentado, que é substituído pelo conteúdo segmentado quando executado e enviado ao modelo de IA;',
    tip2: 'O modelo de IA gera perguntas relevantes com base no conteúdo segmentado. Por favor, coloque as perguntas geradas dentro das',
    tip3: 'tags, e o sistema automaticamente relacionará as perguntas dentro dessas tags;',
    tip4: 'O efeito da geração depende do modelo selecionado e do prompt. Os usuários podem ajustar para obter o melhor efeito.',
    prompt1:
      'Conteúdo: {data}\n \n Por favor, resuma o conteúdo acima e gere 5 perguntas com base no resumo. \nRequisitos da resposta: \n - Por favor, gere apenas perguntas; \n - Por favor, coloque cada pergunta em',
    prompt2: 'tag.',
  },
  feishu: {
    selectDocument: 'Selecionar Documento',
    tip1: 'Apenas documentos e tabelas são suportados. Os documentos serão segmentados com base nos títulos, e as tabelas serão convertidas para formato Markdown antes da segmentação.',
    tip2: 'O sistema não armazena o documento original. Antes de importar o documento, é recomendado padronizar os marcadores de segmentação do documento.',
    allCheck: 'Selecionar Todos',
  },
}
