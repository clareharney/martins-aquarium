import { getQuotes } from './database.js'

export const QuotesList = () => {
    
    const quotes = getQuotes()
    
    let htmlString = '<article class="quoteList">'

    
    for (const quote of quotes) {

        htmlString += `<section class="fish-quotes">
            <div class="quote-tip">${quote.tip}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}