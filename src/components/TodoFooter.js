import React from 'react';
import logo from '../logo.svg';

function TodoFooter(){
    return(
        <footer className='container text-center'>
            <figure>
                <img src={logo} className="App-logo" alt="logo" />
                <figcaption>React APP made by Jesús Lázaro</figcaption>
            </figure>
        </footer>
    )
}

export default TodoFooter;