import { getFish } from './database.js'

export const TankCare = () => {
    const fishes = getFish()
    let htmlString = `<aside class="tank_care">`
    for (const fish of fishes) {
        htmlString += `<div class="month">
            ${fish.care}
            </div>`
    }
    htmlString += `</aside>`

    return htmlString
}