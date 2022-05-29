import React, {useState} from 'react';

function Button({type, text, className, count, setCount, handleClick}){
    [count, setCount] = useState(0);

    return(
        <button type={type} onClick={handleClick} className={className}>{text}</button>
    )
}

export default Button;