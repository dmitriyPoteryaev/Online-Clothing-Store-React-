import { useState } from "react"



export const useFetching=(callback,CurrentchaptersOfMenu)=>{

const [isLoading,setIsLoading] = useState(false)
const [error,setError] = useState('')

const fetch= async ()=>{

try{
    setIsLoading(true)
    await callback(CurrentchaptersOfMenu)
  

}
catch(e){

    setError(e.message)

}
finally{

    setIsLoading(false)

}


}

return[fetch,isLoading,error]


}