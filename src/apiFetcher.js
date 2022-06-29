const properties = {
    apiInitUrl : "http://hn.algolia.com/api/v1/search_by_date?tags=story",
    apiSearchUrl : "http://hn.algolia.com/api/v1/search",
    apiUserUrl : "http://hn.algolia.com/api/v1/users/",
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