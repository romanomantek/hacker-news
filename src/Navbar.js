import React, { useEffect, useState } from 'react';
import NewsList from './NewsList';
import { getNewsByAuthor, getNews } from "./apiFetcher.js"

export default function Navbar(){
    const [news, setNews] = useState([]);
    const [input, setInput] = useState('');
    const [radio, setRadio] = useState('');

    //getNews().then((e) => setNews(e));

    useEffect(() => {
/*         fetch(`http://hn.algolia.com/api/v1/search?query=${input}`)
        .then((response) => response.json())
        .then((data) => setNews(data.hits))
        .catch((error) => console.log(`Oops, something went wrong. ${error}`)); */

        getNewsByAuthor(input).then((e) => setNews(e));
    
    }, [input])
   
    const search = (event) =>{
        const input = event.target.value;
        setInput(input);
    };

    const radioButtonClick = (e) =>{
        //console.log(e.target.value);
        setRadio(e.target.value);
    }

    return(
        <>
            <header>
                <input type="text" onChange={search}></input>
                <button>Search</button>
            </header>
            <div onChange={radioButtonClick}>
                <input type="radio" value="author" name="radio"/> Author
                <input type="radio" value="url" name="radio"/> URL
            </div>
            <NewsList arrayOfNews={news} />
        </>
    );
}