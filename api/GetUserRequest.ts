import { SERVER_URL } from "@root/lib/constants";
import { User } from "@root/lib/types";
import axios from "axios";

const getUserRequest = (token: string) => {
  return axios
    .get<User[]>(`${SERVER_URL}/request-user`, {
      params: { token },
    })
    .then((res) => res.data[0]);
};

export default getUserRequest;
