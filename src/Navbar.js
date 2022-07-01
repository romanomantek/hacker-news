import React, { useEffect, useState } from 'react';
import NewsList from './NewsList';
import { getNews, getNewsByAuthor, getNewsByText } from "./apiFetcher.js"

export default function Navbar(){
    const [news, setNews] = useState();
    const [input, setInput] = useState("");
    const [radio, setRadio] = useState("currentNews");

    useEffect(() => {
        
        if (radio==="currentNews" || (radio!=="currentNews" && input==="")){
            console.log("a")
            getNews().then( (arrayOfNews) => setNews(arrayOfNews));
        } else if (radio==="fullText"){
            console.log("b")
            getNewsByText(input).then( (arrayOfNews) => setNews(arrayOfNews));
        } else if (radio==="author"){
            console.log("c")
            getNewsByAuthor(input).then( (arrayOfNews) => setNews(arrayOfNews));
        } else {
            console.log(`useEffect Bug: Input = ${input} / Radio = ${radio})`)
            setNews("Da ist wohl was Schief gelaufen");
        }
        
    
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
            </div>
            <NewsList arrayOfNews={news} />
        </>
    );
}