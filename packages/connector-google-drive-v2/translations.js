const translations = {
  en: {
    uploading: 'Uploading',
    uploadingItem: 'Uploading 1 item', // en
    uploadingItems: 'Uploading {quantity} items', // en
    upload: 'Upload',
    remove: 'Remove',
    downloadingName: 'Downloading {name}...', // en
    downloadingItem: 'Downloading 1 item', // en
    downloadingItems: 'Downloading {quantity} items', // en
    download: 'Download',
    rename: 'Rename',
    creating: 'Creating',
    creatingName: 'Creating {name}...', // en
    create: 'Create',
    createFolder: 'Create folder',
    items: 'items',
    item: 'item',
    error: 'error', // en
    folderName: 'Folder name',
    fileExist: 'File or folder with name {name} already exists',
    newName: 'New name',
    emptyName: 'Name can\'t be empty',
    tooLongName: 'Name can\'t contain more than 255 characters', // en
    notAllowedCharacters: 'Name contains not allowed characters', // en
    doNotRespectBill: 'We too do not respect Bill', // en
    title: 'Title',
    fileSize: 'File size',
    lastModified: 'Last modified',
    signInSuccess: 'Google Drive sign-in success', // en
    signInFail: 'Google Drive sign-in fail', // en
    notInitAPIClient: 'Can\'t init Google API client', // en
    successInit: 'Google API client successfully initialized', // en
  },

  de: {
    uploading: 'Wird hochgeladen',
    uploadingItem: 'Uploading 1 item', // en
    uploadingItems: 'Uploading {quantity} items', // en
    upload: 'Hochladen',
    remove: 'Löschen',
    downloadingName: 'Downloading {name}...', // en
    downloadingItem: 'Downloading 1 item', // en
    downloadingItems: 'Downloading {quantity} items', // en
    download: 'Herunterladen',
    rename: 'Umbenennen',
    creating: 'Wird erstellt',
    create: 'Erstellen',
    createFolder: 'Verzeichnis erstellen',
    creatingName: 'Creating {name}...', // en
    items: 'Elemente',
    item: 'Element',
    error: 'error', // en
    folderName: ' Verzeichnisname',
    fileExist: 'Die Datei oder Verzeichnis mit dem Namen {name} existiert bereits',
    newName: 'Neuer Name',
    emptyName: 'Der Name darf nicht leer sein',
    tooLongName: 'Name can\'t contain more than 255 characters', // en
    notAllowedCharacters: 'Name contains not allowed characters', // en
    doNotRespectBill: 'We too do not respect Bill', // en
    title: 'Titel',
    fileSize: 'Dateigröße',
    lastModified: 'Zuletzt geändert',
    signInSuccess: 'Google Drive sign-in success', // en
    signInFail: 'Google Drive sign-in fail', // en
    notInitAPIClient: 'Can\'t init Google API client', // en
    successInit: 'Google API client successfully initialized', // en
  },

  // need: {
  //   creatingName: 'Creating {name}...',
  //   doNotRespectBill: 'We too do not respect Bill',
  //   downloadingItem: 'Downloading 1 item',
  //   downloadingItems: 'Downloading {quantity} items',
  //   downloadingName: 'Downloading {name}...',
  //   error: 'error',
  //   fileExist: 'File or folder with name {name} already exists',
  //   notAllowedCharacters: 'Name contains not allowed characters',
  //   notInitAPIClient: 'Can\'t init Google API client',
  //   signInFail: 'Google Drive sign-in fail',
  //   signInSuccess: 'Google Drive sign-in success',
  //   successInit: 'Google API client successfully initialized',
  //   tooLongName: 'Name can\'t contain more than 255 characters',
  //   uploadingItem: 'Uploading 1 item',
  //   uploadingItems: 'Uploading {quantity} items',
  //   zippingItem: 'Zipping 1 item',
  //   zippingItems: 'Zipping {quantity} items'
  // },
};

export default function getMessage(locale, key, params=null) {
  let translationExists = (translations[locale] && translations[locale][key]);
  let translation = translationExists ? translations[locale][key] : translations['en'][key];
  if (params === null) {
    return translation;
  }

  let re = /{\w+}/g;
  function replace(match) {
    let replacement = match.slice(1, -1);
    return params[replacement] ? params[replacement] : '';
  }

  return translation.replace(re, replace);
}