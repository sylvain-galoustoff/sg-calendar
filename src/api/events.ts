import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { EventType, apiResponseType } from "../@types/types";
import { auth, db } from "../firebase";

export const observeEvents = (uid: string, callback: (events: EventType[]) => void) => {
  const q = query(collection(db, "events"), where("uid", "==", uid));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const data = snapshot.docs.map((doc) => doc.data() as EventType);
    callback(data);
  });
  return unsubscribe;
};

export async function storeEvent(form: EventType): Promise<apiResponseType> {
  const newEvent = { ...form };
  newEvent.uid = auth.currentUser ? auth.currentUser.uid : "undefined";
  newEvent.id = Date.now().toString();
  if (newEvent.date && newEvent.eventName) {
    try {
      await setDoc(doc(db, "events", newEvent.id), newEvent);
      return {
        success: true,
        message: `${newEvent.eventName} enregistré`,
      };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: `Erreur serveur`,
      };
    }
  } else {
    return {
      success: false,
      message: `Le champs "Nom de l'événement" doit être rempli`,
    };
  }
}

export async function updateEvent(form: EventType): Promise<apiResponseType> {
  try {
    await updateDoc(doc(db, "events", form.id), form);
    return {
      success: true,
      message: `Evénement ${form.eventName} modifié`,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: `L'événement n'a pas pu être modifié`,
    };
  }
}

export const deleteEvent = async (eventId: string) => {
  try {
    await deleteDoc(doc(db, "events", eventId));
    return {
      success: true,
      message: `Evénement ${eventId} supprimé`,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: `La suppression a échoué`,
    };
  }
};
