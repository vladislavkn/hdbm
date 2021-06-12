import { SERVER_URL } from "@root/lib/constants";
import { LoginPayload } from "@root/lib/types";
import axios from "axios";

const loginUserRequest = (payload: LoginPayload) =>
  axios
    .post(`${SERVER_URL}/login`, payload)
    .then((res) => {
      console.log("Got login response: ", res);
      return res;
    })
    .then((res) => res.data.token);

export default loginUserRequest;
