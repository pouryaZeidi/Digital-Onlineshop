import { getdataprops } from "@/types/type"
import axios from "axios"


export const getData = async ({url,setLoading,setError}:getdataprops) =>{
    setLoading(true)
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`)
        return response.data 
    } catch (error) {
        setError(true)
    }finally{
        setLoading(false)

    }

}