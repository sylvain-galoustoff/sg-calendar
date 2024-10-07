import { doc, setDoc } from "firebase/firestore";
import { EventType, apiResponseType } from "../@types/types";
import { auth, db } from "../firebase";

export default async function storeEvent(form: EventType): Promise<apiResponseType> {
  console.log("from api ==>", form);
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
