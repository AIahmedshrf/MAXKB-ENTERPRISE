export default {
  title: 'Connaissance',
  relatedApplications: 'Application liée',
  document_count: 'docs',
  relatedApp_count: 'applications liées',
  searchBar: {
    placeholder: 'Rechercher par nom',
  },
  setting: {
    vectorization: 'Vectorisation',
    sync: 'Synchroniser',
  },
  tip: {
    professionalMessage:
      'L\'édition communautaire supporte jusqu\'à 50 connaissances. Pour plus de connaissances, veuillez passer à l\'édition professionnelle.',
    syncSuccess: 'Tâche de synchronisation envoyée avec succès',
    updateModeMessage:
      'Après avoir modifié le modèle vectoriel de connaissance, vous devez vectoriser la connaissance. Voulez-vous continuer à enregistrer ?',
  },
  delete: {
    confirmTitle: 'Confirmer la suppression de la connaissance :',
    confirmMessage1: 'Cette connaissance est liée à',
    confirmMessage2: 'APP. Sa suppression sera irréversible, veuillez procéder avec prudence.',
  },
  knowledgeType: {
    label: 'Type',
    generalKnowledge: 'Connaissance générale',
    webKnowledge: 'Connaissance web',
    larkKnowledge: 'Connaissance Lark',
    yuqueKnowledge: 'Connaissance Yuque',
    generalInfo: 'Télécharger des documents locaux',
    webInfo: 'Synchroniser les données textuelles d\'un site web',
    larkInfo: 'Construire la connaissance via les documents Lark',
    yuqueInfo: 'Construire la connaissance via les documents Yuque',
    createGeneralKnowledge: 'Créer une connaissance générale',
    createWebKnowledge: 'Créer une connaissance web',
    createLarkKnowledge: 'Créer une connaissance Lark',
    createYuqueKnowledge: 'Créer une connaissance Yuque',
  },
  form: {
    knowledgeName: {
      label: 'Nom',
      placeholder: 'Veuillez entrer le nom de la connaissance',
      requiredMessage: 'Veuillez entrer le nom de la connaissance',
    },
    knowledgeDescription: {
      label: 'Description',
      placeholder:
        'Décrivez le contenu de la connaissance. Une description détaillée aidera l\'IA à mieux comprendre le contenu, améliorant la précision de la récupération de contenu et le taux de correspondance.',
      requiredMessage: 'Veuillez entrer la description de la connaissance',
    },
    EmbeddingModel: {
      label: 'Modèle d\'embedding',
      placeholder: 'Veuillez sélectionner un modèle d\'embedding',
      requiredMessage: 'Veuillez sélectionner le modèle d\'embedding',
    },

    source_url: {
      label: 'URL racine du web',
      placeholder: 'Veuillez entrer l\'URL racine du web',
      requiredMessage: 'Veuillez entrer l\'URL racine du web',
    },
    selector: {
      label: 'Sélecteur',
      placeholder: 'Par défaut body, peut saisir .classname/#idname/tagname',
    },
    file_count_limit: {
      label: 'Nombre maximum de fichiers téléchargés à la fois',
    },
    file_size_limit: {
      label: 'Taille maximale de chaque document (Mo)',
      placeholder: 'Suggérer en fonction de la configuration du serveur, sinon peut causer l\'arrêt du service',
    },
  },

  ResultSuccess: {
    title: 'Connaissance créée avec succès',
    paragraph: 'Segments',
    paragraph_count: 'Segments',
    documentList: 'Liste de documents',
    loading: 'Importation',
    buttons: {
      toKnowledge: 'Retour à la liste de connaissances',
      toDocument: 'Aller au document',
    },
  },
  syncWeb: {
    title: 'Synchroniser la connaissance',
    syncMethod: 'Méthode de synchronisation',
    replace: 'Synchronisation de remplacement',
    replaceText: 'Récupérer à nouveau les documents du site web, remplaçant les documents dans la connaissance locale',
    complete: 'Synchronisation complète',
    completeText: 'Supprimer tous les documents dans la connaissance locale et récupérer à nouveau les documents du site web',
    tip: 'Remarque : Toutes les synchronisations supprimeront les données existantes et récupéreront de nouvelles données. Veuillez procéder avec prudence.',
  },
}
