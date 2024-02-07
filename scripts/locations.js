// Import the function that returns a copy of the fish array
import { getLocations } from './database.js'



export const LocationsList = () => {
    // Invoke the function that you imported from the database module
    const locations = getLocations()
    // Start building a string filled with HTML syntax
    let htmlString = '<article class="locationList">'

    // Create HTML representations of each fish here
    for (const location of locations) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="location-card">
            <div class="location-name">${location.place}</div>
            <div><img  class="location-image image--card" src="${location.image}" /></div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}
