import { useState } from "react"



export const useFetching=(callback,CurrentchaptersOfMenu)=>{

const [isLoading,setIsLoading] = useState(false)
const [error,setError] = useState(false)

const fetch= async ()=>{

try{
    setIsLoading(true)
    await callback(CurrentchaptersOfMenu)
  

}
catch(e){

    setError(e.massage)

}
finally{

    setIsLoading(false)

}


}

return[fetch,isLoading,error]


}