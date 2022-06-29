import React, { useState } from 'react';
import hackerNews from './hackerNews';

export default function NewsList(){
     // useState for variable input of API
    const [posts, setPosts] = useState(hackerNews.hits);
    
    // wrap information of an object in p-tag
    const wrapPost = ({objectID, title}) => <p key={objectID}>{title}</p>
    
    return(
            <div className="titles">
                {/* {posts.map((e) => <p key={e.objectID}>{e.title}</p>)} */}
                {posts.map(wrapPost)}
            </div>
    );
}