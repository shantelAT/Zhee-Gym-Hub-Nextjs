import React from 'react';
import ReactPlayer from 'react-player';
import {useRouter} from 'next/router';
import {useState, useEffect} from "react";
import NavBar from "@/components/NavBar";
import VideoPlayer from '@/components/VideoPlayer';
import FooterGrid from "@/components/FooterGrid";
import { firebaseApp } from "../util/firebase";
import { getFirestore,doc,getDoc} from "firebase/firestore";

export async function getTutorial(tutorialId){
  const db = getFirestore(firebaseApp);

  const docRef = doc(db, "tutorials", tutorialId);
  const snapshots = await getDoc(docRef);
  const docs = snapshots.data() 
      return docs
}

export default function tutorialPage(){
  const router = useRouter()
  const tutorialId = router.query.id
  const [tutorial, setTutorial] = useState([]);

  useEffect(() => {
    if(tutorialId){
    getTutorial(tutorialId).then(data => setTutorial(data))
  }
  },[tutorialId])

  console.log("tutorial :",tutorial)

  return (
    <main className='videoplayer' >
        <NavBar showElement></NavBar>
        <VideoPlayer atutorial={tutorial}></VideoPlayer>
        <FooterGrid></FooterGrid>
    </main>
    
  )
  
}
