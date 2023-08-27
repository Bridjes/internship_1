import axios from "axios";

export default class FetchCategory {
    static async getAll() {
        try {
            const response = await axios.get("http://jservice.io/api/categories", {
                params: {
                   count: 100
                }
            })
            return response.data
        }
        catch (e) {
            console.log(e)
        }
    }
}