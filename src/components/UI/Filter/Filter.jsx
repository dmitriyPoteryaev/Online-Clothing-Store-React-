import React from 'react';
import classes from './Filter.module.css';
const Select = ({defaultName,options,value,functionChangeOfValue}) => {
    return (
        <select 
        className={classes.select}
        value={value}
        onChange={(event)=>functionChangeOfValue(event.target.value)}

    
        >
            <option disabled value=''>{defaultName}</option>
            {options.map((option)=>

<option key={option.value} value={option.value}>{option.name}</option> 
            )}
            
        </select>
    );
};

export default Select;