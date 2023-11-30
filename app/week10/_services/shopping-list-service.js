import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, getDoc } from "firebase/firestore";

export const getItems = async (id ) => {
    try{
        const docRef = doc(db, "items", id );
        const docSnap = await getDoc(docRef); 

        if (docSnap.exists()){
            
        }
    }
    catch{
        
    }

}