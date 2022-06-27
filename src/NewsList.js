import React from 'react';
import hackerNews from './hackerNews';

export default function NewsList(){
    //Fragen: Warum wird hier in der Konsole das Array zwei Mal angezeigt?
    //Wie debugge ich?
    //console.log(hackerNews.hits[0].title);
    //console.log(hackerNews.title);
    //const newsListLength = hackerNews.hits.length;
    //console.log(newsListLength);
    /* const listElement = () =>{
        let list = "";
        for(let i=0; i<newsListLength; i++){
            //console.log(hackerNews.hits[i].title);
            const title = hackerNews.hits[i].title;
            list += `<li>${title}</li>`;
        }
        return list;
    }; */
    const posts = hackerNews.hits
    //console.log(posts);

    const wrapPost = ({objectID, title}) => <p key={objectID}>{title}</p>

    return(
        <>
            <div className="Titles">
                {/* {posts.map((e) => <p key={e.objectID}>{e.title}</p>) */}
                {posts.map(wrapPost)}
            </div>
            
        </>

    );
}