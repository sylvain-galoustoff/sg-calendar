import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthParams } from "../@types/types";
import { auth } from "../firebase";

export const logUser = async (form: AuthParams) => {
  if (form.usermail && form.userpass) {
    try {
      await signInWithEmailAndPassword(auth, form.usermail, form.userpass);
      return "success";
    } catch (error) {
      return error;
    }
  }
};
