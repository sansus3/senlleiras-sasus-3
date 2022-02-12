//npm install --save firebase //https://learnvue.co/2021/06/a-vue-firebase-authentication-tutorial-vue-3-and-firebase/#user-registration
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Set the configuration for your app
// TODO: Replace with your app's config object
//arboresenlleira@gmail.com
//Usuario Sansus Senlleira
//pass: apdtmMdp27042304()

//Firebase:
//Proyecto arbores-senlleiras

const firebaseConfig = {
    apiKey: '',//your-api-key
    authDomain: 'arbores-senlleiras-b52f1',//<your-auth-domain>
    databaseURL: '',//<your-database-url>
    storageBucket: 'gs://arbores-senlleiras-b52f1.appspot.com',//<your-storage-bucket-url>'
}

const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket

export const storage = getStorage(firebaseApp);