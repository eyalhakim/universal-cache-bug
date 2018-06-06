// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  wekupediaApi: 'http://localhost:3100',
  config: {
    apiKey: "AIzaSyDxZn0DvB17i41ZdGrLoFT5d_8iRRUOIII",
    authDomain: "wekudo-website-new.firebaseapp.com",
    databaseURL: "https://wekudo-website-new.firebaseio.com",
    projectId: "wekudo-website-new",
    storageBucket: "",
    messagingSenderId: "1081155749523"
  }
};
