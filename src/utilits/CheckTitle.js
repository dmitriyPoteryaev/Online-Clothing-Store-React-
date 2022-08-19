function  CheckTitle(title){

 
    return  [...title.split('').filter((elem,i)=> i<=23).join(''),'...']
    
        
    
    }
    
    export default CheckTitle