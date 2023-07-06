import axios from "axios"


export const getReplies =async ()=>{
    const data = await axios.get(`http://localhost:5000/getReplies`)
    console.log(data);
    return data
}