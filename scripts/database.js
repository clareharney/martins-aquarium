
const database = {
    fish: [
        {
            id: 1,
            image: "https://bransonswildworld.com/wp-content/uploads/2014/06/powder-blue.jpg",
            name: "Blaze",
            type: "Powder Blue Tang",
            size: 12,
            harvestPlace: "Indo-Pacific",
            food: "algae",
        },
        {
            id: 2,
            image: "https://www.liveaquaria.com/images/categories/large/lg_37567_Mombasa_Lionfish_B.jpg",
            name: "Aurora",
            type: "Lionfish",
            size: 10,
            harvestPlace: "Indian and Pacific Oceans",
            food: "small fish and crustaceans",
        },
        {
            id: 3,
            image: "https://www.liveaquaria.com/images/categories/large/lg89265FirefishPurple.jpg",
            name: "Ignis",
            type: "Fire Goby",
            size: 2,
            harvestPlace: "Indo-Pacific",
            food: "small invertebrates",
        },
        {
            id: 4,
            image: "https://scuba.spanglers.com/im/m/2017/06/2017-06-03b-39588.jpg",
            name: "Bandit",
            type: "Raccoon Butterflyfish",
            size: 4,
            harvestPlace: "Coral Reef",
            food: "algae and small invertebrates",
        },
        {
            id: 5,
            image: "https://idontseatheporpoiseinthis.weebly.com/uploads/2/6/0/1/26012442/9094541.jpg?390",
            name: "Curly",
            type: "Potbelly Seahorse",
            size: 6,
            harvestPlace: "Indian Ocean",
            food: "small crustaceans",
        },
        {
            id: 6,
            image: "https://live.staticflickr.com/2363/2184027421_0266fb6d27_b.jpg",
            name: "Frost",
            type: "Snowflake Moray Eel",
            size: 20,
            harvestPlace: "Tropical Coral Reef",
            food: "fish and cephalopods",
        },
        {
            id: 7,
            image: "https://reefchasers.com/cdn/shop/articles/blue-throat-triggerfish-635879.jpg?v=1682979821",
            name: "Sapphire",
            type: "Blue Throat Triggerfish",
            size: 8,
            harvestPlace: "Pacific Ocean",
            food: "small fish and invertebrates",
        },
        {
            id: 8,
            image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Zebrasoma_veliferum.JPG",
            name: "Aqua",
            type: "Sailfin Tang",
            size: 8,
            harvestPlace: "Indo-Pacific",
            food: "algae and small invertebrates",
        },
        {
            id: 9,
            image: "https://live.staticflickr.com/2621/3703736194_67a486b7fa_b.jpg",
            name: "Jester",
            type: "Harlequin Filefish",
            size: 7,
            harvestPlace: "Indo-Pacific",
            food: "small invertebrates",
        },
        {
            id: 10,
            image: "https://www.anemoon.org/Portals/0/Soorten/Sharknose%20goby%20(Orbicella%20faveolata)/grondel,%20Cleaning%20goby,(Gobiosoma%20genie)1660.jpg",
            name: "Zephyr",
            type: "Sharknose Goby",
            size: 2,
            harvestPlace: "Indo-Pacific",
            food: "small invertebrates",
        },
        {
            id: 11,
            image: "https://www.tfhmagazine.com/-/media/Project/OneWeb/TFH/US/articles/604_raising_sergeant_majors.jpg",
            name: "Commander",
            type: "Sergeant Major Damselfish",
            size: 4,
            harvestPlace: "Indo-Pacific",
            food: "algae and small invertebrates",
        },
        {
            id: 12,
            image: "https://www.aquariadise.com/wp-content/uploads/2020/04/flame.webp",
            name: "Ember",
            type: "Flame Angelfish",
            size: 4,
            harvestPlace: "Indo-Pacific",
            food: "algae and small invertebrates",
        },
        {
            id: 13,
            image: "https://manhattanaquariums.com/cdn/shop/products/IMG_9011.jpg?v=1603401118",
            name: "Sunny",
            type: "Yellow Watchman Goby",
            size: 3,
            harvestPlace: "Indo-Pacific",
            food: "small invertebrates",
        },
        {
            id: 14,
            image:"https://forthefishes.org/wp-content/uploads/2022/02/Yellow-Eye-Kole-Tang-1.jpg",
            name: "Verdant",
            type: "Kole Tang",
            size: 6,
            harvestPlace: "Indo-Pacific",
            food: "algae",
        },
    ],
    tips: [
        {
            label: "Tank Size",
            content: "Choose an appropriate tank size based on the type and number of fish you plan to keep. Different species have different space requirements",
        },
        {
            label: "Filtration",
            content: "Use a high-quality filtration system to maintain water quality. Filters help remove waste and provide a healthy environment for your fish",
        },
        {
            label: "Heating",
            content: "Maintain a stable water temperature within the recommended range for your fish species. Use a reliable aquarium heater to achieve and maintain the desired temperature",
        },
        {
            label: "Lighting",
            content: "Provide appropriate lighting for your aquarium. Some fish require specific light conditions, and live plants may need a certain amount of light for photosynthesis",
        },
        {
            label: "Substrate",
            content: "Choose a substrate that suits the needs of your fish. Some prefer sandy bottoms, while others do well with gravel. Ensure the substrate is properly cleaned before adding it to the tank",
        },
        {
            label: "Decorations",
            content: "Add decorations like rocks, driftwood, or artificial plants to create hiding spots and territories for your fish. Ensure these decorations are safe for your specific fish species",
        },
        {
            label: "Water Parameters",
            content: "Regularly test and monitor water parameters such as pH, ammonia, nitrite, and nitrate. Keep them within the recommended ranges for your fish",
        },
        {
            label: "Water Changes",
            content: "Perform regular water changes to remove accumulated toxins and maintain water quality. The frequency and volume of water changes depend on the size of your tank and the needs of your fish",
        },
        {
            label: "Aquascaping",
            content: "Consider the aesthetic appeal of your aquarium. Arrange decorations and plants in a way that creates a visually pleasing and natural-looking environment",
        },
        {
            label: "Compatibilty",
            content: "Research the compatibility of fish species before adding them to your tank. Some fish may not get along, while others have specific requirements for tank mates",
        },
        {
            label: "Feeding",
            content: "Provide a balanced and varied diet suitable for your fish species. Feed them an amount they can consume within a few minutes to avoid overfeeding and water quality issues",
        },
        {
            label: "Quarantine Tank",
            content: "Consider having a quarantine tank for new fish. This helps prevent the introduction of diseases to your main tank",
        },
        {
            label: "Monitoring Behavior",
            content: "Pay attention to your fish's behavior. Unusual behavior, changes in appetite, or signs of illness should be addressed promptly",
        },
        {
            label: "Water Flow",
            content: "Ensure adequate water circulation to prevent stagnant areas in the tank. Some fish prefer gentle currents, while others thrive in stronger flows",
        },
        {
            label: "Research",
            content: "Continuously educate yourself about the specific needs of the fish you're keeping. Different species may have unique requirements, and staying informed will help you provide the best care",
        }
    ],
    locations: [
        {
            id: 1,
            place: "South China Sea",
            image: "https://i.guim.co.uk/img/media/97fb60e03491c3f694c44d87c3333974c00539b9/0_0_5089_3055/master/5089.jpg?width=465&dpr=1&s=none"
        },
        {
            id: 2,
            place: "New Guinea",
            image: "https://files.adventure-life.com/90/75/2/ThinkstockPhotos-464496946/fullsize.jpg"
        },
        {
            id: 3,
            place: "Maldives",
            image: "https://www.fodors.com/wp-content/uploads/2023/10/0-HEROistockphoto-1490053132.jpg"
        },
        {
            id: 4,
            place: "Easter Islands",
            image: "https://www.andbeyond.com/wp-content/uploads/sites/5/Ahu-Tongariki-Easter-Island-Chile.jpg"
        },
        {
            id: 5,
            place: "Red Sea Coral Reef",
            image: "https://www.leisurepro.com/blog/wp-content/uploads/2020/04/shutterstock_1575558334.png"
        },
        {
            id: 6,
            place: "The Belize Barrier Reef",
            image: "https://media.audleytravel.com/-/media/images/home/blog/2017/december/coral-reefs-of-the-world/istock681849872bluehole7x5.webp?q=79&w=800&h=571"
        },
        {
            id: 7,
            place: "Seychelles",
            image: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Africa/Seychelles/AP78907278_Seychelles_Trave.jpg?imwidth=680"
        },
        {
            id: 8,
            place: "Aitutaki",
            image: "https://www.telegraph.co.uk/content/dam/travel/2022/09/27/TELEMMGLPICT000310763336_trans_NvBQzQNjv4BqC9PogZUtSpqAqO-tnweStYO2VWxuYg_aguPtQ9FwIv8.jpeg?imwidth=480"
        },
        {
            id: 9,
            place: "The Arabian Sea",
            image: "https://www.bluebird-electric.net/oceanography/ocean_pictures/Arabian_Sea_Astola_Island.jpg"
        }
    ],
    quotes: [
        {
            id: 1,
            tip: "A bad day of fishing is better than a good day at work."
        },
        {
            id: 2,
            tip: "A shallow river with fish is worth more than a deep sea without any."
        },
        {
            id: 3,
            tip: "If you feel like a fish out of water just go back in the water"
        }
    ]
}


export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}
export const getLocations = () => {
    return database.locations.map(locations => ({...locations}))
}
export const getQuotes = () => {
    return database.quotes.map(quotes => ({...quotes}))
}