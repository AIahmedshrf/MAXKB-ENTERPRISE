export default {
  title: 'Tool',
  all: 'Alle',
  createTool: 'Tool erstellen',
  editTool: 'Tool bearbeiten',
  createMcpTool: 'MCP erstellen',
  editMcpTool: 'MCP bearbeiten',
  copyTool: 'Tool kopieren',
  importTool: 'Tool importieren',
  settingTool: 'Tool konfigurieren',
  mcpConfig: 'MCP-Servicekonfiguration',
  toolStore: {
    title: 'Tool Store',
    createFromToolStore: 'Aus Tool Store erstellen',
    internal: 'Im System integriert',
    recommend: 'Empfohlen',
    webSearch: 'Websuche',
    databaseQuery: 'Datenbankabfrage',
    image: 'Bild',
    developer: 'Entwickler',
    communication: 'Kommunikation',
    searchResult: '{count} Suchergebnisse für',
    confirmTip: 'Sind Sie sicher, dass Sie das Tool aktualisieren möchten: ',
    updateStoreToolMessage: 'Das Aktualisieren von Tools kann sich auf verwendete Ressourcen auswirken. Bitte vorsichtig fortfahren.',
  },
  searchBar: {
    placeholder: 'Nach Toolnamen suchen',
  },
  tip: {
    saveMessage: 'Nicht gespeicherte Änderungen gehen verloren. Möchten Sie wirklich beenden?',
  },
  delete: {
    confirmTitle: 'Löschung des Tools bestätigen:',
    confirmMessage:
      'Das Löschen dieses Tools führt zu Fehlern in APPs, die darauf verweisen, wenn sie abgefragt werden. Bitte vorsichtig fortfahren.',
  },
  disabled: {
    confirmTitle: 'Deaktivierung des Tools bestätigen:',
    confirmMessage:
      'Das Deaktivieren dieses Tools führt zu Fehlern in APPs, die darauf verweisen, wenn sie abgefragt werden. Bitte vorsichtig fortfahren.',
  },

  form: {
    toolName: {
      label: 'Name',
      name: 'Toolname',
      placeholder: 'Bitte den Toolnamen eingeben',
      requiredMessage: 'Bitte den Toolnamen eingeben',
    },
    mcpName: {
      label: 'Name',
      name: 'MCP-Name',
      placeholder: 'Bitte den MCP-Namen eingeben',
      requiredMessage: 'Bitte den MCP-Namen eingeben',
    },
    toolDescription: {
      label: 'Beschreibung',
      placeholder: 'Bitte eine Beschreibung des Tools eingeben',
    },
    mcpDescription: {
      label: 'Beschreibung',
      placeholder: 'Bitte eine Beschreibung des MCP eingeben',
    },
    paramName: {
      label: 'Parametername',
      placeholder: 'Bitte den Parameternamen eingeben',
      requiredMessage: 'Bitte den Parameternamen eingeben',
    },
    dataType: {
      label: 'Datentyp',
    },
    source: {
      label: 'Quelle',
      reference: 'Referenzparameter',
    },
    required: {
      label: 'Erforderlich',
    },
    param: {
      paramInfo1: 'Wird angezeigt, wenn das Tool verwendet wird',
      paramInfo2: 'Wird nicht angezeigt, wenn das Tool verwendet wird',
      code: 'Inhalt (Python)',
      selectPlaceholder: 'Bitte Parameter auswählen',
      inputPlaceholder: 'Bitte Parameterwerte eingeben',
    },
    mcp: {
      title: 'MCP-Service',
      label: 'MCP-Serverkonfiguration',
      placeholder: 'Bitte MCP-Serverkonfiguration eingeben',
      tip: 'Unterstützt nur SSE- und Streamable-HTTP-Aufrufmethoden',
      requiredMessage: 'Bitte MCP-Serverkonfiguration eingeben',
    },
    debug: {
      run: 'Ausführen',
      output: 'Ausgabe',
      runResult: 'Ausführungsergebnis',
      runSuccess: 'Erfolgreich',
      runFailed: 'Fehlgeschlagen',
    },
  },
}
