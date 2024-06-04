import axios from "axios";

export const makeRequest = axios.create({
    baseUrl: process.env.REACT_APP_API_URL,
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
    },
});