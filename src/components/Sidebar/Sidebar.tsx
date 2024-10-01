import { useEffect, useState } from "react";
import SelectedDate from "./SelectedDate";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import Events from "../Events/Events";
import Forms from "../auth/Forms";

function Sidebar() {
  const [isConnectedUser, setIsConnectedUser] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setIsConnectedUser(false);
      }
    });
  });

  return (
    <>
      <SelectedDate />
      {isConnectedUser ? <Events /> : <Forms />}
    </>
  );
}

export default Sidebar;
