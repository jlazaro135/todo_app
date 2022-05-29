import React from 'react';

function TodoMain({children}){
    return(
        <main className='container text-center'>
            {children}
        </main>
    )
}

export default TodoMain;