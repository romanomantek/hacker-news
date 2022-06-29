import React, { useEffect, useState } from 'react';
import NewsList from './NewsList';

export default function Navbar(){
    const [news, setNews] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        fetch(`http://hn.algolia.com/api/v1/search?query=${input}`)
        .then((response) => response.json())
        .then((data) => setNews(data.hits))
        .catch((error) => console.log(`Oops, something went wrong. ${error}`));

    }, [input])
   
    const search = (event) =>{
        const input = event.target.value;
        setInput(input);
    };

    return(
        <>
            <header>
                <input type="text" onChange={search}></input>
                <button>Search</button>
            </header>
            <NewsList arrayOfNews={news} />
        </>
    );
}