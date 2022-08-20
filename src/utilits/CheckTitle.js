function  CheckTitle(title){

 
    return  [...title.split('').filter((elem,i)=> i<=19).join(''),'...']
    
        
    
    }
    
    export default CheckTitle