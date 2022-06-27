import hackernews from './hackernews';

export default function NewsList(){
    //Fragen: Warum wird hier in der Konsole das Array zwei Mal angezeigt?
    //Wie debugge ich?
    //console.log(hackernews.hits[0].title);
    //console.log(hackernews.title);
    const newsListLength = hackernews.hits.length;
    //console.log(newsListLength);
    const listElement = () =>{
        let list = "";
        for(let i=0; i<newsListLength; i++){
            //console.log(hackernews.hits[i].title);
            const title = hackernews.hits[i].title;
            list += `<li>${title}</li>`;
        }
        return list;
    };

    return(
        <>
            <div className="Title">
                <ul>{listElement()}
                </ul>
            </div>
            
        </>

    );
}