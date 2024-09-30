export const getDateSlug = (dateObj: Date): string => {
  const slug = "/" + dateObj.getFullYear() + "/" + Number(dateObj.getMonth() + 1);
  return slug;
};

type ParamsType = {
  year?: string;
  month?: string;
};

export const getDateFromParams = (params: ParamsType): Date | null => {
  if (params.year && params.month) {
    const dateObj = new Date(Number(params.year), Number(params.month) - 1);
    return dateObj;
  }
  return null;
};
