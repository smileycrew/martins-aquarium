import { getFish } from './database.js'

export const FishLocation = () => {
    const fishes = getFish()
    let htmlString = `<aside class="locations">`
    for (const fish of fishes) {
        htmlString += `<div class="fish_locations">
            ${fish.location}
            </div>`
    }
    htmlString += `</aside>`

    return htmlString
}