export default {
  uploadDocument: 'Télécharger un document',
  importDocument: 'Importer un document',
  syncDocument: 'Synchroniser un document',
  items: 'Éléments',
  migrateDocument: 'Migrer vers',
  searchBar: {
    placeholder: 'Rechercher par nom de document',
  },
  setting: {
    migration: 'Déplacer',
    cancelGenerateQuestion: 'Annuler la génération de questions',
    cancelVectorization: 'Annuler la vectorisation',
    cancelGenerate: 'Annuler la génération',
    export: 'Exporter vers',
    download: 'Télécharger',
    replace: 'Remplacer',
  },

  tip: {
    saveMessage: 'Les modifications actuelles n\'ont pas été enregistrées. Confirmer la sortie ?',
    cancelSuccess: 'Réussi',
    sendMessage: 'Réussi',
    vectorizationSuccess: 'Réussi',
    nameMessage: 'Le nom du document ne peut pas être vide !',
    importMessage: 'Réussi',
    migrationSuccess: 'Réussi',
    fileLimitCountTip1: 'Téléchargement maximum par fois',
    fileLimitCountTip2: 'fichiers',
    fileLimitSizeTip1: 'chaque fichier ne doit pas dépasser',
  },
  upload: {
    selectFile: 'Sélectionner un fichier',
    selectFiles: 'Sélectionner un dossier',
    uploadMessage: 'Faites glisser et déposez les fichiers ici pour télécharger ou',
    formats: 'Formats supportés :',
    requiredMessage: 'Veuillez télécharger un fichier',
    errorMessage1: 'La taille du fichier dépasse 100 Mo',
    errorMessage2: 'Format de fichier non supporté',
    errorMessage3: 'Le fichier ne peut pas être vide',
    errorMessage4: 'Jusqu\'à 50 fichiers peuvent être téléchargés à la fois',
    template: 'Modèle',
    download: 'Télécharger',
  },

  fileType: {
    txt: {
      label: 'Fichier texte',
      tip1: '1. Il est recommandé de standardiser les marqueurs de segment dans le fichier avant le téléchargement.',
      tip2: '2. Jusqu\'à 50 fichiers peuvent être téléchargés à la fois, chaque fichier ne dépassant pas 100 Mo.',
    },
    table: {
      label: 'Tableau',
      tip1: '1. Cliquez pour télécharger le modèle correspondant et compléter les informations :',
      tip2: '2. La première ligne doit être les en-têtes de colonne, et les en-têtes de colonne doivent être des termes significatifs. Chaque enregistrement du tableau sera traité comme un segment.',
      tip3: '3. Chaque feuille du fichier de feuille de calcul téléchargé sera traitée comme un document, avec le nom de la feuille comme nom de document.',
      tip4: '4. Jusqu\'à 50 fichiers peuvent être téléchargés à la fois, chaque fichier ne dépassant pas 100 Mo.',
    },
    QA: {
      label: 'Paires Q&R',
      tip1: '1. Cliquez pour télécharger le modèle correspondant et compléter les informations :',
      tip2: '2. Chaque feuille du fichier de feuille de calcul téléchargé sera traitée comme un document, avec le nom de la feuille comme nom de document.',
      tip3: '3. Jusqu\'à 50 fichiers peuvent être téléchargés à la fois, chaque fichier ne dépassant pas 100 Mo.',
    },
  },
  setRules: {
    title: {
      setting: 'Définir les règles de segment',
      preview: 'Aperçu',
    },
    intelligent: {
      label: 'Segmentation automatique (Recommandé)',
      text: 'Si vous ne savez pas comment définir les règles de segmentation, il est recommandé d\'utiliser la segmentation automatique.',
    },
    advanced: {
      label: 'Segmentation avancée',
      text: 'Les utilisateurs peuvent personnaliser les délimiteurs de segmentation, la longueur de segment et les règles de nettoyage en fonction des normes du document.',
    },
    patterns: {
      label: 'Délimiteurs de segment',
      tooltip:
        'Diviser récursivement selon les symboles sélectionnés dans l\'ordre. Si le résultat de la division dépasse la longueur de segment, il sera tronqué à la longueur de segment.',
      placeholder: 'Veuillez sélectionner',
    },
    limit: {
      label: 'Longueur de segment',
    },
    with_filter: {
      label: 'Nettoyage automatique',
      text: 'Supprimer les symboles supplémentaires en double, les espaces, les lignes vides et les mots de tabulation.',
    },
    checkedConnect: {
      label: 'Ajouter une section "Questions connexes" pour les paires Q&R basées sur les questions lors de l\'importation.',
    },
  },
  buttons: {
    prev: 'Précédent',
    next: 'Suivant',
    import: 'Démarrer l\'importation',
    preview: 'Appliquer',
  },
  tag: {
    label: 'Gestion des balises',
    key: 'Balise',
    value: 'Valeur',
    addTag: 'Ajouter une balise',
    setting: 'Paramètres de balise',
    create: 'Créer une balise',
    createValue: 'Créer une valeur de balise',
    edit: 'Modifier la balise',
    editValue: 'Modifier la valeur de balise',
    deleteConfirm: 'Confirmer la suppression de la balise : ',
    deleteTip:
      'Après la suppression, les ressources utilisant cette balise auront la balise supprimée. Veuillez procéder avec prudence !',
    requiredMessage1: 'Veuillez entrer une balise',
    requiredMessage2: 'Veuillez entrer une valeur',
    requiredMessage3: 'Veuillez entrer une balise ou une valeur',
  },
  table: {
    name: 'Nom du document',
    char_length: 'Caractère',
    paragraph: 'Segment',
    all: 'Tous',
    updateTime: 'Heure de mise à jour',
  },
  fileStatus: {
    label: 'Statut du fichier',
    SUCCESS: 'Succès',
    FAILURE: 'Échec',
    EMBEDDING: 'Indexation',
    PENDING: 'En attente',
    GENERATE: 'Génération',
    SYNC: 'Synchronisation',
    REVOKE: 'Annulation',
    finish: 'Terminé',
  },
  enableStatus: {
    label: 'Statut',
    enable: 'Activé',
    close: 'Désactivé',
  },
  sync: {
    label: 'Synchroniser',
    confirmTitle: 'Confirmer la synchronisation du document ?',
    confirmMessage1:
      'La synchronisation supprimera les données existantes et récupérera de nouvelles données. Veuillez procéder avec prudence.',
    confirmMessage2: 'Impossible de synchroniser, veuillez d\'abord définir l\'URL du document.',
    successMessage: 'Réussi',
  },
  delete: {
    confirmTitle1: 'Confirmer la suppression par lot de',
    confirmTitle2: 'documents ?',
    confirmMessage:
      'Les segments dans les documents sélectionnés seront également supprimés. Veuillez procéder avec prudence.',
    successMessage: 'Réussi',
    confirmTitle3: 'Confirmer la suppression du document :',
    confirmMessage1: 'Sous ce document',
    confirmMessage2: 'Tous les segments seront supprimés, veuillez opérer avec prudence. ',
  },
  form: {
    source_url: {
      label: 'URL du document',
      placeholder: 'Entrez l\'URL du document, une par ligne. Une URL incorrecte entraînera l\'échec de l\'importation.',
      requiredMessage: 'Veuillez entrer une URL de document',
    },
    selector: {
      label: 'Sélecteur',
      placeholder: 'Par défaut body, vous pouvez saisir .classname/#idname/tagname',
    },
    hit_handling_method: {
      label: 'Récupérer-Répondre',
      tooltip: 'Lorsque l\'utilisateur pose une question, traiter les segments correspondants selon la méthode définie.',
    },
    similarity: {
      label: 'Similarité supérieure à',
      placeholder: 'Retourner directement le contenu du segment',
      requiredMessage: 'Veuillez entrer la valeur de similarité',
    },
    allow_download: {
      label: 'Autoriser le téléchargement dans la source de base de connaissances',
    },
  },
  hitHandlingMethod: {
    optimization: 'Optimisation du modèle',
    directly_return: 'Répondre directement',
  },
  movePosition: {
    title: 'Déplacer la position',
    moveUp: 'Déplacer vers le haut',
    moveDown: 'Déplacer vers le bas',
  },
  generateQuestion: {
    title: 'Générer des questions',
    successMessage: 'Réussi',
    tip1: 'Le {data} dans le prompt est un espace réservé pour le contenu segmenté, qui est remplacé par le contenu segmenté lors de l\'exécution et envoyé au modèle IA ;',
    tip2: 'Le modèle IA génère des questions pertinentes en fonction du contenu segmenté. Veuillez placer les questions générées dans les',
    tip3: 'balises, et le système associera automatiquement les questions dans ces balises ;',
    tip4: 'L\'effet de génération dépend du modèle sélectionné et du prompt. Les utilisateurs peuvent ajuster pour obtenir le meilleur effet.',
    prompt1:
      'Contenu : {data}\n \n Veuillez résumer ce qui précède et générer 5 questions basées sur le résumé. \nExigences de réponse : \n - Veuillez sortir uniquement les questions ; \n - Veuillez placer chaque question dans',
    prompt2: 'balise.',
  },
  feishu: {
    selectDocument: 'Sélectionner un document',
    tip1: 'Seuls les documents et les tableaux sont supportés. Les documents seront segmentés en fonction des titres, et les tableaux seront convertis au format Markdown avant la segmentation.',
    tip2: 'Avant d\'importer le document, il est recommandé de standardiser les marqueurs de segmentation du document.',
    allCheck: 'Tout sélectionner',
  },
}
