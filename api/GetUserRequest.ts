import { SERVER_URL } from "@root/lib/constants";
import { User } from "@root/lib/types";
import axios from "axios";

const getUserRequest = (token: string) => {
  return axios
    .get(`${SERVER_URL}/request-user`, {
      params: { token },
    })

    .then((res) => {
      console.log(res);
      return res;
    });
};

export default getUserRequest;
