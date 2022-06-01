import axios from 'axios';
const url = 'http://localhost:8000'



export const authlisting = async (listing) => {
    try {
        // console.log("authlisting", listing, " ", "url  :", url)
        return await axios.post(`${url}/save`, listing)
    } catch (error) {
        console.log(error)
    }
}


export const authview = async () => {
    try {
        const { data } = await axios.get(`${url}/view`);
        return data;
    } catch (error) {
        console.log(error)

    }
}
export const authdelete = async (name) => {
    try {
        // console.log("authlisting", listing, " ", "url  :", url)
        const { data } = await axios.post(`${url}/delete`, name);
        return data;
    } catch (error) {
        console.log(error)
    }
}


