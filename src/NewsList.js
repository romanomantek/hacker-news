import React from 'react';

export default function NewsList({arrayOfNews=[]}){
    // console.log(arrayOfNews)
    // spezial calculator
    const spCalc = (max,divider) => [Math.floor(max/divider),((max/divider)-Math.floor(max/divider))]

    //const posts = hackerNews.hits;
    const getExist = (created_at) => {
        const created = new Date(created_at);
        const today = new Date();
        const oneSec = 1000;
        const oneMin = oneSec * 60;
        const oneHour = oneMin * 60;
        const oneDay = oneHour * 24;
        const oneWeek = oneDay *7;
        const oneMonth = oneDay * 30.5;
        const oneYear = oneWeek * 52;
        
        const diffInTime = today.getTime() - created.getTime();

        const resYe = diffInTime>oneYear ? spCalc(diffInTime,oneYear) : 0;
        const resMo = resYe === 0 ? diffInTime>oneMonth ? spCalc(diffInTime,oneMonth) : 0 : resYe

        return  Math.round(diffInTime / oneDay);
    }
    // wrap information of an object in p-tag
    const wrapPost = (e) => {
        const hostname = e.url ? new URL(e.url).hostname : "";
        // return wrapped information in a div
        return (
            <div className="newsRow" key={e.objectID}>
                <p className="news">
                    <strong className="newsTitle"> {e.title}</strong>
                    <br />
                    <small className="newsAuthor"> Author: {e.author} - Exists: {getExist(e.created_at)} <a className="newsUrl" href={e.url}> {hostname} </a></small>
                </p>
            </div>
        )
    }

    const nothingFound = () => <h1>Deine Suche hat nichts ergeben!</h1>

    

    return(
            <div className="newsList">
                {arrayOfNews.length === 0 ? nothingFound() : arrayOfNews[0] == {} ? wrapPost(arrayOfNews) : arrayOfNews}
            </div>
    );
}