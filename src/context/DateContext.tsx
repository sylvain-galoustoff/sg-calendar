import { createContext, useState, useContext, ReactNode } from "react";

type DateContextType = {
  date: Date;
  setDate: (date: Date) => void;
};

export const DateContext = createContext<DateContextType>({
  date: new Date(),
  setDate: () => {},
});

type DateContextProviderProps = {
  children: ReactNode;
};

export const DateContextProvider = ({ children }: DateContextProviderProps) => {
  const [date, setDate] = useState(new Date());

  return (
    <DateContext.Provider value={{ date, setDate }}>{children}</DateContext.Provider>
  );
};

export const useDateContext = () => useContext(DateContext);
