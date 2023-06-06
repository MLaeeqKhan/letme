import axios from "axios"

export const getCategories =async ()=>{
    const data = await axios.get(`/getcategories`)
    return data
}