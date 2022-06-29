import React, { useState, useEffect } from 'react';
import hackerNews from './hackerNews';

export default function NewsList(){
     // useState for variable input of API
    
    const [posts, setPosts] = useState([hackerNews.hits]);
    
    //const posts = hackerNews.hits;
    const calcDays = (created_at) => {
        const created = new Date(created_at);
        const today = new Date();
        const oneDay = 1000 * 60 * 60 * 24;
        const diffInTime = today.getTime() - created.getTime();
        return  Math.round(diffInTime / oneDay);
    }
    // wrap information of an object in p-tag
    const wrapPost = (e) => <p key={e.objectID}>{e.title}</p>
    
    return(
            <div className="titles">
                {/* {posts.map((e) => <p key={e.objectID}>{e.title}</p>)} */}
                {posts.map(wrapPost)}
            </div>
    );
}