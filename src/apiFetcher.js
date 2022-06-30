const properties = {
    apiInitUrl : "http://hn.algolia.com/api/v1/search_by_date?tags=story",
    apiSearchUrl : "http://hn.algolia.com/api/v1/search",
    apiUserUrl : "http://hn.algolia.com/api/v1/users/",
    apiSearchByAuthorUrl : "http://hn.algolia.com/api/v1/search_by_date?tags=author_",
}

export async function getNews(url=properties.apiInitUrl) {
    try {
        const response = await fetch(url);
        const resJson = await response.json();
        return resJson.hits;
    } catch (err) {
        return `API load failed (${err})`;
    }
}

export async function getNewsByAuthor(author) {
    try {
        const response = await fetch(properties.apiSearchByAuthorUrl+author);
        const resJson = await response.json();
        return resJson.hits;
    } catch (error) {
        return `Author biibbbiiibibi melis was here(${error})`;
    }
}