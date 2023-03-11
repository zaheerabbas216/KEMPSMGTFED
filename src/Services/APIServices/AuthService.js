import axios from "axios";
import { config } from "../Configuration";

export const LoginService = async (data) => {
  const response = await axios.post(config.login, data);
  if (response) {
    return response;
  } else {
    console.log("error logging in service");
  }
};

export const SignupService = async (data) => {
  const response = await axios.post(config.signup, data);
  if (response) {
    return response;
  } else {
    console.log("error signup the user");
  }
};
