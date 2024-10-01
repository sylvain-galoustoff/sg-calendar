import ButtonIcon from "../common/ButtonIcon";
import { IoCheckmark } from "react-icons/io5";

type LoginProps = {
  toggleForm: (form: "signin") => void;
};

function Login({ toggleForm }: LoginProps) {
  const changeForm = () => {
    toggleForm("signin");
  };

  return (
    <form className="auth-form" id="login-form">
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
        <input type="text" id="usermail" placeholder="Votre email" />
      </div>
      <div className="form-group">
        <label className="sr-only" htmlFor="userpass">
          Nom de l'événement
        </label>
        <input type="password" id="userpass" placeholder="Votre mot de passe" />
      </div>
      <div className="button-group">
        <ButtonIcon classNames="primary" icon={<IoCheckmark />} />
      </div>
    </form>
  );
}

export default Login;
