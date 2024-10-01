import ButtonIcon from "../common/ButtonIcon";
import { IoCheckmark } from "react-icons/io5";

type SigninProps = {
  toggleForm: (form: "login") => void;
};

function Signin({ toggleForm }: SigninProps) {
  const changeForm = () => {
    toggleForm("login");
  };

  return (
    <form className="auth-form" id="login-form">
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
        <input type="text" id="usermail" placeholder="Votre email" />
      </div>
      <div className="form-group">
        <label className="sr-only" htmlFor="userpass">
          Nom de l'événement
        </label>
        <input type="password" id="userpass" placeholder="Votre mot de passe" />
      </div>
      <div className="form-group">
        <label className="sr-only" htmlFor="confirmpass">
          Nom de l'événement
        </label>
        <input type="password" id="confirmpass" placeholder="Confirmez le mot de passe" />
      </div>
      <div className="button-group">
        <ButtonIcon classNames="primary" icon={<IoCheckmark />} />
      </div>
    </form>
  );
}

export default Signin;
