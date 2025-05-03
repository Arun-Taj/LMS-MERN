import {v2 as couldinary} from 'cloudinary'

const connectCouldinary=async()=>{
    couldinary.config({
        cloud_name:process.env.CLOUDNARY_NAME,
        api_key:process.env.CLOUDNARY_API_KEY,
        api_secret:process.env.CLOUDNARY_SECRET_KEY,

    })
}
export default connectCouldinary