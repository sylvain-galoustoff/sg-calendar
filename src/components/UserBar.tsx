import { signOut } from "firebase/auth";
import { IoPersonCircleOutline, IoPower } from "react-icons/io5";
import { auth } from "../firebase";

function UserBar() {
  const userLogOut = async () => {
    signOut(auth);
  };

  return (
    <div id="user-bar">
      <div id="user-bar-left">
        <IoPersonCircleOutline /> Connecté en tant qu'invité
      </div>
      <div id="user-bar-right">
        <button className="flat" type="button" onClick={userLogOut}>
          <IoPower /> Déconnection
        </button>
      </div>
    </div>
  );
}

export default UserBar;
