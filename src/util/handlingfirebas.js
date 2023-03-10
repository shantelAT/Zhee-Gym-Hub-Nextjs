import React from "react";
import {ref, getDownloadURL, uploadBytes} from "firebase/storage";
import {getStorage } from "firebase/storage"
import { firebaseApp } from "./firebase";

import { //douplicate, another in db.js
  getFirestore,
    doc,
    collection,
    setDoc,
    serverTimestamp,

  } from "firebase/firestore";

  import {  //douplicate, another in db.js
    QueryClient,
    QueryClientProvider as QueryClientProviderBase,
  } from "react-query";


// Initialize Firestore
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp );

// React Query client
const client = new QueryClient();

export function createTutorialDoc() { 
    return doc(collection(db, "tutorials"));
  }

  export function createBlogDoc() {  // Change to one form
    return doc(collection(db, "blogs"));
  }

  export const uploadFile = async(videoFile, pathtofolder) => { 
    const storageRef = ref(storage, pathtofolder);
    const result = await uploadBytes(storageRef, videoFile);
    alert("Tutorial Uploaded")
    return getDownloadURL( result.ref)
   
  };

  export const uploadBlogFile = async(blogImage, pathtofolder) => { 
    const storageRef = ref(storage, pathtofolder);
    const result = await uploadBytes(storageRef, blogImage);
    alert("Tutorial Uploaded")
    return getDownloadURL( result.ref)
   
  };


  /* Create a new item */
export function setTutorialData(dataRefer, data) {
    return setDoc(dataRefer, {
      ...data,
      createdAt: serverTimestamp(),
    });
}

export function setBlogData(dataRefer, data) {
  return setDoc(dataRefer, {
    ...data,
    createdAt: serverTimestamp(),
  });
}
