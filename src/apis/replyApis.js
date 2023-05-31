import axios from "axios"


export const getReplies =async ()=>{
    const data = await axios.get(`/getReplies`)
    console.log(data);
    return data
}