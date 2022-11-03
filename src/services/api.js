import axios from "axios";

export const baseUrl = "https://preonboarding.platdev.net/api/";
export const API = axios.create({
    baseURL: baseUrl,
    timeout: 20000,
    headers: {
        "Content-Type": "application/json",
    },
});
