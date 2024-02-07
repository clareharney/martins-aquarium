import { getTips } from './database.js'

export const TipList = () => {
    
    const tips = getTips()
    
    let htmlString = '<article class="tipList">'

    
    for (const tip of tips) {

        htmlString += `<section class="tips-for-fish">
            <div class="tip-label">${tip.label}</div>
            <div class="tip-content">${tip.content}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}