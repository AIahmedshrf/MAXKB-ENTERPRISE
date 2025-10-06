export default {
  input_type_list: {
    TextInput: 'Eingabe',
    PasswordInput: 'Passwort',
    Slider: 'Schieberegler',
    SwitchInput: 'Schalter',
    SingleSelect: 'Einzelauswahl',
    MultiSelect: 'Mehrfachauswahl',
    DatePicker: 'Datumsauswahl',
    JsonInput: 'JSON',
    RadioCard: 'Radiokarte',
    RadioRow: 'Radiozeile',
    UploadInput: 'Datei-Upload',
    TextareaInput: 'Mehrzeilige Eingabe',
    MultiRow: 'Mehrzeilige Reihe',
  },
  default: {
    label: 'Standard',
    placeholder: 'Bitte einen Standardwert eingeben',
    requiredMessage: ' ist eine erforderliche Eigenschaft',
    show: 'Standard anzeigen',
  },
  tip: {
    requiredMessage: 'darf nicht leer sein',
    jsonMessage: 'Falsches JSON-Format',
  },
  searchBar: {
    placeholder: 'Bitte Stichwörter zur Suche eingeben',
  },
  paramForm: {
    field: {
      label: 'Parameter',
      placeholder: 'Bitte einen Parameter eingeben',
      requiredMessage: 'Parameter ist eine erforderliche Eigenschaft',
      requiredMessage2: 'Nur Buchstaben, Zahlen und Unterstriche sind erlaubt',
    },
    name: {
      label: 'Name',
      placeholder: 'Bitte einen Namen eingeben',
      requiredMessage: 'Name ist eine erforderliche Eigenschaft',
    },
    tooltip: {
      label: 'Tooltip',
      placeholder: 'Bitte einen Tooltip eingeben',
    },
    required: {
      label: 'Erforderlich',
      requiredMessage: 'Erforderlich ist eine Pflichtangabe',
    },
    input_type: {
      label: 'Typ',
      placeholder: 'Bitte einen Typ auswählen',
      requiredMessage: 'Typ ist eine erforderliche Eigenschaft',
    },
  },
  DatePicker: {
    placeholder: 'Datum auswählen',
    year: 'Jahr',
    month: 'Monat',
    date: 'Datum',
    datetime: 'Datum und Uhrzeit',
    dataType: {
      label: 'Datentyp',
      placeholder: 'Bitte einen Datentyp auswählen',
    },
    format: {
      label: 'Format',
      placeholder: 'Bitte ein Format auswählen',
    },
  },
  Select: {
    label: 'Optionswert',
    placeholder: 'Bitte einen Optionswert eingeben',
  },
  tag: {
    label: 'Tag',
    placeholder: 'Bitte ein Optionslabel eingeben',
  },
  Slider: {
    showInput: {
      label: 'Eingabefeld anzeigen',
    },
    valueRange: {
      label: 'Wertebereich',
      minRequired: 'Minimalwert ist erforderlich',
      maxRequired: 'Maximalwert ist erforderlich',
    },
    step: {
      label: 'Schrittweite',
      requiredMessage1: 'Schrittweite ist erforderlich',
      requiredMessage2: 'Schrittweite darf nicht 0 sein',
    },
  },
  TextInput: {
    length: {
      label: 'Textlänge',
      minRequired: 'Minimale Länge ist erforderlich',
      maxRequired: 'Maximale Länge ist erforderlich',
      requiredMessage1: 'Länge muss zwischen',
      requiredMessage2: 'und',
      requiredMessage3: 'Zeichen liegen',
      requiredMessage4: 'Textlänge ist ein erforderlicher Parameter',
    },
  },
  UploadInput: {
    limit: {
      label: 'Maximale Anzahl an Dateien pro Upload',
      required: 'Maximale Dateianzahl ist erforderlich',
    },
    max_file_size: {
      label: 'Maximale Dateigröße (MB)',
      required: 'Maximale Dateigröße ist erforderlich',
    },
    accept: {
      label: 'Dateityp',
      required: 'Dateityp ist erforderlich',
    },
  },
  AssignmentMethod: {
    label: 'Zuweisungsmethode',
    custom: {
      label: 'Benutzerdefiniert',
    },
    ref_variables: {
      label: 'Referenzvariablen',
      popover: 'Variablenwerte müssen dem',
      json_format: 'JSON-Format entsprechen',
      popover_label: 'Bezeichnung',
      popover_value: 'Wert',
      popover_default: 'Ist Standard',
    },
  },
}
