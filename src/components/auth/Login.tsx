import { ChangeEvent, FormEvent, useState } from "react";
import ButtonIcon from "../common/ButtonIcon";
import { IoCheckmark } from "react-icons/io5";
import { logUser } from "../../api/auth";

type LoginProps = {
  toggleForm: (form: "signin") => void;
};

function Login({ toggleForm }: LoginProps) {
  const emptyForm = {
    usermail: "",
    userpass: "",
  };
  const [form, setForm] = useState(emptyForm);

  const changeForm = () => {
    toggleForm("signin");
  };

  const inputChange = (e: ChangeEvent<HTMLInputElement>, target: string) => {
    setForm((prevState) => ({
      ...prevState,
      [target]: e.target.value,
    }));
  };

  const submitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await logUser(form);
    console.log(response);
  };

  return (
    <form className="auth-form" id="login-form" onSubmit={submitLogin}>
      <div className="form-header">
        <h1 className="big bold">Connexion</h1>
        <p className="small">
          Pas de compte ?{" "}
          <a className="button ghost" type="button" onClick={changeForm}>
            Inscription
          </a>{" "}
        </p>
      </div>
      <div className="form-group">
        <label className="sr-only" htmlFor="usermail">
          Nom de l'événement
        </label>
        <input
          type="email"
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
      <div className="button-group">
        <ButtonIcon classNames="primary" type="submit" icon={<IoCheckmark />} />
      </div>
    </form>
  );
}

export default Login;
