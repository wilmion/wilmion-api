import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import { app } from "./index";

const storage = getStorage(app);

export async function uploadStorage(name: string, file: Buffer) {
  const referency = ref(storage, `images/${name}`);

  const snapshot = await uploadBytes(referency, file);

  return snapshot;
}

export async function getUriFromFile(name: string, folder: string = "images") {
  const referency = ref(storage, `${folder}/${name}`);

  const URI = await getDownloadURL(referency);

  return URI;
}
