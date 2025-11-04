export default {
  input_type_list: {
    TextInput: 'Saisie',
    PasswordInput: 'Mot de passe',
    Slider: 'Curseur',
    SwitchInput: 'Interrupteur',
    SingleSelect: 'Sélection simple',
    MultiSelect: 'Sélection multiple',
    DatePicker: 'Sélecteur de date',
    JsonInput: 'JSON',
    RadioCard: 'Carte radio',
    RadioRow: 'Ligne radio',
    UploadInput: 'Téléchargement de fichier',
    TextareaInput: 'Saisie multiligne',
    MultiRow: 'Multiligne',
  },
  default: {
    label: 'Par défaut',
    placeholder: 'Veuillez entrer une valeur par défaut',
    requiredMessage: ' est une propriété obligatoire',
    show: 'Afficher la valeur par défaut',
  },
  tip: {
    requiredMessage: 'ne peut pas être vide',
    jsonMessage: 'Format JSON incorrect',
  },
  searchBar: {
    placeholder: 'Veuillez entrer des mots-clés pour rechercher',
  },
  paramForm: {
    field: {
      label: 'Paramètre',
      placeholder: 'Veuillez entrer un paramètre',
      requiredMessage: 'Le paramètre est une propriété obligatoire',
      requiredMessage2: 'Seuls les lettres, chiffres et underscores sont autorisés',
    },
    name: {
      label: 'Nom',
      placeholder: 'Veuillez entrer un nom',
      requiredMessage: 'Le nom est une propriété obligatoire',
    },
    tooltip: {
      label: 'Info-bulle',
      placeholder: 'Veuillez entrer une info-bulle',
    },
    required: {
      label: 'Obligatoire',
      requiredMessage: 'Obligatoire est une propriété obligatoire',
    },
    input_type: {
      label: 'Type',
      placeholder: 'Veuillez sélectionner un type',
      requiredMessage: 'Le type est une propriété obligatoire',
    },
  },
  DatePicker: {
    placeholder: 'Sélectionner une date',
    year: 'Année',
    month: 'Mois',
    date: 'Date',
    datetime: 'Date et heure',
    dataType: {
      label: 'Type de date',
      placeholder: 'Veuillez sélectionner un type de date',
    },
    format: {
      label: 'Format',
      placeholder: 'Veuillez sélectionner un format',
    },
  },
  Select: {
    label: 'Valeur d\'option',
    placeholder: 'Veuillez entrer une valeur d\'option',
  },
  tag: {
    label: 'Étiquette',
    placeholder: 'Veuillez entrer une étiquette d\'option',
  },
  Slider: {
    showInput: {
      label: 'Afficher la zone de saisie',
    },
    valueRange: {
      label: 'Plage de valeurs',
      minRequired: 'La valeur minimale est obligatoire',
      maxRequired: 'La valeur maximale est obligatoire',
    },
    step: {
      label: 'Valeur du pas',
      requiredMessage1: 'La valeur du pas est obligatoire',
      requiredMessage2: 'La valeur du pas ne peut pas être 0',
    },
  },
  TextInput: {
    length: {
      label: 'Longueur du texte',
      minRequired: 'La longueur minimale est obligatoire',
      maxRequired: 'La longueur maximale est obligatoire',
      requiredMessage1: 'La longueur doit être entre',
      requiredMessage2: 'et',
      requiredMessage3: 'caractères',
      requiredMessage4: 'La longueur du texte est un paramètre obligatoire',
    },
  },
  UploadInput: {
    limit: {
      label: 'Nombre maximum de fichiers par téléchargement',
      required: 'Le nombre maximum de fichiers est obligatoire',
    },
    max_file_size: {
      label: 'Taille maximale du fichier (Mo)',
      required: 'La taille maximale du fichier est obligatoire',
    },
    accept: {
      label: 'Type de fichier',
      required: 'Le type de fichier est obligatoire',
    },
  },
  AssignmentMethod: {
    label: 'Méthode d\'assignation',
    custom: {
      label: 'Personnalisé',
    },
    ref_variables: {
      label: 'Variables de référence',
      popover: 'Les valeurs de variable doivent respecter',
      json_format: 'le format JSON',
      popover_label: 'Étiquette',
      popover_value: 'Valeur',
      popover_default: 'Est par défaut',
    },
  },
}
