import { GET_DATA } from "./types";
import data from "../../data.json";

export const getData = () => {
  return {
    type: GET_DATA,
    payload: data,
  };
};
