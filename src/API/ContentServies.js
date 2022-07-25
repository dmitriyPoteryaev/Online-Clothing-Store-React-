

import axios from "axios";



export   class  ContentServies{


// ранее здесь был локальный url .За счёт этого фронт куртился на локальному порту через json-server
    
static async GetQuery  (ind) {
     const response = await axios.get('https://dmitriypoteryaev.github.io/db/db.json');
     console.log(response)
     let responseEnd =await response.data[ind];
     console.log(response)

    return [...responseEnd];
}

static async PostQuery  (order) {
    const response = await axios.post('http://localhost:3000/requests',{
        order 
    });

 
}

}

