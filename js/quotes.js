async function getQuotes() {
    const quotes = 'quotes.json';
    const res = await fetch(quotes);
    const data = await res.json();
    const quote1 = document.querySelector('.quote');
    const author1 = document.querySelector('.author');
    let quote;
    let author;
    for (let i = 0; i < data.quotes.length; i++) {
        let randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
        quote = randomQuote.quote;
        author = randomQuote.author;
    }
    quote1.textContent = `"${quote}"`;
    author1.textContent = author;
}
void getQuotes();
document.querySelector('.change-quote').addEventListener('click', getQuotes);
