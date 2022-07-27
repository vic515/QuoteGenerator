
const author = document.querySelector('#author');
const quote = document.querySelector('#quote')


// Get Quotes from API 
let apiQuotes = [];

// Show New quotes

function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    document.querySelector('#quote').innerHTML = quote.text
    if (quote.author === null) {
        quote.author = 'Unknown'
    }
    document.querySelector('#author').innerHTML = quote.author
    
    console.log(quote)
}

async function getQuotes()  {
    const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json()
        newQuote()
    } catch (error) {
        //Catch error
    }
}

// Tweeting the quote 

function tweetQuote() {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`
    window.open(tweetUrl, '_blank');
}

getQuotes();