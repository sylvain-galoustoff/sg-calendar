import { getTime } from "date-fns";
import { RouteParams } from "../@types/types";

export const getDateSlug = (dateObj: Date): string => {
  const slug = "/" + dateObj.getFullYear() + "/" + Number(dateObj.getMonth() + 1);
  return slug;
};

export const getMonthFromParams = (params: RouteParams): Date => {
  const dateObj = new Date(Number(params.year), Number(params.month) - 1);
  return dateObj;
};

export const setDateToZeroHour = (date: Date) => {
  date.setHours(0, 0, 0, 0);
  return date;
};

export const setTimestampZeroHour = (date: Date) => {
  return getTime(setDateToZeroHour(date));
};

export const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];
