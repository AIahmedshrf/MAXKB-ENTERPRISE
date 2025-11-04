export default {
  title: 'Outil',
  all: 'Tous',
  createTool: 'Créer un outil',
  editTool: 'Modifier l\'outil',
  createMcpTool: 'Créer MCP',
  editMcpTool: 'Modifier MCP',
  copyTool: 'Copier l\'outil',
  importTool: 'Importer un outil',
  settingTool: 'Configurer l\'outil',
  mcpConfig: 'Configuration du service MCP',
  toolStore: {
    title: 'Magasin d\'outils',
    createFromToolStore: 'Créer depuis le magasin d\'outils',
    internal: 'Intégré au système',
    recommend: 'Recommandé',
    webSearch: 'Recherche web',
    databaseQuery: 'Requête base de données',
    image: 'Image',
    developer: 'Développeur',
    communication: 'Communication',
    searchResult: '{count} résultats de recherche pour',
    confirmTip: 'Êtes-vous sûr de mettre à jour l\'outil : ',
    updateStoreToolMessage: 'La mise à jour des outils peut affecter les ressources en cours d\'utilisation, procédez avec prudence.',
  },
  searchBar: {
    placeholder: 'Rechercher par nom d\'outil',
  },
  tip: {
    saveMessage: 'Les modifications non enregistrées seront perdues. Êtes-vous sûr de vouloir quitter ?',
  },
  delete: {
    confirmTitle: 'Confirmer la suppression de l\'outil :',
    confirmMessage:
      'La suppression de cet outil provoquera des erreurs dans les applications qui y font référence lors des requêtes. Veuillez procéder avec prudence.',
  },
  disabled: {
    confirmTitle: 'Confirmer la désactivation de l\'outil :',
    confirmMessage:
      'La désactivation de cet outil provoquera des erreurs dans les applications qui y font référence lors des requêtes. Veuillez procéder avec prudence.',
  },

  form: {
    toolName: {
      label: 'Nom',
      name: 'Nom de l\'outil',
      placeholder: 'Veuillez saisir le nom de l\'outil',
      requiredMessage: 'Veuillez saisir le nom de l\'outil',
    },
    mcpName: {
      label: 'Nom',
      name: 'Nom MCP',
      placeholder: 'Veuillez saisir le nom MCP',
      requiredMessage: 'Veuillez saisir le nom MCP',
    },
    toolDescription: {
      placeholder: 'Veuillez saisir une description de l\'outil',
    },
    mcpDescription: {
      placeholder: 'Veuillez saisir une description du MCP',
    },
    paramName: {
      label: 'Nom du paramètre',
      placeholder: 'Veuillez saisir le nom du paramètre',
      requiredMessage: 'Veuillez saisir le nom du paramètre',
    },
    dataType: {
      label: 'Type de données',
    },
    source: {
      label: 'Source',
      reference: 'Paramètre de référence',
    },
    required: {
      label: 'Obligatoire',
    },
    param: {
      paramInfo1: 'Affiché lors de l\'utilisation de l\'outil',
      paramInfo2: 'Non affiché lors de l\'utilisation de l\'outil',
      code: 'Contenu (Python)',
      selectPlaceholder: 'Veuillez sélectionner un paramètre',
      inputPlaceholder: 'Veuillez saisir les valeurs du paramètre',
    },
    mcp: {
      title: 'Service MCP',
      label: 'Configuration du serveur MCP',
      placeholder: 'Veuillez saisir la configuration du serveur MCP',
      tip: 'Prend uniquement en charge les méthodes d\'appel SSE et Streamable HTTP',
      requiredMessage: 'Veuillez saisir la configuration du serveur MCP',
    },
    debug: {
      run: 'Exécuter',
      output: 'Sortie',
      runResult: 'Résultat de l\'exécution',
      runSuccess: 'Succès',
      runFailed: 'Échec de l\'exécution',
    },
  },
}
