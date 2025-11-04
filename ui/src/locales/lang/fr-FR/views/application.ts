export default {
  title: 'APP',
  createApplication: 'Créer une APP simple',
  createWorkFlowApplication: 'Créer une APP workflow',
  importApplication: 'Importer une APP',
  copyApplication: 'Copier l\'APP',
  workflow: 'WORKFLOW',
  simple: 'SIMPLE',
  simplePlaceholder: 'Convient aux débutants pour créer un assistant avec des paramètres de formulaire',
  workflowPlaceholder:
    'Convient aux utilisateurs avancés pour construire des assistants IA à logique complexe en glisser-déposer low-code',
  appTest: 'Aperçu de débogage',
  searchBar: {
    placeholder: 'Rechercher par nom',
  },
  status: {
    published: 'Publié',
    unpublished: 'Non publié',
  },
  operation: {
    addModel: 'Ajouter un modèle',
    toChat: 'Conversation',
    publish: 'Publier',
  },
  delete: {
    confirmTitle: 'Êtes-vous sûr de vouloir supprimer cette APP : ',
    confirmMessage:
      'La suppression de cette APP ne fournira plus ses services. Veuillez procéder avec prudence.',
  },
  tip: {
    publishSuccess: 'Publié avec succès',
    ExportError: 'Échec de l\'exportation',
    professionalMessage:
      'L\'édition communautaire supporte jusqu\'à 5 APP. Si vous avez besoin de plus d\'APP, veuillez passer à l\'édition professionnelle.',
    saveErrorMessage: 'Échec de l\'enregistrement, veuillez vérifier votre saisie ou réessayer plus tard',
    loadingErrorMessage: 'Échec du chargement de la configuration, veuillez vérifier votre saisie ou réessayer plus tard',
  },

  form: {
    appName: {
      label: 'Nom',
      placeholder: 'Veuillez entrer le nom de l\'APP',
      requiredMessage: 'Le nom de l\'APP est obligatoire',
    },
    appDescription: {
      placeholder:
        'Décrivez le scénario et l\'utilisation de l\'APP, par exemple : assistant XXX répondant aux questions des utilisateurs sur l\'utilisation du produit XXX',
    },
    appType: {
      label: 'Type',
      simplePlaceholder: 'Convient aux débutants pour créer un assistant.',
      workflowPlaceholder: 'Convient aux utilisateurs avancés pour personnaliser le workflow de l\'assistant',
    },
    appTemplate: {
      blankApp: {
        title: 'APP vierge',
      },
      assistantApp: {
        title: 'Assistant de connaissance',
        description: 'Convient aux utilisateurs avancés pour personnaliser le workflow de l\'assistant',
      },
    },
    aiModel: {
      label: 'Modèle IA',
      placeholder: 'Veuillez sélectionner un modèle IA',
    },
    roleSettings: {
      label: 'Prompt système',
      placeholder:
        'Prompt système, vous pouvez référencer des variables dans le système : {data} représente le segment trouvé dans la base de connaissances ; {question} est la question posée par l\'utilisateur.',
      tooltip: 'Définir le rôle ou les instructions que le modèle doit suivre',
    },

    prompt: {
      label: 'Prompt utilisateur',
      noReferences: '（Aucune référence à la connaissance）',
      references: ' (Référence à la connaissance)',
      placeholder:
        'Prompt utilisateur, vous pouvez référencer des variables dans le système : {data} représente le segment trouvé dans la base de connaissances ; {question} est la question posée par l\'utilisateur',
      requiredMessage: 'Veuillez entrer le prompt utilisateur',
      tooltip:
        'La question ou la commande que l\'utilisateur pose au modèle',

      noReferencesTooltip:
        'En ajustant le contenu du prompt, vous pouvez guider la direction de la conversation du grand modèle. Ce prompt sera fixé au début du contexte. Variables utilisées : {question} est la question posée par l\'utilisateur.',
      referencesTooltip:
        'En ajustant le contenu du prompt, vous pouvez guider la direction de la conversation du grand modèle. Ce prompt sera fixé au début du contexte. Variables utilisées : {data} porte les informations connues de la connaissance ; {question} est la question posée par l\'utilisateur.',
      defaultPrompt: `Informations connues : {data}
        Question : {question}
         Exigences de réponse :
         - Veuillez utiliser un langage concis et professionnel pour répondre à la question de l\'utilisateur.
         `,
    },
    historyRecord: {
      label: 'Historique de conversation',
    },
    relatedKnowledge: {
      label: 'Connaissance associée',
      placeholder: 'Les connaissances associées sont affichées ici',
    },
    multipleRoundsDialogue: 'Dialogue multi-tours',

    prologue: 'Prologue',
    defaultPrologue:
      'Bonjour, je suis l\'assistant XXX. Vous pouvez me poser des questions sur l\'utilisation de XXX.\n- Quelles sont les principales fonctionnalités de XXX ?\n- Quels LLM sont supportés par XXX ?\n- Quels types de documents sont supportés par XXX ?',
    problemOptimization: {
      label: 'Optimisation des questions',
      tooltip:
        'Optimiser la question actuelle en fonction de l\'historique de conversation pour mieux correspondre aux points de connaissance.',
    },

    voiceInput: {
      label: 'Entrée vocale',
      placeholder: 'Veuillez sélectionner un modèle de reconnaissance vocale',
      requiredMessage: 'Veuillez sélectionner un modèle d\'entrée vocale',
      autoSend: 'Envoi automatique',
    },
    voicePlay: {
      label: 'Lecture vocale',
      placeholder: 'Veuillez sélectionner un modèle de synthèse vocale',
      requiredMessage: 'Veuillez sélectionner un modèle de lecture vocale',
      autoPlay: 'Lecture automatique',
      browser: 'Lecture par navigateur (gratuit)',
      tts: 'Modèle TTS',
      listeningTest: 'Aperçu',
    },
    reasoningContent: {
      label: 'Sortie de réflexion',
      tooltip:
        'Veuillez définir l\'étiquette de réflexion en fonction du retour du modèle, et le contenu entre les étiquettes sera reconnu comme le processus de réflexion.',
      start: 'Début',
      end: 'Fin',
    },
    mcp_output_enable: 'Sortie du processus d\'exécution MCP/Outil',
  },
  generateDialog: {
    label: 'Générer',
    generatePrompt: 'Générer un prompt',
    placeholder: 'Veuillez entrer le sujet du prompt',
    title: 'Le prompt est affiché ici',
    remake: 'Régénérer',
    stop: 'Arrêter la génération',
    continue: 'Continuer la génération',
    replace: 'Remplacer',
    exit: 'Êtes-vous sûr de vouloir quitter et abandonner le contenu généré par l\'IA ?',
    loading: 'Génération en cours...',
  },
  dialog: {
    addKnowledge: 'Ajouter une connaissance associée',
    addKnowledgePlaceholder: 'La connaissance sélectionnée doit utiliser le même modèle d\'embedding',
    selectSearchMode: 'Mode de récupération',
    vectorSearch: 'Recherche vectorielle',
    vectorSearchTooltip:
      'La recherche vectorielle est une méthode de récupération basée sur le calcul de distance vectorielle, adaptée aux grands volumes de données dans la connaissance.',
    fullTextSearch: 'Recherche en texte intégral',
    fullTextSearchTooltip:
      'La recherche en texte intégral est une méthode de récupération basée sur la similarité de texte, adaptée aux petits volumes de données dans la connaissance.',
    hybridSearch: 'Recherche hybride',
    hybridSearchTooltip:
      'La recherche hybride est une méthode de récupération basée à la fois sur la similarité vectorielle et textuelle, adaptée aux volumes moyens de données dans la connaissance.',
    similarityThreshold: 'Similarité supérieure à',
    similarityTooltip: 'Plus la similarité est élevée, plus la corrélation est forte.',
    topReferences: 'Top N segments',
    maxCharacters: 'Maximum de caractères par référence',
    noReferencesAction: 'Lorsqu\'il n\'y a aucune référence de connaissance',
    continueQuestioning: 'Continuer à poser des questions au modèle IA',
    provideAnswer: 'Spécifier le contenu de réponse',
    designated_answer:
      'Bonjour, je suis l\'assistant XXX. Ma connaissance contient uniquement des informations relatives aux produits XXX. Veuillez reformuler votre question.',
    defaultPrompt1:
      'Le contenu à l\'intérieur des parenthèses () représente la question de l\'utilisateur. En fonction du contexte, veuillez spéculer et compléter la question de l\'utilisateur ({question}). L\'exigence est de sortir une question complétée et de la placer',
    defaultPrompt2: 'étiquette',
  },
  applicationAccess: {
    title: 'Accès à l\'APP',
    wecom: 'WeCom',
    wecomTip: 'Créer une APP intelligente WeCom',
    wecomBot: 'Bot WeCom',
    wecomBotTip: 'Créer un Bot intelligent WeCom',
    dingtalk: 'DingTalk',
    dingtalkTip: 'Créer une APP intelligente DingTalk',
    wechat: 'WeChat',
    wechatTip: 'Créer une APP intelligente WeChat',
    lark: 'Lark',
    larkTip: 'Créer une APP intelligente Lark',
    setting: 'Paramètres',
    callback: 'Adresse de callback',
    callbackTip: 'Veuillez remplir l\'adresse de callback',
    wecomPlatform: 'Plateforme ouverte WeCom',
    wechatPlatform: 'Plateforme ouverte WeChat',
    dingtalkPlatform: 'Plateforme ouverte DingTalk',
    larkPlatform: 'Plateforme ouverte Lark',
    slack: 'Slack',
    slackTip: 'Créer une APP intelligente Slack',
    wecomSetting: {
      title: 'Configuration WeCom',
      cropId: 'ID Crop',
      cropIdPlaceholder: 'Veuillez entrer l\'ID crop',
      agentIdPlaceholder: 'Veuillez entrer l\'ID agent',
      secretPlaceholder: 'Veuillez entrer le secret',
      tokenPlaceholder: 'Veuillez entrer le token',
      encodingAesKeyPlaceholder: 'Veuillez entrer EncodingAESKey',
      authenticationSuccessful: 'Réussi',
      urlInfo:
        '-Gestion APP-Auto-construit-APP créée-Recevoir des messages-Définir l\'"URL" reçue par l\'API',
    },
    dingtalkSetting: {
      title: 'Configuration DingTalk',
      clientIdPlaceholder: 'Veuillez entrer l\'ID client',
      clientSecretPlaceholder: 'Veuillez entrer le secret client',
      urlInfo:
        '-Sur la page du robot, définir le "Mode de réception de message" en mode HTTP, et remplir l\'URL ci-dessus dans l\'"Adresse de réception de message"',
    },
    wechatSetting: {
      title: 'Configuration WeChat',
      appId: 'ID APP',
      appIdPlaceholder: 'Veuillez entrer l\'ID APP',
      appSecret: 'SECRET APP',
      appSecretPlaceholder: 'Veuillez entrer le SECRET APP',
      token: 'TOKEN',
      tokenPlaceholder: 'Veuillez entrer le TOKEN',
      aesKey: 'Clé de cryptage de message',
      aesKeyPlaceholder: 'Veuillez entrer la clé de cryptage de message',
      urlInfo:
        '-Paramètres et développement-Configuration de base-"URL d\'adresse serveur" dans la configuration serveur',
    },
    wecomBotSetting: {
      title: 'Configuration Bot WeCom',
      urlInfo: '-Outils de gestion-Bot intelligent-Créer un bot-Mode API Créer "URL"',
    },
    larkSetting: {
      title: 'Configuration Lark',
      appIdPlaceholder: 'Veuillez entrer l\'ID APP',
      appSecretPlaceholder: 'Veuillez entrer le secret APP',
      verificationTokenPlaceholder: 'Veuillez entrer le token de vérification',
      urlInfo:
        '-Événements et callbacks - configuration d\'événements - configurer l\'"adresse de demande" de la méthode d\'abonnement',
    },
    slackSetting: {
      title: 'Configuration Slack',
      signingSecretPlaceholder: 'Veuillez entrer le signing secret',
      botUserTokenPlaceholder: 'Veuillez entrer le bot user token',
    },
    copyUrl: 'Copier le lien et le remplir dans',
  },
  hitTest: {
    title: 'Test de récupération',
    text: 'Tester l\'effet de correspondance de la connaissance en fonction du texte de requête donné.',
    emptyMessage1: 'Les résultats du test de récupération s\'afficheront ici',
    emptyMessage2: 'Aucune section correspondante trouvée',
  },
  publishTime: 'Heure de publication',
}
