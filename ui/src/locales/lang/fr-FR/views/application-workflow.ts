export default {
  node: 'Nœud',
  nodeName: 'Nom du nœud',
  baseComponent: 'Base',
  nodeSetting: 'Paramètres du nœud',
  workflow: 'Workflow',
  searchBar: {
    placeholder: 'Rechercher par nom',
  },
  info: {
    previewVersion: 'Version d\'aperçu :',
    saveTime: 'Dernière sauvegarde :',
  },
  setting: {
    restoreVersion: 'Restaurer la version précédente"',
    restoreCurrentVersion: 'Restaurer à cette version',
    addComponent: 'Ajouter',
    releaseHistory: 'Historique des versions',
    autoSave: 'Sauvegarde automatique',
    latestRelease: 'Dernière version',
    copyParam: 'Copier les paramètres',
    debug: 'Exécuter',
    exit: 'Quitter',
    exitSave: 'Enregistrer et quitter',
  },
  tip: {
    noData: 'Aucun résultat trouvé',
    nameMessage: 'Le nom ne peut pas être vide !',
    onlyRight: 'Les connexions ne peuvent être faites qu\'à partir de l\'ancre droite',
    notRecyclable: 'Les connexions en boucle ne sont pas autorisées',
    onlyLeft: 'Les connexions ne peuvent être faites qu\'vers l\'ancre gauche',
    applicationNodeError: 'Cette application n\'est pas disponible',
    toolNodeError: 'Ce nœud d\'outil n\'est pas disponible',
    repeatedNodeError: 'Un nœud avec ce nom existe déjà',
    cannotCopy: 'Ne peut pas être copié',
    copyError: 'Nœud déjà copié',
    paramErrorMessage: 'Le paramètre existe déjà : ',
    saveMessage: 'Les modifications actuelles n\'ont pas été enregistrées. Enregistrer avant de quitter ?',
  },
  delete: {
    confirmTitle: 'Confirmer la suppression de ce nœud ?',
    deleteMessage: 'Ce nœud ne peut pas être supprimé',
  },
  control: {
    zoomOut: 'Dézoomer',
    zoomIn: 'Zoomer',
    fitView: 'Adapter à l\'écran',
    retract: 'Réduire tout',
    extend: 'Développer tout',
    beautify: 'Arrangement automatique',
  },
  variable: {
    global: 'Variable globale',
    Referencing: 'Variable référencée',
    ReferencingRequired: 'La variable référencée est obligatoire',
    ReferencingError: 'Variable référencée invalide',
    NoReferencing: 'La variable référencée n\'existe pas',
    placeholder: 'Veuillez sélectionner une variable',
    inputPlaceholder: 'Veuillez entrer la variable',
    loop: 'Variable de boucle',
  },
  condition: {
    title: 'Condition d\'exécution',
    front: 'Précondition',
    AND: 'Tout',
    OR: 'N\'importe lequel',
    text: 'Après l\'exécution du nœud connecté, exécuter le nœud actuel',
  },
  validate: {
    startNodeRequired: 'Le nœud de démarrage est obligatoire',
    startNodeOnly: 'Un seul nœud de démarrage est autorisé',
    baseNodeRequired: 'Le nœud d\'information de base est obligatoire',
    baseNodeOnly: 'Un seul nœud d\'information de base est autorisé',
    notInWorkFlowNode: 'Nœud non présent dans le workflow',
    noNextNode: 'Le nœud suivant n\'existe pas',
    nodeUnavailable: 'Nœud non disponible',
    needConnect1: 'La branche du nœud doit être connectée',
    cannotEndNode: 'Ce nœud ne peut pas être utilisé comme nœud final',
    loopNodeBreakNodeRequired: 'La boucle sans fil doit avoir un nœud Break',
  },
  nodes: {
    classify: {
      aiCapability: 'Capacité IA',
      businessLogic: 'Logique métier',
      other: 'Autre',
      dataProcessing: 'Traitement des données',
    },
    startNode: {
      label: 'Démarrer',
      question: 'Question utilisateur',
      currentTime: 'Heure actuelle',
    },
    baseNode: {
      label: 'Information de base',
      appName: {
        label: 'Nom de l\'application',
      },
      appDescription: {
        label: 'Description de l\'application',
      },
      fileUpload: {
        label: 'Téléchargement de fichier',
        tooltip: 'Lorsqu\'activé, la page Q&R affichera un bouton de téléchargement de fichier.',
      },
      FileUploadSetting: {
        title: 'Paramètres de téléchargement de fichier',
        maxFiles: 'Nombre maximum de fichiers par téléchargement',
        fileLimit: 'Taille maximale par fichier (Mo)',
        fileUploadType: {
          label: 'Types de fichiers autorisés pour le téléchargement',
          documentText: 'Nécessite le nœud "Extraction de contenu de document" pour analyser le contenu du document',
          imageText: 'Nécessite le nœud "Compréhension d\'image" pour analyser le contenu de l\'image',
          videoText: 'Nécessite le nœud "Compréhension de vidéo" pour analyser le contenu de la vidéo',
          audioText: 'Nécessite le nœud "Parole vers texte" pour analyser le contenu audio',
        },
      },
    },
    aiChatNode: {
      label: 'Chat IA',
      text: 'Converser avec un modèle IA',
      answer: 'Contenu IA',
      returnContent: {
        label: 'Contenu de retour',
        tooltip: `Si désactivé, le contenu de ce nœud ne sera pas affiché à l\'utilisateur.
                  Si vous voulez que l\'utilisateur voie la sortie de ce nœud, veuillez activer l\'interrupteur.`,
      },
      defaultPrompt: 'Informations connues',
      think: 'Processus de réflexion',
      historyMessage: 'Historique de conversation',
    },
    searchKnowledgeNode: {
      label: 'Récupération de connaissance',
      text: 'Permet d\'interroger le contenu textuel lié aux questions des utilisateurs à partir de la connaissance',
      paragraph_list: 'Liste des segments récupérés',
      is_hit_handling_method_list: 'Liste des segments répondant aux critères de réponse directe',
      result: 'Résultat de recherche',
      directly_return: 'Contenu des segments répondant aux critères de réponse directe',
      searchParam: 'Paramètres de récupération',
      searchQuestion: {
        label: 'Question',
        placeholder: 'Veuillez sélectionner une question de recherche',
        requiredMessage: 'Veuillez sélectionner une question de recherche',
      },
    },
    searchDocumentNode: {
      label: 'Récupération de balise de document',
      text: 'Rechercher des documents répondant aux conditions en fonction de la balise de document dans la portée de recherche spécifiée',
      selectKnowledge: 'Portée de recherche',
      searchSetting: 'Paramètres de recherche',
      custom: 'Manuel',
      customTooltip: 'Définir manuellement les conditions de filtrage des balises',
      auto: 'Automatique',
      autoTooltip: 'Filtrer automatiquement les conditions de balise en fonction de la question de recherche',
      document_list: 'Liste de documents',
      knowledge_list: 'Liste de base de connaissances',
      result: 'Résultats de recherche',
      searchParam: 'Paramètres de recherche',
      select_variable: 'Sélectionner une variable',
      valueMessage: `Valeur ou {name} `,
      showKnowledge: {
        label: 'Les résultats sont affichés dans la source de connaissance',
        requiredMessage: 'Veuillez définir les paramètres',
      },
      searchQuestion: {
        label: 'Question de recherche',
        placeholder: 'Veuillez sélectionner une question de recherche',
        requiredMessage: 'Veuillez sélectionner une question de recherche',
      },
    },
    questionNode: {
      label: 'Optimisation de question',
      text: 'Optimiser et améliorer la question actuelle en fonction de l\'historique de conversation pour mieux correspondre aux segments de connaissance',
      result: 'Résultat de question optimisée',
      systemDefault: `#Rôle
Vous êtes un maître de l'optimisation de problèmes, expert pour déduire avec précision les intentions des utilisateurs en fonction du contexte et optimiser les questions posées par les utilisateurs.

##Compétences
###Compétence 1 : Optimisation des problèmes
2. Recevoir les questions saisies par l'utilisateur.
3. Analyser soigneusement le sens du problème en fonction du contexte.
4. Sortir les problèmes optimisés.

##Limitations :
-Ne retourner que le problème optimisé sans explication ou clarification supplémentaire.
-S'assurer que le problème optimisé reflète avec précision l'intention du problème original et ne modifie pas l'intention originale.`,
    },
    conditionNode: {
      label: 'Branche conditionnelle',
      text: 'Déclencher différents nœuds en fonction des conditions',
      branch_name: 'Nom de branche',
      conditions: {
        label: 'Conditions',
        info: 'Répond aux conditions suivantes',
        requiredMessage: 'Veuillez sélectionner les conditions',
      },
      valueMessage: 'Veuillez entrer une valeur',
      addCondition: 'Ajouter une condition',
      addBranch: 'Ajouter une branche',
    },
    replyNode: {
      label: 'Réponse spécifiée',
      text: 'Spécifier le contenu de réponse, les variables référencées seront converties en chaînes pour la sortie',
      replyContent: 'Contenu de réponse',
    },
    rerankerNode: {
      label: 'Rappel multi-chemin',
      text: 'Utiliser un modèle de reclassement pour affiner les résultats de récupération de plusieurs sources de connaissance',
      result_list: 'Liste de résultats reclassés',
      result: 'Résultat de reclassement',
      rerankerContent: {
        label: 'Contenu de reclassement',
        requiredMessage: 'Veuillez sélectionner le contenu de reclassement',
      },
      higher: 'Supérieur',
      ScoreTooltip: 'Plus le score est élevé, plus la pertinence est forte.',
      max_paragraph_char_number: 'Caractère maximum',
      reranker_model: {
        label: 'Rerank',
        placeholder: 'Veuillez sélectionner un rerank',
      },
    },
    formNode: {
      label: 'Saisie de formulaire',
      text: 'Collecter l\'entrée utilisateur pendant les Q&R et l\'utiliser dans les processus suivants',
      form_content_format1: 'Bonjour, veuillez remplir le formulaire ci-dessous :',
      form_content_format2: 'Cliquez sur le bouton [Soumettre] après l\'avoir rempli.',
      form_data: 'Tout le contenu du formulaire',
      formContent: {
        label: 'Contenu de sortie du formulaire',
        requiredMessage:
          'Veuillez définir le contenu de sortie de ce nœud, { form } est un espace réservé pour le formulaire.',
        tooltip: 'Définir le contenu de sortie de ce nœud. { form } est un espace réservé pour le formulaire',
      },
      formAllContent: 'Tout le contenu du formulaire',
      formSetting: 'Configuration du formulaire',
    },
    documentExtractNode: {
      label: 'Extraction de contenu de document',
      text: 'Extraire le contenu des documents',
      content: 'Contenu du document',
    },
    imageUnderstandNode: {
      label: 'Compréhension d\'image',
      text: 'Analyser les images pour identifier les objets, les scènes et fournir des réponses',
      answer: 'Contenu IA',
      model: {
        label: 'Modèle de vision',
        requiredMessage: 'Veuillez sélectionner un modèle de vision',
      },
      image: {
        label: 'Sélectionner une image',
        requiredMessage: 'Veuillez sélectionner une image',
      },
    },
    variableAssignNode: {
      label: 'Assignation de variable',
      text: 'Mettre à jour la valeur de la variable globale',
      assign: 'Définir la valeur',
    },
    variableAggregationNode: {
      label: 'Agrégation de variable',
      text: 'Agréger les variables de chaque groupe selon la stratégie d\'agrégation',
      Strategy: 'Stratégie d\'agrégation',
      placeholder: 'Retourner la première valeur non nulle de chaque groupe',
      placeholder1: 'Retourner l\'ensemble des variables pour chaque groupe',
      group: {
        noneError: 'Le nom ne peut pas être vide',
        dupError: 'Le nom ne peut pas être dupliqué',
      },
      addGroup: 'Ajouter un groupe',
      editGroup: 'Modifier le groupe',
    },
    mcpNode: {
      label: 'Nœud MCP',
      text: 'Appeler les services MCP externes pour traiter les données',
      getToolsSuccess: 'Outils récupérés avec succès',
      getTool: 'Récupérer les outils',
      toolParam: 'Paramètres d\'outil',
      mcpServerTip: 'Veuillez entrer la configuration du serveur MCP au format JSON',
      mcpToolTip: 'Veuillez sélectionner un outil',
      configLabel: 'Configuration du serveur MCP (Seuls les appels SSE/HTTP streamable sont supportés)',
      reference: 'Référence MCP',
    },
    imageGenerateNode: {
      label: 'Génération d\'image',
      text: 'Générer des images basées sur le contenu textuel fourni',
      answer: 'Contenu IA',
      model: {
        label: 'Modèle de génération d\'image',
        requiredMessage: 'Veuillez sélectionner un modèle de génération d\'image',
      },
      prompt: {
        label: 'Prompt positif',
        tooltip: 'Décrire les éléments et caractéristiques visuelles que vous voulez dans l\'image générée',
      },
      negative_prompt: {
        label: 'Prompt négatif',
        tooltip: 'Décrire les éléments que vous voulez exclure de l\'image générée',
        placeholder:
          'Veuillez décrire le contenu que vous ne voulez pas générer, comme les couleurs, le contenu sanglant',
      },
    },
    textToVideoGenerate: {
      label: 'Texte vers vidéo',
      text: 'Générer une vidéo basée sur le contenu textuel fourni',
      answer: 'Contenu de réponse IA',
      model: {
        label: 'Modèle texte vers vidéo',
        requiredMessage: 'Veuillez sélectionner un modèle texte vers vidéo',
      },
      prompt: {
        label: 'Prompt (Positif)',
        tooltip:
          'Prompt positif, utilisé pour décrire les éléments et caractéristiques visuelles attendues dans la vidéo générée',
      },
      negative_prompt: {
        label: 'Prompt (Négatif)',
        tooltip:
          'Prompt négatif, utilisé pour décrire le contenu que vous ne voulez pas voir dans la vidéo, ce qui peut restreindre la génération de vidéo',
        placeholder:
          'Veuillez décrire le contenu vidéo que vous ne voulez pas générer, comme : couleurs, contenu sanglant',
      },
    },
    imageToVideoGenerate: {
      label: 'Image vers vidéo',
      text: 'Générer une vidéo basée sur les images fournies',
      answer: 'Contenu de réponse IA',
      model: {
        label: 'Modèle image vers vidéo',
        requiredMessage: 'Veuillez sélectionner un modèle image vers vidéo',
      },
      prompt: {
        label: 'Prompt (Positif)',
        tooltip:
          'Prompt positif, utilisé pour décrire les éléments et caractéristiques visuelles attendues dans la vidéo générée',
      },
      negative_prompt: {
        label: 'Prompt (Négatif)',
        tooltip:
          'Prompt négatif, utilisé pour décrire le contenu que vous ne voulez pas voir dans la vidéo, ce qui peut restreindre la génération de vidéo',
        placeholder:
          'Veuillez décrire le contenu vidéo que vous ne voulez pas générer, comme : couleurs, contenu sanglant',
      },
      first_frame: {
        label: 'Image de première image',
        requiredMessage: 'Veuillez sélectionner l\'image de première image',
      },
      last_frame: {
        label: 'Image de dernière image',
        requiredMessage: 'Veuillez sélectionner l\'image de dernière image',
      },
    },
    speechToTextNode: {
      label: 'Parole vers texte',
      text: 'Convertir l\'audio en texte via le modèle de reconnaissance vocale',
      stt_model: {
        label: 'Modèle de reconnaissance vocale',
      },
      audio: {
        label: 'Sélectionner un fichier audio',
        placeholder: 'Veuillez sélectionner un fichier audio',
      },
    },
    textToSpeechNode: {
      label: 'TTS',
      text: 'Convertir le texte en audio via le modèle de synthèse vocale',
      tts_model: {
        label: 'Modèle de synthèse vocale',
      },
      content: {
        label: 'Sélectionner le contenu texte',
      },
    },
    toolNode: {
      label: 'Outil personnalisé',
      text: 'Exécuter des scripts personnalisés pour réaliser le traitement de données',
    },
    intentNode: {
      label: 'Nœud d\'intention',
      text: 'Faire correspondre les questions des utilisateurs avec les classifications d\'intention définies par l\'utilisateur',
      other: 'autre',
      error2: 'Intention répétée',
      placeholder: 'Veuillez choisir une option de classification',
      classify: {
        label: 'Classification d\'intention',
        placeholder: 'Veuillez saisir',
      },
      input: {
        label: 'Entrée',
      },
    },
    applicationNode: {
      label: 'Nœud APP',
    },
    loopNode: {
      label: 'Nœud de boucle',
      text: 'Répéter une série de tâches en définissant le nombre de boucles et la logique',
      loopType: {
        label: 'Type de boucle',
        requiredMessage: 'Veuillez sélectionner un type de boucle',
        arrayLoop: 'Boucle de tableau',
        numberLoop: 'Boucle pour nombre spécifié',
        infiniteLoop: 'Boucle infinie',
      },
      loopNumber: {
        label: 'Nombre de boucles',
        requiredMessage: 'Veuillez entrer le nombre de boucles',
      },
      loopArray: {
        label: 'Tableau circulaire',
        requiredMessage: 'Le tableau circulaire est obligatoire',
        placeholder: 'Veuillez sélectionner un tableau circulaire',
      },
      loopSetting: 'Paramètres de boucle',
      loopDetail: 'Détails de boucle',
    },
    loopStartNode: {
      label: 'Démarrage de boucle',
      loopIndex: 'Index',
      loopItem: 'Élément de boucle',
    },
    loopBodyNode: {
      label: 'Corps de boucle',
      text: 'Corps de boucle',
    },
    loopContinueNode: {
      label: 'Continue',
      text: 'Utilisé pour terminer la boucle actuelle et passer à la suivante.',
      isContinue: 'Continue',
    },
    loopBreakNode: {
      label: 'Break',
      text: 'Terminer la boucle actuelle et sortir du corps de boucle',
      isBreak: 'Break',
    },
    variableSplittingNode: {
      label: 'Fractionnement de variable',
      text: 'En configurant les expressions JSON Path, analyser et fractionner la variable au format JSON d\'entrée',
      result: 'Résultat',
      splitVariables: 'Fractionner les variables',
      inputVariables: 'Variable d\'entrée',
      addVariables: 'Ajouter des variables',
      editVariables: 'Modifier les variables',
      variableListPlaceholder: 'Veuillez ajouter des variables de fractionnement',
      expression: {
        label: 'Expression',
        placeholder: 'Veuillez entrer l\'expression',
        tooltip: 'Veuillez utiliser les expressions JSON Path pour fractionner les variables, par exemple : $.store.book',
      },
    },
    parameterExtractionNode: {
      label: 'Extraction de paramètres',
      text: 'Utiliser les modèles IA pour extraire des paramètres structurés',
      extractParameters: {
        label: 'Extraire les paramètres',
        variableListPlaceholder: 'Veuillez ajouter des paramètres d\'extraction',
        parameterType: 'Type de paramètre',
      },
    },
  },
  compare: {
    is_null: 'Est nul',
    is_not_null: 'N\'est pas nul',
    contain: 'Contient',
    not_contain: 'Ne contient pas',
    eq: 'Égal à',
    ge: 'Supérieur ou égal à',
    gt: 'Supérieur à',
    le: 'Inférieur ou égal à',
    lt: 'Inférieur à',
    len_eq: 'Longueur égale à',
    len_ge: 'Longueur supérieure ou égale à',
    len_gt: 'Longueur supérieure à',
    len_le: 'Longueur inférieure ou égale à',
    len_lt: 'Longueur inférieure à',
  },
  SystemPromptPlaceholder: 'Prompt système, peut référencer des variables dans le système, telles que',
  UserPromptPlaceholder: 'Prompt utilisateur, peut référencer des variables dans le système, telles que',
}
