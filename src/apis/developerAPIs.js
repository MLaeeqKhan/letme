import axios from "axios";

export const getDeveloper= async()=>{
const data = await axios.get('/getDeveloper');
return data;
}