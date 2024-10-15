import { useEffect, useState } from "react";
import SelectedDate from "./SelectedDate";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import Events from "../Events/Events";
import Forms from "../auth/Forms";
import { EventType } from "../../@types/types";

type SidebarProps = {
  events: EventType[];
};

function Sidebar({ events }: SidebarProps) {
  const [isConnectedUser, setIsConnectedUser] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setIsConnectedUser(false);
      } else {
        setIsConnectedUser(true);
      }
    });
  });

  return (
    <>
      <SelectedDate />
      {isConnectedUser ? <Events events={events} /> : <Forms />}
    </>
  );
}

export default Sidebar;
