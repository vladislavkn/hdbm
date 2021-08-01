import { ID } from "@root/lib/types";

export type RegisterOptions = {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;
};

export type LoginOptions = {
  email: string;
  password: string;
};

export type User = {
  firstname: string;
  lastname: string;
  email: string;
  hasPassportData: boolean;
  id: ID;
};

export type UserDTO = {
  haspassportdata: boolean;
  email: string;
  firstname: string;
  id: ID;
  lastname: string;
  phone: string;
};

export type PassportOptions = {
  number: number;
  series: number;
  provider: string;
  date: Date;
  file: FileList;
};
