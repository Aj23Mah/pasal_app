import {db} from '../firebase';
import { getFirestore, collection, getDoc, addDoc, updateDoc, deleteDoc, doc, getDocs } from "firebase/firestore";

export const ApiAddProducts =async (product) => {
   await addDoc(collection(db, "products"), {
      ...product
   });
}

export const ApiEditProduct = (id,data) => {
   const docRef = doc(db, "products", id);
   updateDoc(docRef, data)
   .then((querySnapshot)=>{               
       const newData = querySnapshot.docs
           .map((doc) => ({...doc.data(), id:doc.id }));
       console.log(newData);
   })
}

export const ApiDeleteProduct = (id) => {
   const docRef = doc(db, "products", id);
   deleteDoc(docRef);
}

export const ApiGetProducts = async () => {
   const data =await getDocs(collection(db, "products"));
    return data.docs.map((doc) => ({...doc.data(), id:doc.id }));
}

const APIGetDocumentById = async (documentId) => {
   const docRef = doc(db, "products", documentId);
 
   try {
     const docSnapshot = await getDoc(docRef);
 
     if (docSnapshot.exists()) {
       // Document exists, you can access its data using docSnapshot.data()
       const documentData = docSnapshot.data();
       console.log("Document Data:", documentData);
       return documentData;
     } else {
       console.log("Document does not exist.");
       return null;
     }
   } catch (error) {
     console.error("Error getting document:", error);
     throw error; // Propagate the error
   }
 };