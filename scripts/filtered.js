import { getFish } from './database.js'

export const mostHolyFish = () => {
    const holyFish = []
    const fishes = getFish()
    for (const fish of fishes) {
        if (fish.size % 2 === 0)
            holyFish.push(fish.name)
    }
}

export const soldierFish = () => {
    const soldierFish = []
    const fishes = getFish()
    for (const fish of fishes) {
        if (fish.size % 3 === 0)
            soldierFish.push(fish.name)
    }
}

export const unHolyFish = () => {
    const regularFish = []
    const fishes = getFish()
    for (const fish of fishes) {
        if (fish.size % 2 != 0 && fish.size % 3 != 0) {
            console.log(fish.name)
        }
    }
}