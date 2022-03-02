export interface Config {
  mode: "DEV" | "PROD";
  typeorm: {
    url: string;
  };
  port: string | number;
  hostAllowedList: string[];
  encryption: {
    saltRounds: number;
  };
  jwt: {
    secret: string;
  };
  firebaseConfig: {
    apiKey: string;
    authDomain: string;
    databaseURL?: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId?: string;
  };
}
