const database = {
    fish: [
        {
            name: "Hello",
            species: "Male",
            size: "180",
            location: "TN",
            food: "Pizza"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}