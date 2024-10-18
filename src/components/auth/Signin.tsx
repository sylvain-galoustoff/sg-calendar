import { useState, ChangeEvent, FormEvent } from "react";
import ButtonIcon from "../common/ButtonIcon";
import { IoCheckmark } from "react-icons/io5";
import { registerUser } from "../../api/auth";
import { AnimatePresence, motion } from "framer-motion";

type SigninProps = {
  toggleForm: (form: "login") => void;
};

function Signin({ toggleForm }: SigninProps) {
  const emptyForm = {
    usermail: "",
    userpass: "",
  };
  const [form, setForm] = useState(emptyForm);
  const [passIsValid, setPassIsValid] = useState(true);

  const changeForm = () => {
    toggleForm("login");
  };

  const inputChange = (e: ChangeEvent<HTMLInputElement>, target: string) => {
    setForm((prevState) => ({
      ...prevState,
      [target]: e.target.value,
    }));
  };

  const validator = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 0 && value !== form.userpass) {
      setPassIsValid(false);
    } else {
      setPassIsValid(true);
    }
  };

  const submitSignin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await registerUser(form);
    console.log(response);
  };

  return (
    <AnimatePresence>
      <motion.form
        className="auth-form"
        id="login-form"
        onSubmit={submitSignin}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        transition={{ ease: "easeOut", duration: 0.15 }}
      >
        <div className="form-header">
          <h1 className="big bold">Inscription</h1>
          <p className="small">
            Déjà inscrit ?{" "}
            <a className="button ghost" type="button" onClick={changeForm}>
              Connexion
            </a>{" "}
          </p>
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="usermail">
            Nom de l'événement
          </label>
          <input
            type="text"
            id="usermail"
            placeholder="Votre email"
            onChange={(e) => inputChange(e, "usermail")}
          />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="userpass">
            Nom de l'événement
          </label>
          <input
            type="password"
            id="userpass"
            placeholder="Votre mot de passe"
            onChange={(e) => inputChange(e, "userpass")}
          />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="confirmpass">
            Nom de l'événement
          </label>
          <input
            type="password"
            id="confirmpass"
            placeholder="Confirmez le mot de passe"
            onChange={validator}
          />
          {!passIsValid && (
            <p className="validator small danger">Les mots de passe sont différents</p>
          )}
        </div>
        <div className="button-group">
          <ButtonIcon classNames="primary" type="submit" icon={<IoCheckmark />} />
        </div>
      </motion.form>
    </AnimatePresence>
  );
}

export default Signin;
