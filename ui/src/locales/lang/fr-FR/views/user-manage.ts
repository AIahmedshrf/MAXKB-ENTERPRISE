export default {
  title: 'Utilisateur',
  createUser: 'Créer un utilisateur',
  editUser: 'Modifier l\'utilisateur',
  roleSetting: 'Configuration des rôles',
  addRole: 'Ajouter un rôle',
  setting: {
    updatePwd: 'Changer le mot de passe',
  },
  tip: {
    professionalMessage:
      'L\'édition communautaire prend en charge jusqu\'à 2 utilisateurs. Pour plus d\'utilisateurs, veuillez passer à l\'édition professionnelle.',
    updatePwdSuccess: 'Mot de passe utilisateur mis à jour avec succès',
  },
  delete: {
    confirmTitle: 'Confirmer la suppression de l\'utilisateur :',
    confirmMessage:
      'La suppression de cet utilisateur ne supprimera pas toutes les ressources (applications, connaissances, modèles) créées par cet utilisateur. Veuillez procéder avec prudence.',
  },
  disabled: {
    confirmTitle: 'Confirmer la désactivation de l\'outil :',
    confirmMessage:
      'La désactivation de cet outil provoquera des erreurs lors des requêtes des applications qui y font référence. Veuillez procéder avec prudence.',
  },
  userForm: {
    nick_name: {
      label: 'Nom',
      placeholder: 'Veuillez saisir le nom',
      lengthMessage: 'La longueur doit être comprise entre 2 et 20 caractères',
    },
    phone: {
      label: 'Téléphone',
      placeholder: 'Veuillez saisir le téléphone',
      invalidMessage: 'Format de téléphone invalide',
    },
  },
  source: {
    label: 'Source utilisateur',
    local: 'Utilisateur système',
    localCreate: 'Création locale',
    wecom: 'WeCom',
    lark: 'Lark',
    dingtalk: 'DingTalk',
  },
}
