export default {
  title: 'Wissen',
  relatedApplications: 'Verknüpfte App',
  document_count: 'Dokumente',
  relatedApp_count: 'Verknüpfte Apps',
  searchBar: {
    placeholder: 'Nach Name suchen',
  },
  setting: {
    vectorization: 'Vektorisierung',
    sync: 'Synchronisieren',
  },
  tip: {
    professionalMessage:
      'Die Community Edition unterstützt bis zu 50 Wissenseinträge. Für mehr Wissenseinträge bitte auf die Professional Edition upgraden.',
    syncSuccess: 'Synchronisierungsauftrag erfolgreich gesendet',
    updateModeMessage:
      'Nach Änderung des Wissens-Vektormodells muss das Wissen erneut vektorisiert werden. Möchten Sie das Speichern fortsetzen?',
  },
  delete: {
    confirmTitle: 'Löschung des Wissens bestätigen:',
    confirmMessage1: 'Dieses Wissen ist verknüpft mit',
    confirmMessage2: 'APP. Das Löschen ist unwiderruflich. Bitte vorsichtig fortfahren.',
  },
  knowledgeType: {
    label: 'Typ',
    generalKnowledge: 'Allgemeines Wissen',
    webKnowledge: 'Web-Wissen',
    larkKnowledge: 'Lark-Wissen',
    yuqueKnowledge: 'Yuque-Wissen',
    generalInfo: 'Lokale Dokumente hochladen',
    webInfo: 'Textdaten von einer Website synchronisieren',
    larkInfo: 'Wissen über Lark-Dokumente erstellen',
    yuqueInfo: 'Wissen über Yuque-Dokumente erstellen',
    createGeneralKnowledge: 'Allgemeines Wissen erstellen',
    createWebKnowledge: 'Web-Wissen erstellen',
    createLarkKnowledge: 'Lark-Wissen erstellen',
    createYuqueKnowledge: 'Yuque-Wissen erstellen',
  },
  form: {
    knowledgeName: {
      label: 'Name',
      placeholder: 'Bitte den Wissensnamen eingeben',
      requiredMessage: 'Bitte den Wissensnamen eingeben',
    },
    knowledgeDescription: {
      label: 'Beschreibung',
      placeholder:
        'Beschreiben Sie den Inhalt des Wissens. Eine detaillierte Beschreibung hilft der AI, den Inhalt besser zu verstehen und die Genauigkeit der Abfrageergebnisse zu verbessern.',
      requiredMessage: 'Bitte die Wissensbeschreibung eingeben',
    },
    EmbeddingModel: {
      label: 'Embedding Model',
      placeholder: 'Bitte ein Embedding Model auswählen',
      requiredMessage: 'Bitte das Embedding Model auswählen',
    },

    source_url: {
      label: 'Web-Root-URL',
      placeholder: 'Bitte die Web-Root-URL eingeben',
      requiredMessage: 'Bitte die Web-Root-URL eingeben',
    },
    selector: {
      label: 'Selektor',
      placeholder: 'Standard ist body; kann .classname / #idname / tagname enthalten',
    },
    file_count_limit: {
      label: 'Maximale Anzahl gleichzeitig hochgeladener Dateien',
    },
    file_size_limit: {
      label: 'Maximale Dateigröße pro Dokument (MB)',
      placeholder: 'Empfohlen entsprechend der Serverkonfiguration, um Ausfälle zu vermeiden',
    },
  },

  ResultSuccess: {
    title: 'Wissen erfolgreich erstellt',
    paragraph: 'Segmente',
    paragraph_count: 'Segmente',
    documentList: 'Dokumentenliste',
    loading: 'Importieren',
    buttons: {
      toKnowledge: 'Zur Wissensliste zurückkehren',
      toDocument: 'Zum Dokument wechseln',
    },
  },
  syncWeb: {
    title: 'Wissen synchronisieren',
    syncMethod: 'Synchronisierungsmethode',
    replace: 'Ersetzen',
    replaceText: 'Website-Dokumente erneut abrufen und lokale Wissensdokumente ersetzen',
    complete: 'Vollständige Synchronisierung',
    completeText: 'Alle lokalen Wissensdokumente löschen und Website-Dokumente erneut abrufen',
    tip: 'Hinweis: Alle Synchronisierungen löschen bestehende Daten und rufen neue Daten ab. Bitte vorsichtig fortfahren.',
  },
}
