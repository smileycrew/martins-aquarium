import { getFish } from './database.js'

export const FishList = () => {
    const fishes = getFish()
    let htmlString = '<section class="fish_card">'

    for (const fish of fishes) {
        htmlString += `
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">Name: ${fish.name}</div>
            <div class="fish__species">Habitat: ${fish.species}</div>
            <div class="fish__length">Size: ${fish.size}</div>
            <div class="fish__diet">Price: ${fish.cost}</div>`
        //  <div class="fish__location">${fish.location}</div>
    }
    htmlString += `</section>`

    return htmlString
}