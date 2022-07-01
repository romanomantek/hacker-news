const properties = {
    apiInitUrl : "http://hn.algolia.com/api/v1/search_by_date?tags=story",
    apiSearchUrl : "http://hn.algolia.com/api/v1/search?query=",
    apiUserUrl : "http://hn.algolia.com/api/v1/users/",
    apiSearchByAuthorUrl : "http://hn.algolia.com/api/v1/search_by_date?tags=author_",
}

export async function getNews(url=properties.apiInitUrl) {
    try {
        const response = await fetch(url);
        const resJson = await response.json();
        return resJson.hits;
    } catch (err) {
        return `API getNews() load failed (${err})`;
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

export async function getNewsByText(text) {
    try {
        const response = await fetch(properties.apiSearchUrl+text);
        const resJson = await response.json();
        return resJson.hits;
    } catch (err) {
        return `API getNewsByText() load failed (${err})`;
    }
}