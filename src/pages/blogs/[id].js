
import React, { useEffect , useState } from 'react';
import {useRouter} from 'next/router';
import NavBar from "@/components/NavBar";
import FooterGrid from "@/components/FooterGrid";
import BlogLayoutCard from '@/components/BlogLayoutComponent';
import { firebaseApp } from "../util/firebase";

import {
  getFirestore,
  getDoc,
    doc,
  } from "firebase/firestore";

export async function getBlogs(blogId) { 
  console.log("collectionRef get blog function called")
  const db = getFirestore(firebaseApp);

  const collectionRef = doc(db, "blogs", blogId)
  console.log("collectionRef", collectionRef)
      const  snapshots = await getDoc(collectionRef)
      const docs = snapshots.data() 
      return docs
}

export default function blogPage() {
  const router = useRouter()
  const blogId = router.query.id
  console.log("blogId", blogId)
  
  const [blog, setBlog] = useState({});

  useEffect(() => {
    if(blogId){
      getBlogs(blogId).then(data => setBlog(data))
  }
  console.log("this is useEffect")
  },[blogId])

  return (
      <main >
         <NavBar showElement></NavBar>
         <BlogLayoutCard ablog={blog}></BlogLayoutCard>
        <FooterGrid></FooterGrid>
      </main>
    );
  }
  