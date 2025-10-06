export default {
  title: 'Benutzer',
  createUser: 'Benutzer erstellen',
  editUser: 'Benutzer bearbeiten',
  roleSetting: 'Rollen festlegen',
  addRole: 'Rolle hinzufügen',
  setting: {
    updatePwd: 'Passwort ändern',
  },
  tip: {
    professionalMessage:
      'Die Community Edition unterstützt bis zu 2 Benutzer. Für weitere Benutzer bitte auf die Professional Edition upgraden.',
    updatePwdSuccess: 'Benutzerpasswort wurde erfolgreich aktualisiert',
  },
  delete: {
    confirmTitle: 'Löschung des Benutzers bestätigen:',
    confirmMessage:
      'Das Löschen dieses Benutzers entfernt nicht die von ihm erstellten Ressourcen (APP, Wissen, Modelle). Bitte vorsichtig fortfahren.',
  },
  disabled: {
    confirmTitle: 'Deaktivierung des Tools bestätigen:',
    confirmMessage:
      'Das Deaktivieren dieses Tools führt zu Fehlern, wenn darauf verweisende APPs abgefragt werden. Bitte vorsichtig fortfahren.',
  },
  userForm: {
    nick_name: {
      label: 'Name',
      placeholder: 'Bitte Namen eingeben',
      lengthMessage: 'Die Länge muss zwischen 2 und 20 Zeichen liegen',
    },
    phone: {
      label: 'Telefon',
      placeholder: 'Bitte Telefonnummer eingeben',
      invalidMessage: 'Ungültiges Telefonnummernformat',
    },
  },
  source: {
    label: 'Benutzerquelle',
    local: 'Systembenutzer',
    localCreate: 'Lokal erstellt',
    wecom: 'WeCom',
    lark: 'Lark',
    dingtalk: 'DingTalk',
  },
}
