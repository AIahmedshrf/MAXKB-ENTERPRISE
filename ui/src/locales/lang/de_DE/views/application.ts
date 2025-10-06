export default {
  title: 'APP',
  createApplication: 'Einfache APP erstellen',
  createWorkFlowApplication: 'Workflow-APP erstellen',
  importApplication: 'APP importieren',
  copyApplication: 'APP kopieren',
  workflow: 'WORKFLOW',
  simple: 'EINFACH',
  simplePlaceholder: 'Geeignet für Einsteiger, um einen Assistenten über Formulareinstellungen zu erstellen',
  workflowPlaceholder:
    'Geeignet für fortgeschrittene Benutzer, um komplexe logische AI-Assistenten mit Low-Code-Drag-and-Drop zu erstellen',
  appTest: 'Debug-Vorschau',
  searchBar: {
    placeholder: 'Nach Namen suchen',
  },
  status: {
    published: 'Veröffentlicht',
    unpublished: 'Nicht veröffentlicht',
  },
  operation: {
    addModel: 'Modell hinzufügen',
    toChat: 'Chat',
    publish: 'Veröffentlichen',
  },
  delete: {
    confirmTitle: 'Sind Sie sicher, dass Sie diese APP löschen möchten: ',
    confirmMessage:
      'Das Löschen dieser APP beendet deren Dienste. Bitte gehen Sie vorsichtig vor.',
  },
  tip: {
    publishSuccess: 'Erfolgreich veröffentlicht',
    ExportError: 'Export fehlgeschlagen',
    professionalMessage:
      'Die Community Edition unterstützt bis zu 5 APPs. Wenn Sie mehr benötigen, aktualisieren Sie bitte auf die Professional Edition.',
    saveErrorMessage: 'Speichern fehlgeschlagen. Bitte überprüfen Sie Ihre Eingaben oder versuchen Sie es später erneut.',
    loadingErrorMessage: 'Konfiguration konnte nicht geladen werden. Bitte überprüfen Sie Ihre Eingaben oder versuchen Sie es später erneut.',
  },

  form: {
    appName: {
      label: 'Name',
      placeholder: 'Bitte den APP-Namen eingeben',
      requiredMessage: 'APP-Name ist erforderlich',
    },
    appDescription: {
      label: 'Beschreibung',
      placeholder:
        'Beschreiben Sie das Szenario und die Verwendung der APP, z. B.: XXX-Assistent, der Benutzerfragen zur Nutzung des XXX-Produkts beantwortet',
    },
    appType: {
      label: 'Typ',
      simplePlaceholder: 'Geeignet für Einsteiger zur Erstellung eines Assistenten.',
      workflowPlaceholder: 'Geeignet für fortgeschrittene Benutzer, um den Workflow des Assistenten anzupassen',
    },
    appTemplate: {
      blankApp: {
        title: 'Leere APP',
      },
      assistantApp: {
        title: 'Wissensassistent',
        description: 'Geeignet für fortgeschrittene Benutzer zur Anpassung des Workflows des Assistenten',
      },
    },
    aiModel: {
      label: 'AI-Modell',
      placeholder: 'Bitte ein AI-Modell auswählen',
    },
    roleSettings: {
      label: 'System-Prompt',
      placeholder:
        'System-Prompt. Sie können Variablen im System referenzieren: {data} ist das im Wissensspeicher gefundene Segment; {question} ist die vom Benutzer gestellte Frage.',
      tooltip: 'Legen Sie die Rolle oder Anweisungen fest, denen das Modell folgen soll',
    },

    prompt: {
      label: 'Benutzer-Prompt',
      noReferences: '（Kein referenziertes Wissen）',
      references: ' (Referenziertes Wissen)',
      placeholder:
        'Benutzer-Prompt. Sie können Variablen im System referenzieren: {data} ist das im Wissensspeicher gefundene Segment; {question} ist die vom Benutzer gestellte Frage',
      requiredMessage: 'Bitte Benutzer-Prompt eingeben',
      tooltip:
        'Die Frage oder der Befehl, den der Benutzer an das Modell richtet',

      noReferencesTooltip:
        'Durch Anpassen des Prompt-Inhalts können Sie die Richtung des Modells steuern. Dieser Prompt wird am Anfang des Kontexts fixiert. Verwendete Variable: {question} ist die vom Benutzer gestellte Frage.',
      referencesTooltip:
        'Durch Anpassen des Prompt-Inhalts können Sie die Richtung des Modells steuern. Dieser Prompt wird am Anfang des Kontexts fixiert. Verwendete Variablen: {data} enthält bekannte Informationen aus dem Wissen; {question} ist die vom Benutzer gestellte Frage.',
      defaultPrompt: `Bekannte Informationen: {data}
        Frage: {question}
         Antwortanforderungen:
         - Bitte verwenden Sie eine präzise und professionelle Ausdrucksweise, um die Frage des Benutzers zu beantworten.
         `,
    },
    historyRecord: {
      label: 'Chat-Verlauf',
    },
    relatedKnowledge: {
      label: 'Verknüpftes Wissen',
      placeholder: 'Verknüpfte Wissenselemente werden hier angezeigt',
    },
    multipleRoundsDialogue: 'Mehrstufiger Dialog',

    prologue: 'Einleitung',
    defaultPrologue:
      'Hallo, ich bin der XXX-Assistent. Sie können mir Fragen zur Verwendung von XXX stellen.\n- Welche Hauptfunktionen hat XXX?\n- Welches LLM unterstützt XXX?\n- Welche Dokumenttypen unterstützt XXX?',
    problemOptimization: {
      label: 'Fragenoptimierung',
      tooltip:
        'Optimiert die aktuelle Frage basierend auf dem Chat-Verlauf, um die Wissenspunkte besser zuzuordnen.',
    },

    voiceInput: {
      label: 'Spracheingabe',
      placeholder: 'Bitte ein Spracherkennungsmodell auswählen',
      requiredMessage: 'Bitte ein Sprachmodell für die Eingabe auswählen',
      autoSend: 'Automatisches Senden',
    },
    voicePlay: {
      label: 'Sprachausgabe',
      placeholder: 'Bitte ein Sprachsynthesemodell auswählen',
      requiredMessage: 'Bitte ein Modell für die Sprachausgabe auswählen',
      autoPlay: 'Automatische Wiedergabe',
      browser: 'Wiedergabe im Browser (kostenlos)',
      tts: 'TTS-Modell',
      listeningTest: 'Vorschau',
    },
    reasoningContent: {
      label: 'Ausgabe – Denkprozess',
      tooltip:
        'Bitte das Denk-Label basierend auf der Modellausgabe festlegen. Der Inhalt zwischen den Labels wird als Denkprozess erkannt.',
      start: 'Start',
      end: 'Ende',
    },
    mcp_output_enable: 'Ausgabe MCP/Tool-Ausführungsprozess',
  },
  generateDialog: {
    label: 'Generieren',
    generatePrompt: 'Prompt generieren',
    placeholder: 'Bitte das Thema des Prompts eingeben',
    title: 'Der Prompt wird hier angezeigt',
    remake: 'Neu generieren',
    stop: 'Generierung stoppen',
    continue: 'Weiter generieren',
    replace: 'Ersetzen',
    exit: 'Sind Sie sicher, dass Sie beenden und den von der AI erzeugten Inhalt verwerfen möchten?',
    loading: 'Wird generiert...',
  },
  dialog: {
    addKnowledge: 'Verknüpftes Wissen hinzufügen',
    addKnowledgePlaceholder: 'Das ausgewählte Wissen muss dasselbe Embedding-Modell verwenden',
    selectSearchMode: 'Suchmodus auswählen',
    vectorSearch: 'Vektorsuche',
    vectorSearchTooltip:
      'Die Vektorsuche basiert auf Distanzberechnungen zwischen Vektoren und eignet sich für große Datenmengen im Wissen.',
    fullTextSearch: 'Volltextsuche',
    fullTextSearchTooltip:
      'Die Volltextsuche basiert auf Textähnlichkeit und eignet sich für kleine Datenmengen im Wissen.',
    hybridSearch: 'Hybridsuche',
    hybridSearchTooltip:
      'Die Hybridsuche kombiniert Vektor- und Textähnlichkeit und eignet sich für mittlere Datenmengen im Wissen.',
    similarityThreshold: 'Ähnlichkeit höher als',
    similarityTooltip: 'Je höher die Ähnlichkeit, desto stärker die Korrelation.',
    topReferences: 'Top-N-Segmente',
    maxCharacters: 'Maximale Zeichen pro Referenz',
    noReferencesAction: 'Wenn keine Wissensreferenzen vorhanden sind',
    continueQuestioning: 'Weitere Fragen an das AI-Modell stellen',
    provideAnswer: 'Antwortinhalt festlegen',
    designated_answer:
      'Hallo, ich bin der XXX-Assistent. Mein Wissen enthält nur Informationen zu XXX-Produkten. Bitte formulieren Sie Ihre Frage um.',
    defaultPrompt1:
      "Der Inhalt in den Klammern () stellt die Frage des Benutzers dar. Bitte ergänzen Sie basierend auf dem Kontext die Benutzerfrage ({question}). Die Ausgabe soll eine vollständige Frage enthalten und diese in das",
    defaultPrompt2: 'Tag einfügen',
  },
  applicationAccess: {
    title: 'APP-Zugriff',
    wecom: 'WeCom',
    wecomTip: 'Intelligente WeCom-APP erstellen',
    wecomBot: 'WeCom-Bot',
    wecomBotTip: 'Intelligenten WeCom-Bot erstellen',
    dingtalk: 'DingTalk',
    dingtalkTip: 'Intelligente DingTalk-APP erstellen',
    wechat: 'WeChat',
    wechatTip: 'Intelligente WeChat-APP erstellen',
    lark: 'Lark',
    larkTip: 'Intelligente Lark-APP erstellen',
    setting: 'Einstellungen',
    callback: 'Callback-Adresse',
    callbackTip: 'Bitte die Callback-Adresse ausfüllen',
    wecomPlatform: 'WeCom Open Platform',
    wechatPlatform: 'WeChat Open Platform',
    dingtalkPlatform: 'DingTalk Open Platform',
    larkPlatform: 'Lark Open Platform',
    slack: 'Slack',
    slackTip: 'Intelligente Slack-APP erstellen',
    wecomSetting: {
      title: 'WeCom-Konfiguration',
      cropId: 'Crop ID',
      cropIdPlaceholder: 'Bitte Crop ID eingeben',
      agentIdPlaceholder: 'Bitte Agent ID eingeben',
      secretPlaceholder: 'Bitte Secret eingeben',
      tokenPlaceholder: 'Bitte Token eingeben',
      encodingAesKeyPlaceholder: 'Bitte EncodingAESKey eingeben',
      authenticationSuccessful: 'Erfolgreich',
      urlInfo:
        '-APP-Verwaltung → Selbst erstellt → Erstellte APP → Nachrichten empfangen → „URL“ für API festlegen',
    },
    dingtalkSetting: {
      title: 'DingTalk-Konfiguration',
      clientIdPlaceholder: 'Bitte Client ID eingeben',
      clientSecretPlaceholder: 'Bitte Client Secret eingeben',
      urlInfo:
        '-Auf der Bot-Seite den „Nachrichtenempfangsmodus“ auf HTTP stellen und die obige URL in „Nachrichtenempfangsadresse“ einfügen',
    },
    wechatSetting: {
      title: 'WeChat-Konfiguration',
      appId: 'APP ID',
      appIdPlaceholder: 'Bitte APP ID eingeben',
      appSecret: 'APP SECRET',
      appSecretPlaceholder: 'Bitte APP SECRET eingeben',
      token: 'TOKEN',
      tokenPlaceholder: 'Bitte TOKEN eingeben',
      aesKey: 'Nachrichtenverschlüsselungsschlüssel',
      aesKeyPlaceholder: 'Bitte den Nachrichtenverschlüsselungsschlüssel eingeben',
      urlInfo:
        '-Einstellungen und Entwicklung → Grundkonfiguration → „Server Address URL“ in der Serverkonfiguration',
    },
    wecomBotSetting: {
      title: 'WeCom-Bot-Konfiguration',
      urlInfo: '-Verwaltungstools → Intelligenter Bot → Bot erstellen → API-Modus „URL“ festlegen',
    },
    larkSetting: {
      title: 'Lark-Konfiguration',
      appIdPlaceholder: 'Bitte APP ID eingeben',
      appSecretPlaceholder: 'Bitte APP Secret eingeben',
      verificationTokenPlaceholder: 'Bitte Verifikationstoken eingeben',
      urlInfo:
        '-Ereignisse und Rückrufe → Ereigniskonfiguration → „Anfrageadresse“ der Abonnementmethode konfigurieren',
    },
    slackSetting: {
      title: 'Slack-Konfiguration',
      signingSecretPlaceholder: 'Bitte Signing Secret eingeben',
      botUserTokenPlaceholder: 'Bitte Bot User Token eingeben',
    },
    copyUrl: 'Link kopieren und einfügen',
  },
  hitTest: {
    title: 'Retrieval-Test',
    text: 'Testen Sie die Trefferwirkung des Wissens basierend auf der angegebenen Suchanfrage.',
    emptyMessage1: 'Ergebnisse des Retrieval-Tests werden hier angezeigt',
    emptyMessage2: 'Keine passenden Abschnitte gefunden',
  },
  publishTime: 'Veröffentlichungszeit',
}
