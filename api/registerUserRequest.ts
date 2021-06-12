import { SERVER_URL } from "@root/lib/constants";
import { RegisterPayload } from "@root/lib/types";
import axios from "axios";

const registerUserRequest = (payload: RegisterPayload) =>
  axios
    .post(`${SERVER_URL}/register`, payload)
    .then((res) => {
      console.log("Got register response: ", res);
      return res;
    })
    .then((res) => res.data.token);

export default registerUserRequest;
