import React, { useState } from 'react';
import hackerNews from './hackerNews';

export default function NewsList(){
     // useState for variable input of API
    const [posts, setPosts] = useState(hackerNews.hits);
    //const posts = hackerNews.hits;
    const calcDays = (created_at) => {
        const created = new Date(created_at);
        const today = new Date();
        const oneDay = 1000 * 60 * 60 * 24;
        const diffInTime = today.getTime() - created.getTime();
        return  Math.round(diffInTime / oneDay);
    }
    // wrap information of an object in p-tag
    const wrapPost = (e) => {
        let hostname;
        // check if properties not empty
        try {
            hostname = new URL(e.url).hostname 
        } catch {
            hostname = "?";
        }
        // return wrapped information in a div
        return (
            <div className="newsRow" key={e.objectID}>
                <p className="news">
                    <strong className="newsTitle"> {e.title} - </strong>
                    <a className="newsUrl" href={e.url}> {hostname} </a>
                    <br />
                    <small className="newsAuthor"> Author: {e.author} </small>
                    <small className="newsOld"> Exists: {calcDays(e.created_at)} days</small>
                </p>
            </div>
        )
    }

    return(
        <>
            <div className="titles">
                {/* {posts.map((e) => <p key={e.objectID}>{e.title}</p>)} */}
                {posts.map(wrapPost)}
            </div>
            
        </>

    );
}