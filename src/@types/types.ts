export type RouteParams = {
  year?: string;
  month?: string;
};

export type AuthParams = {
  usermail: string;
  userpass: string;
};

export type EventType = {
  uid: string;
  date: number;
  eventName: string;
  id: string;
  note: string;
  time: string;
  agenda: string | null;
};

export type apiResponseType = {
  success: boolean;
  message: string;
};
