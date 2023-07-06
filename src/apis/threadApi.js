import axios from "axios"


export const getThreads =async ()=>{
    const data = await axios.get(`http://localhost:5000/getThreads`)
    // console.log(data);
    return data
}