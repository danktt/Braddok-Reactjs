import axios from "axios";

export const api = axios.create({
    baseURL: "http://cautela_material.test/api/"
});
