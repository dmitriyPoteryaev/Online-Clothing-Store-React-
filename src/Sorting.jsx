import React from 'react';
import Filter from './components/UI/Filter/Filter'


const Sorting = ({filterSelector,setfilterSelector}) => {

   
    
 


    return (
        
        <Filter
        filterSelector={filterSelector}
        setfilterSelector={setfilterSelector}
          defaultName="Сортировка по:"
          options={[
            { name: "По цене", value: "Price_rub" },
            { name: "По популярности", value: "rating" },
          ]}
        />
    
    );
};

export default Sorting;