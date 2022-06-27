import React from 'react';

export default function Navbar(){
    const search = () =>{

    };

    return(
        <header>
            <input type="text" onChange={search}></input>
            <button>Search</button>
        </header>
    );
}