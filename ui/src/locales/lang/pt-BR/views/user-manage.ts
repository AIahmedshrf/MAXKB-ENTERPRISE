export default {
  title: 'Usuário',
  createUser: 'Criar Usuário',
  editUser: 'Editar Usuário',
  roleSetting: 'Configuração de Papel',
  addRole: 'Adicionar papel',
  setting: {
    updatePwd: 'Alterar Senha',
  },
  tip: {
    professionalMessage:
      'A edição comunitária suporta até 2 usuários. Para mais usuários, por favor atualize para a edição profissional.',
    updatePwdSuccess: 'Senha do usuário atualizada com sucesso',
  },
  delete: {
    confirmTitle: 'Confirmar exclusão do usuário:',
    confirmMessage:
      'Excluir este usuário não excluirá todos os recursos (Aplicações, conhecimento, modelos) criados por este usuário. Por favor, proceda com cautela.',
  },
  disabled: {
    confirmTitle: 'Confirmar desativação da ferramenta:',
    confirmMessage:
      'Desativar esta ferramenta causará erros quando Aplicações que a referenciam forem consultadas. Por favor, proceda com cautela.',
  },
  userForm: {
    nick_name: {
      label: 'Nome',
      placeholder: 'Por favor, digite o nome',
      lengthMessage: 'O comprimento deve estar entre 2 e 20 caracteres',
    },
    phone: {
      label: 'Telefone',
      placeholder: 'Por favor, digite o telefone',
      invalidMessage: 'Formato de telefone inválido',
    },
  },
  source: {
    label: 'Origem do Usuário',
    local: 'Usuário do Sistema',
    localCreate: 'Criação Local',
    wecom: 'WeCom',
    lark: 'Lark',
    dingtalk: 'DingTalk',
  },
}
