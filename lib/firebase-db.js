import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  query,
  onSnapshot,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_DB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DB_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_DB_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_DB_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_DB_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_DB_APP_ID,
};

export const app = initializeApp(firebaseConfig, 'DBApp');
export const initFirebaseAuth = () => app;

export const db = getFirestore(app);

export const getRecord = async ({ tableId, recordId }) => {
  if (tableId && recordId) {
    const recordRef = doc(db, tableId, recordId);
    const snap = await getDoc(recordRef);

    if (snap.exists()) {
      return snap.data();
    } else {
      console.log('No member data found!');
    }
  } else {
    console.log('User is not logged in.');
  }
};

export async function updateRecord({ tableId, recordId, newFields }) {
  try {
    const docRef = doc(db, tableId, recordId);
    await updateDoc(docRef, newFields);
    console.log(`Document with ID '${recordId}' updated successfully!`);
  } catch (error) {
    console.error('Error updating document:', error.message);
    throw error;
  }
}

export async function createRecord({ tableId, newFields, recordId = null }) {
  try {
    let docRef;
    let id;

    if (recordId) {
      // Use a specific document ID
      const docReference = doc(collection(db, tableId), recordId);
      await setDoc(docReference, newFields);
      id = recordId;
    } else {
      // Use an auto-generated document ID
      docRef = await addDoc(collection(db, tableId), newFields);
      id = docRef.id;
      await updateDoc(doc(db, tableId, id), { id });
    }
    return { id, ...newFields };
  } catch (error) {
    console.error('Error creating document:', error.message);
    throw error;
  }
}

export async function getCollection(tableId) {
  try {
    const ref = collection(db, tableId);
    const querySnapshot = await getDocs(ref);

    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}

export const setupFirestoreListener = ({ collectionName, onDataUpdate }) => {
  const q = query(collection(db, collectionName));
  const unsubscribe = onSnapshot(
    q,
    snapshot => {
      const newData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      onDataUpdate(newData);
    },
    error => {
      console.error('Error settting up firestore listener:', error);
      throw error;
    }
  );
  return unsubscribe;
};
