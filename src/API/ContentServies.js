

import axios from "axios";



export   class  ContentServies{


// ранее здесь был локальный url .За счёт этого фронт куртился на локальному порту через json-server
    
static async GetQuery  () {
     const response = await axios.get('https://dmitriypoteryaev.github.io/db.db/db.json');
  
    
  

    return response.data;
}

static async PostQuery  (order) {
    const response = await axios.post('http://localhost:3000/requests',{
        order 
    });

 
}

}

