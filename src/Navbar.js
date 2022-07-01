import React, { useEffect, useState } from 'react';
import NewsList from './NewsList';
import { getNewsByAuthor, getNews } from "./apiFetcher.js"

export default function Navbar(){
    const [news, setNews] = useState([]);
    const [input, setInput] = useState('');
    const [radio, setRadio] = useState('fullText');

    useEffect(() => {
/*      fetch(`http://hn.algolia.com/api/v1/search?query=${input}`)
            .then((response) => response.json())
            .then((data) => setNews(data.hits))
            .catch((error) => console.log(`Oops, something went wrong. ${error}`)); */
        getNews().then((e) => setNews(e));
        getNewsByAuthor(input).then((e) => setNews(e));
    
    }, [input])
   
    const search = (event) =>{
        const input = event.target.value;
        setInput(input);
    };

    const radioButtonClick = (event) =>{
        const radioValue = event.target.value
        setRadio(radioValue);
    }

    return(
        <>
            <header>
                <input type="text" onChange={search}></input>
                <button>Search</button>
            </header>
            <div onChange={radioButtonClick}>
                <input type="radio" name="radio" value="fullText" /> full Text
                <input type="radio" name="radio" value="author" /> Author
                <input type="radio" name="radio" value="url" /> URL
            </div>
            <NewsList arrayOfNews={news} />
        </>
    );
}