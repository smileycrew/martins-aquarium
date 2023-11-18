const database = {
    fish: [
        {
            image: `images/bitterling.png`,
            name: "Bitterling",
            species: "River",
            size: 1,
            location: "North",
            cost: "900",
            care: "January"
        },
        {
            image: `images/pale_chub.png`,
            name: "Pale Chub",
            species: "River",
            size: 1,
            location: "North",
            cost: "200",
            care: "February"
        },
        {
            image: `images/crucian_carp.png`,
            name: "Crucian Carp",
            species: "River",
            size: 2,
            location: "South",
            cost: "160",
            care: "March"
        },
        {
            image: `images/dace.png`,
            name: "Dace",
            species: "River",
            size: 3,
            location: "North",
            cost: "240",
            care: "April"
        },
        {
            image: `images/carp.png`,
            name: "Carp",
            species: "Pond",
            size: 4,
            location: "South",
            cost: "300",
            care: "May"
        },
        {
            image: `images/koi.png`,
            name: "Koi",
            species: "Pond",
            size: 4,
            location: "South",
            cost: "4000",
            care: "June"
        },
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}