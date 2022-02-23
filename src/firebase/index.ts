import { initializeApp } from "firebase/app";

import config from "@config/index";

export const app = initializeApp(config.firebaseConfig);
