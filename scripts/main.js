import { getFish } from './database.js'
import { mostHolyFish, soldierFish, nonHolyFish } from './FishList.js'
import { TipList } from './TipList.js'
import { LocationsList } from './locations.js'
import { QuotesList } from './quotes.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

const allTips = TipList()

for (const tip of allTips){
    console.log(tip)
}

const allLocations = LocationsList()

for (const location of allLocations){
    console.log(location)
}
// Import the FishList function from the correct module


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const holyHTMLElement = document.querySelector(".fishy")

holyHTMLElement.innerHTML += mostHolyFish()

const soldierHTMLElement = document.querySelector(".fishy")

soldierHTMLElement.innerHTML += soldierFish()

const normalHTMLElement = document.querySelector(".fishy")

normalHTMLElement.innerHTML += nonHolyFish()

const tipsHTMLElement = document.querySelector(".tips-and-tricks")

tipsHTMLElement.innerHTML = TipList()

const quotesHTMLElement = document.querySelector(".fishy-quotes")

quotesHTMLElement.innerHTML = QuotesList()

const locationHTMLElement = document.querySelector(".martins-locations")

locationHTMLElement.innerHTML = LocationsList()