export const defineDateSlug = (dateObj: Date) => {
  const slug = "/" + dateObj.getFullYear() + "/" + Number(dateObj.getMonth() + 1);
  return slug;
};
