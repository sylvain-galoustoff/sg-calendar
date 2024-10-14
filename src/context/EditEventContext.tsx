import { createContext, useState, ReactNode, useContext } from "react";
import { setTimestampZeroHour } from "../utils/dates";
import { EventType } from "../@types/types";

type EditEventContextType = {
  editForm: EventType;
  setEditForm: (form: EventType) => void;
};

const emptyForm: EventType = {
  uid: "",
  date: setTimestampZeroHour(new Date()),
  eventName: "",
  id: "",
  note: "",
  time: "",
  agenda: "default",
};

export const EditEventContext = createContext<EditEventContextType>({
  editForm: emptyForm,
  setEditForm: () => {},
});

type EditEventContextProviderProps = {
  children: ReactNode;
};

export const EditEventContextProvider = ({ children }: EditEventContextProviderProps) => {
  const [editForm, setEditForm] = useState(emptyForm);

  return (
    <EditEventContext.Provider value={{ editForm, setEditForm }}>
      {children}
    </EditEventContext.Provider>
  );
};

export const useEditEventContext = () => useContext(EditEventContext);
