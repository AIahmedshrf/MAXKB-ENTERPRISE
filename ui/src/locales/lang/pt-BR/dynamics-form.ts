export default {
  input_type_list: {
    TextInput: 'Campo de Texto',
    PasswordInput: 'Senha',
    Slider: 'Controle Deslizante',
    SwitchInput: 'Interruptor',
    SingleSelect: 'Seleção Única',
    MultiSelect: 'Seleção Múltipla',
    DatePicker: 'Seletor de Data',
    JsonInput: 'JSON',
    RadioCard: 'Cartão de Opção',
    RadioRow: 'Linha de Opção',
    UploadInput: 'Upload de Arquivo',
    TextareaInput: 'Campo de Texto Multilinha',
  },
  default: {
    label: 'Padrão',
    placeholder: 'Por favor, insira um valor padrão',
    requiredMessage: ' é uma propriedade obrigatória',
    show: 'Mostrar Padrão',
  },
  tip: {
    requiredMessage: 'não pode estar vazio',
    jsonMessage: 'Formato JSON incorreto',
  },
  searchBar: {
    placeholder: 'Por favor, insira palavras-chave para pesquisar',
  },
  paramForm: {
    field: {
      label: 'Parâmetro',
      placeholder: 'Por favor, insira um parâmetro',
      requiredMessage: 'Parâmetro é uma propriedade obrigatória',
      requiredMessage2: 'Apenas letras, números e underscores são permitidos',
    },
    name: {
      label: 'Nome',
      placeholder: 'Por favor, insira um nome',
      requiredMessage: 'Nome é uma propriedade obrigatória',
    },
    tooltip: {
      label: 'Dica',
      placeholder: 'Por favor, insira uma dica',
    },
    required: {
      label: 'Obrigatório',
      requiredMessage: 'Obrigatório é uma propriedade obrigatória',
    },
    input_type: {
      label: 'Tipo',
      placeholder: 'Por favor, selecione um tipo',
      requiredMessage: 'Tipo é uma propriedade obrigatória',
    },
  },
  DatePicker: {
    placeholder: 'Selecionar Data',
    year: 'Ano',
    month: 'Mês',
    date: 'Data',
    datetime: 'Data e Hora',
    dataType: {
      label: 'Tipo de Data',
      placeholder: 'Por favor, selecione um tipo de data',
    },
    format: {
      label: 'Formato',
      placeholder: 'Por favor, selecione um formato',
    },
  },
  Select: {
    label: 'Valor da Opção',
    placeholder: 'Por favor, insira um valor de opção',
  },
  tag: {
    label: 'Etiqueta',
    placeholder: 'Por favor, insira uma etiqueta de opção',
  },
  Slider: {
    showInput: {
      label: 'Mostrar Caixa de Entrada',
    },
    valueRange: {
      label: 'Intervalo de Valores',
      minRequired: 'Valor mínimo é obrigatório',
      maxRequired: 'Valor máximo é obrigatório',
    },
    step: {
      label: 'Valor do Passo',
      requiredMessage1: 'Valor do passo é obrigatório',
      requiredMessage2: 'Valor do passo não pode ser 0',
    },
  },
  TextInput: {
    length: {
      label: 'Comprimento do Texto',
      minRequired: 'Comprimento mínimo é obrigatório',
      maxRequired: 'Comprimento máximo é obrigatório',
      requiredMessage1: 'O comprimento deve estar entre',
      requiredMessage2: 'e',
      requiredMessage3: 'caracteres',
      requiredMessage4: 'Comprimento do texto é um parâmetro obrigatório',
    },
  },
  UploadInput: {
    limit: {
      label: 'Número máximo de arquivos por upload',
      required: 'Número máximo de arquivos é obrigatório',
    },
    max_file_size: {
      label: 'Tamanho máximo do arquivo (MB)',
      required: 'Tamanho máximo do arquivo é obrigatório',
    },
    accept: {
      label: 'Tipo de arquivo',
      required: 'Tipo de arquivo é obrigatório',
    },
  },
  AssignmentMethod: {
    label: 'Método de Atribuição',
    custom: {
      label: 'Personalizado',
    },
    ref_variables: {
      label: 'Variáveis de Referência',
      popover: 'Valores das variáveis devem estar em conformidade com',
      json_format: 'formato JSON',
      popover_label: 'Rótulo',
      popover_value: 'Valor',
      popover_default: 'É Padrão',
    },
  },
}
