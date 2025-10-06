export default {
  title: 'Modelle',
  provider: 'Anbieter',
  providerPlaceholder: 'Anbieter auswählen',
  addModel: 'Modell hinzufügen',

  delete: {
    confirmTitle: 'Modell löschen:',
    confirmMessage:
      'Das Löschen dieses Modells wirkt sich auf derzeit verwendete Ressourcen aus. Bitte vorsichtig fortfahren.',
  },
  tip: {
    createSuccessMessage: 'Modell erfolgreich erstellt',
    createErrorMessage: 'Fehler in den Basisinformationen vorhanden',
    errorMessage: 'Variable existiert bereits: ',
    emptyMessage1: 'Bitte zuerst den Modelltyp und das Basismodell in den Basisinformationen auswählen',
    emptyMessage2: 'Das ausgewählte Modell unterstützt keine Parametereinstellungen',
    updateSuccessMessage: 'Modell erfolgreich aktualisiert',
    saveSuccessMessage: 'Modellparameter erfolgreich gespeichert',
    downloadError: 'Download fehlgeschlagen',
    noModel: 'Modell in Ollama nicht vorhanden',
  },
  modelType: {
    allModel: 'Alle Modelle',
    publicModel: 'Öffentliche Modelle',
    privateModel: 'Private Modelle',
    LLM: 'LLM',
    EMBEDDING: 'Embedding Model',
    RERANKER: 'Rerank',
    STT: 'Speech2Text',
    TTS: 'TTS',
    IMAGE: 'Vision Model',
    TTI: 'Image Generation',
    TTV: 'Text-to-Video',
    ITV: 'Image-to-Video',
  },
  modelForm: {
    title: {
      baseInfo: 'Basisinformationen',
      advancedInfo: 'Erweiterte Einstellungen',
      modelParams: 'Modellparameter',
      paramSetting: 'Modellparametereinstellungen',
      apiParamPassing: 'Schnittstellenparameter',
    },
    modeName: {
      label: 'Modellname',
      placeholder: 'Einen Namen für das Basismodell festlegen',
      tooltip: 'Benutzerdefinierter Modellname in MaxKB',
      requiredMessage: 'Modellname darf nicht leer sein',
    },
    permissionType: {
      label: 'Berechtigung',
      privateDesc: 'Nur für den aktuellen Benutzer verfügbar',
      publicDesc: 'Für alle Benutzer verfügbar',
      requiredMessage: 'Berechtigung darf nicht leer sein',
    },
    model_type: {
      label: 'Modelltyp',
      placeholder: 'Modelltyp auswählen',
      tooltip1: 'LLM: Inferenzmodell für AI-Chats in der APP.',
      tooltip2: 'Embedding Model: Modell zur Vektorisierung von Dokumentinhalten im Wissen.',
      tooltip3: 'Speech2Text: Modell zur Spracherkennung in der APP.',
      tooltip4: 'TTS: Modell zur Sprachausgabe (Text-to-Speech) in der APP.',
      tooltip5:
        'Rerank: Modell zur Neuordnung von Kandidatensegmenten bei der Multi-Route-Abfrage in fortgeschrittenen Orchestrierungs-APPs.',
      tooltip6:
        'Vision Model: Visuelles Modell zur Bildinterpretation in fortgeschrittenen Orchestrierungs-APPs.',
      tooltip7:
        'Image Generation: Visuelles Modell zur Bildgenerierung in fortgeschrittenen Orchestrierungs-APPs.',
      tooltip8:
        'Text-to-Video: Visuelles Modell zur Text-zu-Video-Generierung in der APP.',
      tooltip9:
        'Image-to-Video: Visuelles Modell zur Bild-zu-Video-Generierung in der APP.',
      requiredMessage: 'Modelltyp darf nicht leer sein',
    },
    base_model: {
      label: 'Basismodell',
      tooltip: 'Für Modelle, die nicht aufgelistet sind, den Modellnamen eingeben und Enter drücken',
      placeholder: 'Basismodellnamen eingeben und Enter drücken, um hinzuzufügen',
      requiredMessage: 'Basismodell darf nicht leer sein',
    },
  },
  download: {
    downloading: 'Wird heruntergeladen...',
    cancelDownload: 'Download abbrechen',
  },
}
