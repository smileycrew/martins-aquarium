import { getFish } from './database.js'
import { FishList } from './fishlist.js'
import { TankCare } from './months.js'
import { FishLocation } from './locations.js'
import { mostHolyFish, soldierFish, unHolyFish } from './filtered.js'

const allFish = getFish()
const fishEl = document.querySelector(".fish_list")
const monthEl = document.querySelector(".month_list")
const locationEl = document.querySelector(".location_list")

parentHTMLElement.innerHTML = FishList()
tankHTMLElement.innerHTML = TankCare()
locationHTMLElement.innerHTML = FishLocation()

mostHolyFish()
soldierFish()
unHolyFish()