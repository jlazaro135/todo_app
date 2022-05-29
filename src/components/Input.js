import React from 'react';

function Input({placeholder, text, value, onChange}){

    return (
        <input onChange={onChange} type={text} placeholder={placeholder} value={value}/>
    )
};

export default Input;