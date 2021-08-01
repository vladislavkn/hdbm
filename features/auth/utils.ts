import { trimObjectDeep } from "@root/lib/utils";
import { UserDTO, User } from "./types";

export const parseUser = (userDTO: UserDTO) =>
  trimObjectDeep<User>({
    firstname: userDTO.firstname,
    lastname: userDTO.lastname,
    email: userDTO.email,
    hasPassportData: userDTO.haspassportdata,
    id: userDTO.id,
  });
