export default {
  title: 'Chat-Benutzer',
  syncUsers: 'Benutzer synchronisieren',
  syncUsersTip: 'Nur neu hinzugefügte Benutzer synchronisieren',
  setUserGroups: 'Benutzergruppen konfigurieren',
  knowledgeTitleTip:
    'Diese Konfiguration tritt erst in Kraft, nachdem die Chat-Benutzer-Authentifizierung in der zugehörigen Anwendung aktiviert wurde.',
  applicationTitleTip:
    'Diese Konfiguration erfordert, dass die Anmeldeauthentifizierung in der Anwendung aktiviert ist.',
  autoAuthorization: 'Automatische Autorisierung',
  authorization: 'Autorisierung',
  batchDeleteUser: 'Ausgewählte {count} Benutzer löschen?',
  settingMethod: 'Konfigurationsmethode',
  append: 'Anhängen',
  group: {
    title: 'Benutzergruppen',
    name: 'Name der Benutzergruppe',
    requiredMessage: 'Bitte Benutzergruppe auswählen',
    usernameOrName: 'Benutzername/Name',
    delete: {
      confirmTitle: 'Löschen der Benutzergruppe bestätigen:',
      confirmMessage:
        'Alle Mitglieder dieser Gruppe werden nach dem Löschen entfernt. Bitte vorsichtig fortfahren!',
    },
    batchDeleteMember: 'Ausgewählte {count} Mitglieder entfernen?',
  },
  syncMessage: {
    title: '{count} Benutzer erfolgreich synchronisiert',
    usernameExist: 'Die folgenden Benutzernamen existieren bereits:',
    nicknameExist: 'Die folgenden Spitznamen existieren bereits:',
  },
}
