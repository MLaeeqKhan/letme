//developerApis.js file
import axios from "axios";

export const getDeveloper= async()=>{
const data = await axios.get('http://localhost:5000/getDeveloper');
return data;
}