export default {
  title: 'Modèle',
  provider: 'Fournisseur',
  providerPlaceholder: 'Sélectionner le fournisseur',
  addModel: 'Ajouter un modèle',

  delete: {
    confirmTitle: 'Supprimer le modèle :',
    confirmMessage:
      'La suppression du modèle affectera les ressources qui l\'utilisent actuellement. Veuillez procéder avec prudence.',
  },
  tip: {
    createSuccessMessage: 'Modèle créé avec succès',
    createErrorMessage: 'Il y a des erreurs dans les informations de base',
    errorMessage: 'La variable existe déjà : ',
    emptyMessage1: 'Veuillez d\'abord sélectionner le type de modèle et le modèle de base dans les informations de base',
    emptyMessage2: 'Le modèle sélectionné ne supporte pas les paramètres',
    updateSuccessMessage: 'Modèle mis à jour avec succès',
    saveSuccessMessage: 'Paramètres du modèle enregistrés avec succès',
    downloadError: 'Échec du téléchargement',
    noModel: 'Le modèle n\'existe pas dans Ollama',
  },
  modelType: {
    allModel: 'Tous les modèles',
    publicModel: 'Modèles publics',
    privateModel: 'Modèles privés',
    LLM: 'LLM',
    EMBEDDING: 'Modèle d\'embedding',
    RERANKER: 'Rerank',
    STT: 'Parole vers texte',
    TTS: 'TTS',
    IMAGE: 'Modèle de vision',
    TTI: 'Génération d\'image',
    TTV: 'Texte vers vidéo',
    ITV: 'Image vers vidéo',
  },
  modelForm: {
    title: {
      baseInfo: 'Informations de base',
      advancedInfo: 'Paramètres avancés',
      modelParams: 'Paramètres du modèle',
      paramSetting: 'Paramètres de paramètres du modèle',
      apiParamPassing: 'Paramètres d\'interface',
    },
    modeName: {
      label: 'Nom du modèle',
      placeholder: 'Définir un nom pour le modèle de base',
      tooltip: 'Nom du modèle personnalisé dans MaxKB',
      requiredMessage: 'Le nom du modèle ne peut pas être vide',
    },
    permissionType: {
      label: 'Permission',
      privateDesc: 'Disponible uniquement pour l\'utilisateur actuel',
      publicDesc: 'Disponible pour tous les utilisateurs',
      requiredMessage: 'La permission ne peut pas être vide',
    },
    model_type: {
      label: 'Type de modèle',
      placeholder: 'Sélectionner un type de modèle',
      tooltip1: 'LLM : Un modèle d\'inférence pour les chats IA dans l\'APP.',
      tooltip2: 'Modèle d\'embedding : Un modèle pour vectoriser le contenu des documents dans la connaissance.',
      tooltip3: 'Parole vers texte : Un modèle utilisé pour la reconnaissance vocale dans l\'APP.',
      tooltip4: 'TTS : Un modèle utilisé pour TTS dans l\'APP.',
      tooltip5:
        'Rerank : Un modèle utilisé pour réordonner les segments candidats lors de l\'utilisation du rappel multi-route dans l\'APP d\'orchestration avancée.',
      tooltip6:
        'Modèle de vision : Un modèle visuel utilisé pour la compréhension d\'image dans l\'APP d\'orchestration avancée.',
      tooltip7:
        'Génération d\'image : Un modèle visuel utilisé pour la génération d\'image dans l\'APP d\'orchestration avancée.',
      tooltip8:
        'Texte vers vidéo : Un modèle visuel utilisé pour la conversion texte vers vidéo dans l\'APP.',
      tooltip9:
        'Image vers vidéo : Un modèle visuel utilisé pour la conversion image vers vidéo dans l\'APP.',
      requiredMessage: 'Le type de modèle ne peut pas être vide',
    },
    base_model: {
      label: 'Modèle de base',
      tooltip: 'Pour les modèles non listés, entrez le nom du modèle et appuyez sur Entrée',
      placeholder: 'Entrez le nom du modèle de base et appuyez sur Entrée pour ajouter',
      requiredMessage: 'Le modèle de base ne peut pas être vide',
    },
  },
  download: {
    downloading: 'Téléchargement en cours...',
    cancelDownload: 'Annuler le téléchargement',
  },
}
