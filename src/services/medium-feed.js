async function fetchMediumFeed(username) {
    const mediumUrl = `https://medium.com/feed/@${username}`;
    return (
        await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${mediumUrl}`)
    ).json();
}

export async function getRssFeed(username, maxArticles) {
    const { feed, items, status } = await fetchMediumFeed(username);

    if (!feed || status !== "ok") {
        alert("Pass a valid medium username.");
        return null;
    }
    const articles = items
        ?.filter((item) => item.guid)
        .slice(0, maxArticles)
        .map((item) => {
            return {
                ...item,
                userLink: feed.link,
            };
        });

    return { feed, articles };
}
