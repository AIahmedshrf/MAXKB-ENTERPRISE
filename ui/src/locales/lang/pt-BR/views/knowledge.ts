export default {
  title: 'Conhecimento',
  relatedApplications: 'Aplicações Vinculadas',
  document_count: 'docs',
  relatedApp_count: 'aplicações vinculadas',
  searchBar: {
    placeholder: 'Pesquisar por nome',
  },
  setting: {
    vectorization: 'Vetorização',
    sync: 'Sincronizar',
  },
  tip: {
    professionalMessage:
      'A edição comunitária suporta até 50 bases de conhecimento. Para mais bases de conhecimento, faça upgrade para a edição profissional.',
    syncSuccess: 'Tarefa de sincronização enviada com sucesso',
    updateModeMessage:
      'Após modificar o modelo vetorial da base de conhecimento, você precisa vetorizar o conhecimento. Deseja continuar salvando?',
  },
  delete: {
    confirmTitle: 'Confirmar exclusão da base de conhecimento:',
    confirmMessage1: 'Esta base de conhecimento está relacionada com',
    confirmMessage2: 'aplicação(ões). Excluí-la será irreversível, por favor proceda com cuidado.',
  },
  knowledgeType: {
    label: 'Tipo',
    generalKnowledge: 'Conhecimento Geral',
    webKnowledge: 'Conhecimento Web',
    larkKnowledge: 'Conhecimento Lark',
    yuqueKnowledge: 'Conhecimento Yuque',
    generalInfo: 'Fazer upload de documentos locais',
    webInfo: 'Sincronizar dados de texto de um site',
    larkInfo: 'Construir conhecimento através de documentos Lark',
    yuqueInfo: 'Construir conhecimento através de documentos Yuque',
    createGeneralKnowledge: 'Criar Conhecimento Geral',
    createWebKnowledge: 'Criar Conhecimento Web',
    createLarkKnowledge: 'Criar Conhecimento Lark',
    createYuqueKnowledge: 'Criar Conhecimento Yuque',
  },
  form: {
    knowledgeName: {
      label: 'Nome',
      placeholder: 'Por favor, insira o nome da base de conhecimento',
      requiredMessage: 'Por favor, insira o nome da base de conhecimento',
    },
    knowledgeDescription: {
      label: 'Descrição',
      placeholder:
        'Descreva o conteúdo da base de conhecimento. Uma descrição detalhada ajudará a IA a entender melhor o conteúdo, melhorando a precisão da recuperação de conteúdo e a taxa de acerto.',
      requiredMessage: 'Por favor, insira a descrição da base de conhecimento',
    },
    EmbeddingModel: {
      label: 'Modelo de Embedding',
      placeholder: 'Por favor, selecione um modelo de embedding',
      requiredMessage: 'Por favor, selecione o modelo de embedding',
    },

    source_url: {
      label: 'URL Raiz do Site',
      placeholder: 'Por favor, insira a URL raiz do site',
      requiredMessage: 'Por favor, insira a URL raiz do site',
    },
    selector: {
      label: 'Seletor',
      placeholder: 'Padrão é body, pode inserir .classname/#idname/tagname',
    },
    file_count_limit: {
      label: 'Número máximo de arquivos enviados por vez',
    },
    file_size_limit: {
      label: 'Tamanho máximo de cada documento (MB)',
      placeholder: 'Sugestão baseada na configuração do servidor, caso contrário pode causar desligamento do serviço',
    },
  },

  ResultSuccess: {
    title: 'Base de Conhecimento Criada com Sucesso',
    paragraph: 'Segmentos',
    paragraph_count: 'Segmentos',
    documentList: 'Lista de Documentos',
    loading: 'Importando',
    buttons: {
      toKnowledge: 'Retornar à Lista de Conhecimentos',
      toDocument: 'Ir para Documento',
    },
  },
  syncWeb: {
    title: 'Sincronizar Conhecimento',
    syncMethod: 'Método de Sincronização',
    replace: 'Sincronização de Substituição',
    replaceText: 'Buscar novamente documentos do site, substituindo os documentos na base de conhecimento local',
    complete: 'Sincronização Completa',
    completeText: 'Excluir todos os documentos na base de conhecimento local e buscar novamente documentos do site',
    tip: 'Nota: Todas as sincronizações excluirão dados existentes e buscarão novos dados. Por favor, proceda com cuidado.',
  },
}
