import { RouteParams } from "../@types/types";

export const getDateSlug = (dateObj: Date): string => {
  const slug = "/" + dateObj.getFullYear() + "/" + Number(dateObj.getMonth() + 1);
  return slug;
};

export const getDateFromParams = (params: RouteParams): Date => {
  const dateObj = new Date(Number(params.year), Number(params.month) - 1);
  return dateObj;
};
