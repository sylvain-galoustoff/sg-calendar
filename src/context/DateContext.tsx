import { createContext, useState, useContext, ReactNode } from "react";
import { setDateToZeroHour } from "../utils/dates";

type DateContextType = {
  date: Date;
  setDate: (date: Date) => void;
};

export const DateContext = createContext<DateContextType>({
  date: setDateToZeroHour(new Date()),
  setDate: () => {},
});

type DateContextProviderProps = {
  children: ReactNode;
};

export const DateContextProvider = ({ children }: DateContextProviderProps) => {
  const [date, setDate] = useState(setDateToZeroHour(new Date()));

  return (
    <DateContext.Provider value={{ date, setDate }}>{children}</DateContext.Provider>
  );
};

export const useDateContext = () => useContext(DateContext);
