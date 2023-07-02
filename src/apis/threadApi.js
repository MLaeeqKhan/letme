import axios from "axios"


export const getThreads =async ()=>{
    const data = await axios.get(`/getThreads`)
    // console.log(data);
    return data
}