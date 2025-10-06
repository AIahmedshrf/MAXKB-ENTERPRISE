export default {
  uploadDocument: 'Dokument hochladen',
  importDocument: 'Dokument importieren',
  syncDocument: 'Dokument synchronisieren',
  items: 'Einträge',
  migrateDocument: 'Migrieren nach',
  searchBar: {
    placeholder: 'Nach Dokumentnamen suchen',
  },
  setting: {
    migration: 'Verschieben',
    cancelGenerateQuestion: 'Fragen-Generierung abbrechen',
    cancelVectorization: 'Vektorisierung abbrechen',
    cancelGenerate: 'Generierung abbrechen',
    export: 'Exportieren nach',
    download: 'Herunterladen',
  },

  tip: {
    saveMessage: 'Aktuelle Änderungen wurden nicht gespeichert. Möchten Sie den Vorgang wirklich beenden?',
    cancelSuccess: 'Erfolgreich',
    sendMessage: 'Erfolgreich',
    vectorizationSuccess: 'Erfolgreich',
    nameMessage: 'Dokumentname darf nicht leer sein!',
    importMessage: 'Erfolgreich',
    migrationSuccess: 'Erfolgreich',
    fileLimitCountTip1: 'Maximaler Upload pro Vorgang:',
    fileLimitCountTip2: 'Dateien',
    fileLimitSizeTip1: 'jede Datei darf nicht größer sein als',
  },
  upload: {
    selectFile: 'Datei auswählen',
    selectFiles: 'Ordner auswählen',
    uploadMessage: 'Dateien hierher ziehen, um sie hochzuladen oder',
    formats: 'Unterstützte Formate:',
    requiredMessage: 'Bitte eine Datei hochladen',
    errorMessage1: 'Die Dateigröße überschreitet 100 MB',
    errorMessage2: 'Nicht unterstütztes Dateiformat',
    errorMessage3: 'Datei darf nicht leer sein',
    errorMessage4: 'Es können maximal 50 Dateien gleichzeitig hochgeladen werden',
    template: 'Vorlage',
    download: 'Herunterladen',
  },

  fileType: {
    txt: {
      label: 'Textdatei',
      tip1: '1. Es wird empfohlen, Segmentierungsmarkierungen im Dokument vor dem Hochladen zu standardisieren.',
      tip2: '2. Bis zu 50 Dateien können gleichzeitig hochgeladen werden, wobei jede Datei 100 MB nicht überschreiten darf.',
    },
    table: {
      label: 'Tabelle',
      tip1: '1. Klicken Sie, um die entsprechende Vorlage herunterzuladen und die Informationen zu vervollständigen:',
      tip2: '2. Die erste Zeile muss Spaltenüberschriften enthalten, die aussagekräftige Begriffe darstellen. Jeder Datensatz in der Tabelle wird als Segment behandelt.',
      tip3: '3. Jedes Tabellenblatt in der hochgeladenen Datei wird als Dokument behandelt, wobei der Blattname als Dokumentname dient.',
      tip4: '4. Bis zu 50 Dateien können gleichzeitig hochgeladen werden, wobei jede Datei 100 MB nicht überschreiten darf.',
    },
    QA: {
      label: 'QA-Paare',
      tip1: '1. Klicken Sie, um die entsprechende Vorlage herunterzuladen und die Informationen zu vervollständigen:',
      tip2: '2. Jedes Tabellenblatt in der hochgeladenen Datei wird als Dokument behandelt, wobei der Blattname als Dokumentname dient.',
      tip3: '3. Bis zu 50 Dateien können gleichzeitig hochgeladen werden, wobei jede Datei 100 MB nicht überschreiten darf.',
    },
  },
  setRules: {
    title: {
      setting: 'Segmentierungsregeln festlegen',
      preview: 'Vorschau',
    },
    intelligent: {
      label: 'Automatische Segmentierung (empfohlen)',
      text: 'Wenn Sie sich bei der Festlegung der Segmentierungsregeln unsicher sind, wird die automatische Segmentierung empfohlen.',
    },
    advanced: {
      label: 'Erweiterte Segmentierung',
      text: 'Benutzer können Trennzeichen, Segmentlängen und Bereinigungsregeln gemäß Dokumentstandard selbst definieren.',
    },
    patterns: {
      label: 'Segment-Trennzeichen',
      tooltip:
        'Rekursiv gemäß der gewählten Symbole in Reihenfolge trennen. Wenn das Ergebnis die Segmentlänge überschreitet, wird es auf diese Länge gekürzt.',
      placeholder: 'Bitte auswählen',
    },
    limit: {
      label: 'Segmentlänge',
    },
    with_filter: {
      label: 'Automatische Bereinigung',
      text: 'Doppelte Sonderzeichen, Leerzeichen, Leerzeilen und Tabulatoren entfernen.',
    },
    checkedConnect: {
      label: 'Beim Importieren von QA-Paaren mit Fragen einen Abschnitt „Verwandte Fragen“ hinzufügen.',
    },
  },
  buttons: {
    prev: 'Zurück',
    next: 'Weiter',
    import: 'Import starten',
    preview: 'Anwenden',
  },
  table: {
    name: 'Dokumentname',
    char_length: 'Zeichen',
    paragraph: 'Segment',
    all: 'Alle',
    updateTime: 'Aktualisierungszeit',
  },
  fileStatus: {
    label: 'Dateistatus',
    SUCCESS: 'Erfolgreich',
    FAILURE: 'Fehlgeschlagen',
    EMBEDDING: 'Indexierung',
    PENDING: 'In Warteschlange',
    GENERATE: 'Wird generiert',
    SYNC: 'Wird synchronisiert',
    REVOKE: 'Wird abgebrochen',
    finish: 'Abgeschlossen',
  },
  enableStatus: {
    label: 'Status',
    enable: 'Aktiviert',
    close: 'Deaktiviert',
  },
  sync: {
    label: 'Synchronisieren',
    confirmTitle: 'Dokumentensynchronisierung bestätigen?',
    confirmMessage1:
      'Beim Synchronisieren werden vorhandene Daten gelöscht und neue Daten abgerufen. Bitte vorsichtig fortfahren.',
    confirmMessage2: 'Synchronisierung nicht möglich – bitte zuerst die Dokument-URL festlegen.',
    successMessage: 'Erfolgreich',
  },
  delete: {
    confirmTitle1: 'Batch-Löschung von',
    confirmTitle2: 'Dokumenten bestätigen?',
    confirmMessage:
      'Segmente innerhalb der ausgewählten Dokumente werden ebenfalls gelöscht. Bitte vorsichtig fortfahren.',
    successMessage: 'Erfolgreich',
    confirmTitle3: 'Löschen des Dokuments bestätigen:',
    confirmMessage1: 'Unter diesem Dokument',
    confirmMessage2: 'werden alle Segmente gelöscht. Bitte vorsichtig vorgehen.',
  },
  form: {
    source_url: {
      label: 'Dokument-URL',
      placeholder: 'Dokument-URL eingeben, eine pro Zeile. Falsche URLs führen zu Importfehlern.',
      requiredMessage: 'Bitte eine Dokument-URL eingeben',
    },
    selector: {
      label: 'Selektor',
      placeholder: 'Standard ist body; Sie können .classname / #idname / tagname eingeben',
    },
    hit_handling_method: {
      label: 'Abrufen-Antworten',
      tooltip: 'Wenn der Benutzer eine Frage stellt, werden passende Segmente gemäß der festgelegten Methode behandelt.',
    },
    similarity: {
      label: 'Ähnlichkeit höher als',
      placeholder: 'Segmentinhalt direkt zurückgeben',
      requiredMessage: 'Bitte Ähnlichkeitswert eingeben',
    },
    allow_download: {
      label: 'Download in der Wissensbasisquelle erlauben',
    }
  },
  hitHandlingMethod: {
    optimization: 'Modelloptimierung',
    directly_return: 'Direkt antworten',
  },
  movePosition: {
    title: 'Position verschieben',
    moveUp: 'Nach oben',
    moveDown: 'Nach unten',
  },
  generateQuestion: {
    title: 'Fragen generieren',
    successMessage: 'Erfolgreich',
    tip1: 'Das {data} in der Eingabeaufforderung ist ein Platzhalter für segmentierte Inhalte, der beim Ausführen durch den tatsächlichen Inhalt ersetzt und an das AI-Modell gesendet wird.',
    tip2: 'Das AI-Modell generiert relevante Fragen auf Basis des segmentierten Inhalts. Bitte platzieren Sie die generierten Fragen innerhalb der',
    tip3: 'Tags, damit das System sie automatisch zuordnen kann.',
    tip4: 'Das Ergebnis hängt vom gewählten Modell und der Eingabeaufforderung ab. Benutzer können Anpassungen vornehmen, um das beste Ergebnis zu erzielen.',
    prompt1:
      'Inhalt: {data}\n\n Bitte fassen Sie den obigen Inhalt zusammen und erstellen Sie 5 Fragen auf Grundlage der Zusammenfassung.\nAntwortanforderungen:\n - Bitte nur Fragen ausgeben;\n - Jede Frage in',
    prompt2: 'Tag setzen.',
  },
  feishu: {
    selectDocument: 'Dokument auswählen',
    tip1: 'Nur Dokumente und Tabellen werden unterstützt. Dokumente werden anhand der Titel segmentiert, Tabellen werden vor der Segmentierung in Markdown-Format konvertiert.',
    tip2: 'Vor dem Import wird empfohlen, Segmentierungsmarkierungen im Dokument zu standardisieren.',
    allCheck: 'Alle auswählen',
  },
}
