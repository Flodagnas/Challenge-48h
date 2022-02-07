import axios from "axios";

const TestAPI = axios.create({
    baseURL: "https://swapi.dev/api/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default class API{

    static async APIPeople(){
        
    }

}