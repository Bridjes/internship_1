import axios from "axios";

export default class FetchQuestions {
    static async getAll() {
        const response = await axios.get("http://jservice.io/api/clues", {
            params: {
                offset: Math.floor(Math.random() * 100000) + 1
            }
        })
            return response.data
    }
}