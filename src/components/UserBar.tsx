import { IoPersonCircleOutline, IoPower } from "react-icons/io5";

function UserBar() {
  return (
    <div id="user-bar">
      <div id="user-bar-left">
        <IoPersonCircleOutline /> Connecté en tant qu'invité
      </div>
      <div id="user-bar-right">
        <button className="flat" type="button">
          <IoPower /> Déconnection
        </button>
      </div>
    </div>
  );
}

export default UserBar;
