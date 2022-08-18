import React from 'react';
import classes from './Filter.module.css';
const Select = ({defaultName,options,filterSelector,setfilterSelector}) => {
    return (
        <select 
        className={classes.select}
        value={filterSelector}
        onChange={(event)=>setfilterSelector(event.target.value)}

    
        >
            <option disabled value=''>{defaultName}</option>
            {options.map((option)=>

<option key={option.value} value={option.value}>{option.name}</option> 
            )}
            
        </select>
    );
};

export default Select;