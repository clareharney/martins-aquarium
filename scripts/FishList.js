// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

export const mostHolyFish = () => {
    const fishes = getFish()
    // 3, 6, 9, 12, etc... fish
    
    let htmlString = '<article class="fishList">'

    for (const fish of fishes) {
        if (fish.size % 3 === 0)
        //holyFish.push(fish)
        htmlString += `<section class="fish-card">
        <div><img  class="fish-image" src="${fish.image}" /></div>
        <div class="fish-name">${fish.name}</div>
        <div class="fish-species">${fish.type}</div>
        <div class="fish-length">${fish.size} inches</div>
        <div class="fish-location">${fish.harvestPlace}</div>
        <div class="fish-diet">eats ${fish.food}</div>
    </section>`
    }

    htmlString += `</article>`
    return htmlString
}

export const soldierFish = () => {
    const soldierFishes = getFish()
    // 5, 10, 15, 20, 25, etc... fish
    
    let htmlString = '<article class="fishList">'

    for (const fish of soldierFishes) {
        if (fish.size % 5 === 0 )
        htmlString += `<section class="fish-card">
        <div><img  class="fish-image" src="${fish.image}" /></div>
        <div class="fish-name">${fish.name}</div>
        <div class="fish-species">${fish.type}</div>
        <div class="fish-length">${fish.size} inches</div>
        <div class="fish-location">${fish.harvestPlace}</div>
        <div class="fish-diet">eats ${fish.food}</div>
    </section>`
    }

    htmlString += `</article>`
    return htmlString
}

export const nonHolyFish = () => {
    const regularFishes = getFish()
    // Any fish not a multiple of 3 or 5
    let htmlString = '<article class="fishList">'

    for (const fish of regularFishes) {
        if (fish.size % 5 !== 0 && fish.size % 3 !== 0 )
        htmlString += `<section class="fish-card">
        <div><img  class="fish-image" src="${fish.image}" /></div>
        <div class="fish-name">${fish.name}</div>
        <div class="fish-species">${fish.type}</div>
        <div class="fish-length">${fish.size} inches</div>
        <div class="fish-location">${fish.harvestPlace}</div>
        <div class="fish-diet">eats ${fish.food}</div>
    </section>`
    }

    htmlString += `</article>`
    return htmlString
}

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()
    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish-card">
            <div><img  class="fish-image image--card" src="${fish.image}" /></div>
            <div class="fish-name">${fish.name}</div>
            <div class="fish-species">${fish.type}</div>
            <div class="fish-length">${fish.size} inches</div>
            <div class="fish-location">${fish.harvestPlace}</div>
            <div class="fish-diet">eats ${fish.food}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}