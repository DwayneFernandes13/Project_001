console.log('Testing site');
let apiQuotes = []; //global declaration for global use

// Global Declaration of IDs in index.html
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const quoteButton = document.getElementById('new-quote');
// const for loader
const loader = document.getElementById('loader');

// Loading function
 function loading()
{
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Complete loading function
function complete()
{
    loader.hidden = true;
    quoteContainer.hidden = false;
}


//global declaration of newQuote() - Math.random()
function newQuote()
    {
        // this is added as in getQuote(), loading() goes into newQuote();
        loading();

    // Random quote from API Array
     const quote = apiQuotes[Math.floor(Math.random(0) * apiQuotes.length)];
    //  console.log(quote);
    // Line to check if the quote is authorless or not
    if(!quote.author)//if author doesn't exist
    {
        authorText.textContent="Unknown";
    }
    else
    {
    authorText.textContent = quote.author;
    }
    // line for long quote text size
    if(quote.text.length > 50)
    {
        quoteText.classList.add('long-quote');    
    }
    else
    {
        quoteText.classList.remove('long-quote');
    }
    //set quote, hide loader
    quoteText.textContent = quote.text;       
    complete();
    }

// Title: We're gonna get quotes from API using Asynchronous Fetch Request within a Try-catch statement

async function getQuotes()
    {
        // Calling the loading() here
        loading();

        const apiURL = 'https://type.fit/api/quotes';
        // Handle the try and catch errors
        try {
            const response = await fetch(apiURL);
            apiQuotes = await response.json(); // Getting the JSON from the API as a response and turning the response into a JSON object
            //console.log(apiQuotes[12]);
            newQuote();
        } catch (error) {
            //   alert(error);
        }
    }

    // Tweet the quote

function tweetQuote()
{
    
    // Back ticks (under ESC key)
const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
// Allows the window to open in a new tab - open window in a new tab
window.open(twitterUrl, '_blank');

}   

// Adding Event listeners (adding at the bottom as we declare the function before we call it )
// newQuote and tweetQuote are functions

quoteButton.addEventListener('click', newQuote);
twitterButton.addEventListener('click', tweetQuote);

//On Load

getQuotes();

//calling loading function;