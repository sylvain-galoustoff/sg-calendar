import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AuthParams } from "../@types/types";
import { auth } from "../firebase";

export const logUser = async (form: AuthParams) => {
  if (form.usermail && form.userpass) {
    try {
      await signInWithEmailAndPassword(auth, form.usermail, form.userpass);
      return "success";
    } catch (error) {
      console.error(error);
      return error;
    }
  }
};

export const registerUser = async (form: AuthParams) => {
  if (form.usermail && form.userpass) {
    try {
      await createUserWithEmailAndPassword(auth, form.usermail, form.userpass);
      return "success";
    } catch (error) {
      console.error(error);
      return error;
    }
  }
};
