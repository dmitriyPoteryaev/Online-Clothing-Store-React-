

export const useSortingContent=(somethingContent,filterSelector)=>{

 
        // setfilterSelector(filterSelector);
    
        
        return  [...somethingContent].sort(
            (a, b) => b[filterSelector] - a[filterSelector]
          )
        
    

     
     
  }