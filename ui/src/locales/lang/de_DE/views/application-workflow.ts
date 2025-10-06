export default {
  node: 'Knoten',
  nodeName: 'Knotenname',
  baseComponent: 'Basis',
  nodeSetting: 'Knoten-Einstellungen',
  workflow: 'Workflow',
  searchBar: {
    placeholder: 'Nach Namen suchen',
  },
  info: {
    previewVersion: 'Vorschauversion:',
    saveTime: 'Zuletzt gespeichert:',
  },
  setting: {
    restoreVersion: 'Vorherige Version wiederherstellen"',
    restoreCurrentVersion: 'Auf diese Version wiederherstellen',
    addComponent: 'Hinzufügen',
    releaseHistory: 'Versionsverlauf',
    autoSave: 'Automatisches Speichern',
    latestRelease: 'Neueste Veröffentlichung',
    copyParam: 'Parameter kopieren',
    debug: 'Ausführen',
    exit: 'Beenden',
    exitSave: 'Speichern & Beenden',
  },
  tip: {
    noData: 'Keine passenden Ergebnisse gefunden',
    nameMessage: 'Name darf nicht leer sein!',
    onlyRight: 'Verbindungen dürfen nur vom rechten Anker hergestellt werden',
    notRecyclable: 'Schleifenverbindungen sind nicht erlaubt',
    onlyLeft: 'Verbindungen dürfen nur zum linken Anker hergestellt werden',
    applicationNodeError: 'Diese Anwendung ist nicht verfügbar',
    toolNodeError: 'Dieser Tool-Knoten ist nicht verfügbar',
    repeatedNodeError: 'Ein Knoten mit diesem Namen existiert bereits',
    cannotCopy: 'Kann nicht kopiert werden',
    copyError: 'Knoten bereits kopiert',
    paramErrorMessage: 'Parameter existiert bereits: ',
    saveMessage: 'Aktuelle Änderungen wurden nicht gespeichert. Vor dem Beenden speichern?',
  },
  delete: {
    confirmTitle: 'Diesen Knoten wirklich löschen?',
    deleteMessage: 'Dieser Knoten kann nicht gelöscht werden',
  },
  control: {
    zoomOut: 'Verkleinern',
    zoomIn: 'Vergrößern',
    fitView: 'An Bildschirm anpassen',
    retract: 'Alle einklappen',
    extend: 'Alle ausklappen',
    beautify: 'Automatisch anordnen',
  },
  variable: {
    label: 'Variable',
    global: 'Globale Variable',
    Referencing: 'Referenzierte Variable',
    ReferencingRequired: 'Referenzierte Variable ist erforderlich',
    ReferencingError: 'Ungültige referenzierte Variable',
    NoReferencing: 'Referenzierte Variable existiert nicht',
    placeholder: 'Bitte eine Variable auswählen',
  },
  condition: {
    title: 'Ausführungsbedingung',
    front: 'Voraussetzung',
    AND: 'Alle',
    OR: 'Beliebige',
    text: 'Nachdem der verbundene Knoten ausgeführt wurde, den aktuellen Knoten ausführen',
  },
  validate: {
    startNodeRequired: 'Startknoten ist erforderlich',
    startNodeOnly: 'Es ist nur ein Startknoten zulässig',
    baseNodeRequired: 'Basisknoten ist erforderlich',
    baseNodeOnly: 'Es ist nur ein Basisknoten zulässig',
    notInWorkFlowNode: 'Knoten nicht im Workflow',
    noNextNode: 'Nächster Knoten existiert nicht',
    nodeUnavailable: 'Knoten nicht verfügbar',
    needConnect1: 'Der Zweig des Knotens muss verbunden werden',
    cannotEndNode: 'Dieser Knoten kann nicht als Endknoten verwendet werden',
    loopNodeBreakNodeRequired: 'Endlosschleife muss einen Break-Knoten haben',
  },
  nodes: {
    classify: {
      aiCapability: 'AI-Fähigkeit',
      businessLogic: 'Geschäftslogik',
      other: 'Sonstiges',
    },
    startNode: {
      label: 'Start',
      question: 'Benutzerfrage',
      currentTime: 'Aktuelle Zeit',
    },
    baseNode: {
      label: 'Basisinformationen',
      appName: {
        label: 'App-Name',
      },
      appDescription: {
        label: 'App-Beschreibung',
      },
      fileUpload: {
        label: 'Datei-Upload',
        tooltip: 'Wenn aktiviert, wird auf der Q&A-Seite eine Datei-Upload-Schaltfläche angezeigt.',
      },
      FileUploadSetting: {
        title: 'Einstellungen für Datei-Upload',
        maxFiles: 'Max. Anzahl an Dateien pro Upload',
        fileLimit: 'Maximale Größe pro Datei (MB)',
        fileUploadType: {
          label: 'Für Upload zulässige Dateitypen',
          documentText: 'Erfordert den Knoten „Document Content Extraction“, um Dokumentinhalte zu analysieren',
          imageText: 'Erfordert den Knoten „Image Understanding“, um Bildinhalte zu analysieren',
          audioText: 'Erfordert den Knoten „Speech-to-Text“, um Audioinhalte zu analysieren',
        },
      },
    },
    aiChatNode: {
      label: 'AI-Chat',
      text: 'Mit einem AI-Modell chatten',
      answer: 'AI-Inhalt',
      returnContent: {
        label: 'Rückgabeinhalt',
        tooltip: `Wenn ausgeschaltet, wird der Inhalt dieses Knotens nicht an den Benutzer ausgegeben.
                  Wenn der Benutzer die Ausgabe dieses Knotens sehen soll, bitte den Schalter einschalten.`,
      },
      defaultPrompt: 'Bekannte Informationen',
      think: 'Denkprozess',
    },
    searchKnowledgeNode: {
      label: 'Wissensrecherche',
      text: 'Ermöglicht das Abfragen von Textinhalten aus dem Wissen, die sich auf Benutzerfragen beziehen',
      paragraph_list: 'Liste der abgerufenen Segmente',
      is_hit_handling_method_list: 'Liste der Segmente, die Kriterien für Direktantwort erfüllen',
      result: 'Suchergebnis',
      directly_return: 'Inhalt der Segmente, die Kriterien für Direktantwort erfüllen',
      searchParam: 'Abrufparameter',
      searchQuestion: {
        label: 'Frage',
        placeholder: 'Bitte eine Suchfrage auswählen',
        requiredMessage: 'Bitte eine Suchfrage auswählen',
      },
    },
    questionNode: {
      label: 'Fragenoptimierung',
      text: 'Optimiert die aktuelle Frage basierend auf Chat-Verlauf, um Wissenssegmente besser zuzuordnen',
      result: 'Ergebnis der optimierten Frage',
      systemDefault: `#Role
You are a master of problem optimization, adept at accurately inferring user intentions based on context and optimizing the questions raised by users.

##Skills
###Skill 1: Optimizing Problems
2. Receive user input questions.
3. Carefully analyze the meaning of the problem based on the context.
4. Output optimized problems.

##Limitations:
-Only return the optimized problem without any additional explanation or clarification.
-Ensure that the optimized problem accurately reflects the original problem intent and does not alter the original intention.`,
    },
    conditionNode: {
      label: 'Bedingte Verzweigung',
      text: 'Verschiedene Knoten basierend auf Bedingungen auslösen',
      branch_name: 'Zweigname',
      conditions: {
        label: 'Bedingungen',
        info: 'Erfüllt Folgendes',
        requiredMessage: 'Bitte Bedingungen auswählen',
      },
      valueMessage: 'Bitte einen Wert eingeben',
      addCondition: 'Bedingung hinzufügen',
      addBranch: 'Zweig hinzufügen',
    },
    replyNode: {
      label: 'Vorgegebene Antwort',
      text: 'Antwortinhalt festlegen; referenzierte Variablen werden zur Ausgabe in Zeichenfolgen umgewandelt',
      content: 'Inhalt',
      replyContent: {
        label: 'Antwortinhalt',
        reference: 'Referenzvariable',
      },
    },
    rerankerNode: {
      label: 'Mehrpfad-Recall',
      text: 'Verwenden Sie ein Reranking-Modell, um Abrufresultate aus mehreren Wissensquellen zu verfeinern',
      result_list: 'Liste der neu bewerteten Ergebnisse',
      result: 'Neubewertungsergebnis',
      rerankerContent: {
        label: 'Neubewertungsinhalt',
        requiredMessage: 'Bitte Neubewertungsinhalt auswählen',
      },
      higher: 'Höher',
      ScoreTooltip: 'Je höher der Score, desto stärker die Relevanz.',
      max_paragraph_char_number: 'Maximale Zeichenanzahl',
      reranker_model: {
        label: 'Rerank',
        placeholder: 'Bitte Rerank auswählen',
      },
    },
    formNode: {
      label: 'Formulareingabe',
      text: 'Benutzereingaben während Q&A erfassen und in nachfolgenden Prozessen verwenden',
      form_content_format1: 'Hallo, bitte füllen Sie das folgende Formular aus:',
      form_content_format2: 'Klicken Sie nach dem Ausfüllen auf [Absenden].',
      form_data: 'Gesamter Formularinhalt',
      formContent: {
        label: 'Ausgabeinhalt des Formulars',
        requiredMessage:
          'Bitte den Ausgabeinhalt dieses Knotens festlegen; { form } ist ein Platzhalter für das Formular.',
        tooltip: 'Definieren Sie den Ausgabeinhalt dieses Knotens. { form } ist ein Platzhalter für das Formular',
      },
      formAllContent: 'Gesamter Formularinhalt',
      formSetting: 'Formularkonfiguration',
    },
    documentExtractNode: {
      label: 'Dokumentinhalts-Extraktion',
      text: 'Inhalte aus Dokumenten extrahieren',
      content: 'Dokumentinhalt',
    },
    imageUnderstandNode: {
      label: 'Bildverständnis',
      text: 'Bilder analysieren, Objekte und Szenen erkennen und Antworten bereitstellen',
      answer: 'AI-Inhalt',
      model: {
        label: 'Vision-Modell',
        requiredMessage: 'Bitte ein Vision-Modell auswählen',
      },
      image: {
        label: 'Bild auswählen',
        requiredMessage: 'Bitte ein Bild auswählen',
      },
    },
    variableAssignNode: {
      label: 'Variable zuweisen',
      text: 'Wert der globalen Variable aktualisieren',
      assign: 'Wert setzen',
    },
    mcpNode: {
      label: 'MCP-Knoten',
      text: 'Externe MCP-Dienste aufrufen, um Daten zu verarbeiten',
      getToolsSuccess: 'Tools erfolgreich abgerufen',
      getTool: 'Tools abrufen',
      toolParam: 'Tool-Parameter',
      mcpServerTip: 'Bitte MCP-Serverkonfiguration im JSON-Format eingeben',
      mcpToolTip: 'Bitte ein Tool auswählen',
      configLabel: 'MCP-Serverkonfiguration (nur SSE/Streamable HTTP-Aufrufe werden unterstützt)',
      reference: 'MCP referenzieren',
    },
    imageGenerateNode: {
      label: 'Bildgenerierung',
      text: 'Bilder auf Basis des bereitgestellten Textinhalts generieren',
      answer: 'AI-Inhalt',
      model: {
        label: 'Bildgenerierungsmodell',
        requiredMessage: 'Bitte ein Bildgenerierungsmodell auswählen',
      },
      prompt: {
        label: 'Positiver Prompt',
        tooltip: 'Beschreiben Sie Elemente und visuelle Merkmale, die im generierten Bild enthalten sein sollen',
      },
      negative_prompt: {
        label: 'Negativer Prompt',
        tooltip: 'Beschreiben Sie Elemente, die im generierten Bild ausgeschlossen werden sollen',
        placeholder:
          'Bitte Inhalte beschreiben, die nicht generiert werden sollen, z. B. Farbe, blutige Inhalte',
      },
    },
    textToVideoGenerate: {
      label: 'Text-zu-Video',
      text: 'Video basierend auf bereitgestelltem Textinhalt generieren',
      answer: 'AI-Antwortinhalt',
      model: {
        label: 'Text-zu-Video-Modell',
        requiredMessage: 'Bitte ein Text-zu-Video-Modell auswählen',
      },
      prompt: {
        label: 'Prompt (Positiv)',
        tooltip:
          'Positiver Prompt, zur Beschreibung der erwarteten Elemente und visuellen Merkmale im generierten Video',
      },
      negative_prompt: {
        label: 'Prompt (Negativ)',
        tooltip:
          "Negativer Prompt, zur Beschreibung von Inhalten, die Sie im Video nicht sehen möchten und die die Videogenerierung einschränken können",
        placeholder:
          "Bitte Videoinhalte beschreiben, die nicht generiert werden sollen, z. B.: Farben, blutige Inhalte",
      },
    },
    imageToVideoGenerate: {
      label: 'Image-to-Video',
      text: 'Video basierend auf bereitgestellten Bildern generieren',
      answer: 'AI-Antwortinhalt',
      model: {
        label: 'Image-to-Video-Modell',
        requiredMessage: 'Bitte ein Image-to-Video-Modell auswählen',
      },
      prompt: {
        label: 'Prompt (Positiv)',
        tooltip:
          'Positiver Prompt, zur Beschreibung der erwarteten Elemente und visuellen Merkmale im generierten Video',
      },
      negative_prompt: {
        label: 'Prompt (Negativ)',
        tooltip:
          "Negativer Prompt, zur Beschreibung von Inhalten, die Sie im Video nicht sehen möchten und die die Videogenerierung einschränken können",
        placeholder:
          "Bitte Videoinhalte beschreiben, die nicht generiert werden sollen, z. B.: Farben, blutige Inhalte",
      },
      first_frame: {
        label: 'Erstes Einzelbild',
        requiredMessage: 'Bitte das erste Einzelbild auswählen',
      },
      last_frame: {
        label: 'Letztes Einzelbild',
        requiredMessage: 'Bitte das letzte Einzelbild auswählen',
      },
    },
    speechToTextNode: {
      label: 'Speech2Text',
      text: 'Audio mittels Spracherkennungsmodell in Text umwandeln',
      stt_model: {
        label: 'Spracherkennungsmodell',
      },
      audio: {
        label: 'Audiodatei auswählen',
        placeholder: 'Bitte eine Audiodatei auswählen',
      },
    },
    textToSpeechNode: {
      label: 'TTS',
      text: 'Text mittels Sprachsynthesemodell in Audio umwandeln',
      tts_model: {
        label: 'Sprachsynthesemodell',
      },
      content: {
        label: 'Textinhalt auswählen',
      },
    },
    toolNode: {
      label: 'Benutzerdefiniertes Tool',
      text: 'Benutzerdefinierte Skripte ausführen, um Daten zu verarbeiten',
    },
    intentNode: {
      label: 'IntentNode',
      text: 'Benutzerfragen mit benutzerdefinierten Intent-Klassifikationen abgleichen',
      other: 'andere',
      error2: 'Intent wiederholt',
      placeholder: 'Bitte eine Klassifikationsoption wählen',
      classify: {
        label: 'Intent klassifizieren',
        placeholder: 'Bitte eingeben',
      },
      input: {
        label: 'Eingabe',
      },
    },
    applicationNode: {
      label: 'APP-Knoten',
    },
    loopNode: {
      label: 'Schleifen-Knoten',
      text: 'Eine Reihe von Aufgaben wiederholen, indem Anzahl und Logik der Schleifen festgelegt werden',
      loopType: {
        label: 'Schleifentyp',
        requiredMessage: 'Bitte einen Schleifentyp auswählen',
        arrayLoop: 'Array-Schleife',
        numberLoop: 'Schleife für eine festgelegte Anzahl',
        infiniteLoop: 'Endlosschleife',
      },
      loopNumber: {
        label: 'Schleifenanzahl',
        requiredMessage: 'Bitte die Anzahl der Schleifen eingeben',
      },
      loopArray: {
        label: 'Zirkuläres Array',
        requiredMessage: 'Zirkuläres Array ist erforderlich',
        placeholder: 'Bitte ein zirkuläres Array auswählen',
      },
      loopSetting: 'Schleifeneinstellungen',
      loopDetail: 'Schleifendetails',
    },
    loopStartNode: {
      label: 'Schleifenstart',
      loopIndex: 'Index',
      loopItem: 'Schleifenelement',
      loopVariable: 'Schleifenvariable',
    },
    loopBodyNode: {
      label: 'Schleifenkörper',
      text: 'Schleifenkörper',
    },
    loopContinueNode: {
      label: 'Fortsetzen',
      text: 'Wird verwendet, um die aktuelle Schleife zu beenden und zur nächsten fortzufahren.',
      isContinue: 'Fortsetzen',
    },
    loopBreakNode: {
      label: 'Abbrechen',
      text: 'Aktuelle Schleife beenden und den Schleifenkörper verlassen',
      isBreak: 'Abbrechen',
    },
  },
  compare: {
    is_null: 'Ist null',
    is_not_null: 'Ist nicht null',
    contain: 'Enthält',
    not_contain: 'Enthält nicht',
    eq: 'Gleich',
    ge: 'Größer gleich',
    gt: 'Größer als',
    le: 'Kleiner gleich',
    lt: 'Kleiner als',
    len_eq: 'Länge gleich',
    len_ge: 'Länge größer/gleich',
    len_gt: 'Länge größer als',
    len_le: 'Länge kleiner/gleich',
    len_lt: 'Länge kleiner als',
  },
  SystemPromptPlaceholder: 'System-Prompt, kann Variablen im System referenzieren, wie',
  UserPromptPlaceholder: 'User-Prompt, kann Variablen im System referenzieren, wie',
}
