function hndlr(res) {
    try {
        document.getElementById('content').innerHTML += '<div style="color:#ffa400;">About ${res.searchInformation.formattedTotalResults} results (${res.searchInformation.formattedSearchTime}  seconds)';
        for(var i = 0; i< res.items.length; i++)
        {
            document.getElementById('content').innerHTML += '<br><a style="color:#ffa400; font-size: 12px; text-decoration: none;" href= ${res.items[i].link} target="_blank">${res.items[i].link}</a><a target="_blank" href=${res.items[i].link} style="text-decoration : none;"><h2 style="color:#ffa400; margin-top: 2px;">${res.items[i].title}</h2></a><div style="color:#ffa400; margin-top: -8px;">${res.items[i].htmlSnippet}</div>';
        }
    } catch (error) {
        document.getElementById('content').innerHTML = '';
    }
}