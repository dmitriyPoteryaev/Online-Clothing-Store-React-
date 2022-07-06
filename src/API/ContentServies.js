

import axios from "axios";

export   class  ContentServies{

static async GetQuery  (ind) {
     const response = await axios.get(` http://localhost:3000/${ind}`);

  

    return [...response.data];
}

static async PostQuery  (order) {
    const response = await axios.post(`  http://localhost:3000/requests`,{

        order 


    });

 
}

}

