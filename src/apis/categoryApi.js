import axios from "axios"

export const getCategories =async ()=>{
    console.log("Categories");
    const data = await axios.get(`http://localhost:5000/getcategories`)
    return data
}