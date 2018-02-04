// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false, 
  firebase: {
    apiKey: "AIzaSyC3uD2pDPhMWMZfnr3N-z9zbxWrzNn_KCs",
    authDomain: "angular5-firebase-pwa-demo.firebaseapp.com",
    databaseURL: "https://angular5-firebase-pwa-demo.firebaseio.com",
    projectId: "angular5-firebase-pwa-demo",
    storageBucket: "angular5-firebase-pwa-demo.appspot.com",
    messagingSenderId: "639892591643"
  }
};
