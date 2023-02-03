import axios from "axios";
import { baseURL } from "./environement";

export const api = axios.create({
  withCredentials: true,
  baseURL: baseURL,
  headers: {
    Authorization : `Bearer ${localStorage.getItem("user")}`
  }
});
