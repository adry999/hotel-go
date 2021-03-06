var mongoose      = require("mongoose"),
    Accommodation = require("./models/accommodation.js"),
    Booking       = require("./models/booking.js");

var accommodationData = [
    {
        name: "Dorsett City London",
        type: "Hotel",
        address: "9 Aldgate High Street, City of London, London, EC3N 1AH, United Kingdom",
        photos: [
            {src: "https://r-cf.bstatic.com/images/hotel/max1280x900/130/130867441.jpg"},
            {src: "https://r-cf.bstatic.com/images/hotel/max1280x900/245/245147790.jpg"}
        ],
        description: "Featuring a garden and views of city, Dorsett City London is a 4-star hotel set in London, an 8-minute walk from Sky Garden. Among the facilities at this property are a 24-hour front desk and a business centre, along with free Wi-Fi throughout the property. The on-site restaurant serves Chinese cuisine.",
        amenities: [
            "Wi-fi",
            "Hotel Bar",
            "Fitness Center",
            "Restaurant"
        ],
        rating: 8.8,
        roomTypes: [
            {
                name: "Superior Double Room",
                beds: "1 large double bed",
                peopleCount: 2,
                availableRooms: 7,
                facilities: [
                    "22 m^2",
                    "Air conditioning",
                    "Minibar",
                    "Soundproofing",
                    "Wi-Fi",
                    "Private bathroom"
                ],
                price: 139
            },
            {
                name: "Deluxe room",
                beds: "1 large double bed",
                peopleCount: 2,
                availableRooms: 5,
                facilities: [
                    "22 m^2",
                    "Landmark view",
                    "City view",
                    "Air conditioning",
                    "Minibar",
                    "Soundproofing",
                    "Wi-Fi",
                    "Private bathroom"
                ],
                price: 169
            }
        ]
    },
    {
        name: "Tower Bridge Rooms",
        type: "Guest House",
        address: "Tranton road, Southwark, London, SE16 4SE, United Kingdom",
        photos: [
            {src: "https://r-cf.bstatic.com/images/hotel/max1280x900/243/243393380.jpg"},
            {src: "https://r-cf.bstatic.com/images/hotel/max1280x900/248/248297029.jpg"},
            {src: "https://r-cf.bstatic.com/images/hotel/max1280x900/243/243394713.jpg"}
        ],
        description: "Ideally located in the Southwark district of London, Tower Bridge Rooms is set 1.5 km from Tower Bridge, 2.6 km from London Bridge and 2.6 km from Sky Garden. The property is around 2.7 km from Borough Market, 3.4 km from Tower of London and 3.9 km from St Paul's Cathedral. The accommodation offers a shared kitchen and free WiFi throughout the property.",
        amenities: [
            "Wi-fi",
            "Heating"
        ],
        rating: 8.1,
        roomTypes: [
            {
                name: "Double room",
                beds: "1 double bed",
                peopleCount: 2,
                availableRooms: 3,
                facilities: [
                    "15 m^2",
                    "Wi-Fi",
                ],
                price: 25
            }
        ]
    },
    {
        name: "Eden Plaza Kensington",
        type: "Hotel",
        address: "68-69 Queensgate, Kensington and Chelsea, London, SW7 5JT, United Kingdom",
        photos: [
            {src: "https://r-cf.bstatic.com/images/hotel/max1280x900/597/59761079.jpg"},
            {src: "https://r-cf.bstatic.com/images/hotel/max1280x900/463/46322272.jpg"},
            {src: "https://q-cf.bstatic.com/images/hotel/max1280x900/597/59763466.jpg"}
        ],
        description: "The Eden Plaza Kensington offers modern rooms, each featuring an LCD TV with cable channels, and tea and coffee-making facilities. The bathrooms all feature a power shower.",
        amenities: [
            "Wi-fi",
            "Hotel Bar",
            "Family Rooms"
        ],
        rating: 7.6,
        roomTypes: [
            {
                name: "Economy Single Room - No Window",
                beds: "1 single bed",
                peopleCount: 1,
                availableRooms: 3,
                facilities: [
                    "Air conditioning",
                    "Flat-screen TV",
                    "Wi-Fi",
                    "Ensuite bathroom"
                ],
                price: 30
            },
            {
                name: "Single Room",
                beds: "1 single bed",
                peopleCount: 1,
                availableRooms: 3,
                facilities: [
                    "Air conditioning",
                    "Flat-screen TV",
                    "Wi-Fi",
                    "Ensuite bathroom"
                ],
                price: 35
            },
            {
                name: "Small Double Room",
                beds: "1 single bed",
                peopleCount: 2,
                availableRooms: 2,
                facilities: [
                    "Air conditioning",
                    "Flat-screen TV",
                    "Wi-Fi",
                    "Ensuite bathroom"
                ],
                price: 40
            },
            {
                name: "City Twin Room",
                beds: "2 single beds",
                peopleCount: 2,
                availableRooms: 2,
                facilities: [
                    "Air conditioning",
                    "Flat-screen TV",
                    "Wi-Fi",
                    "Ensuite bathroom"
                ],
                price: 40
            },
            {
                name: "Quadruple Room",
                beds: "2 single beds and 1 double bed",
                peopleCount: 2,
                availableRooms: 2,
                facilities: [
                    "23 m^2",
                    "Air conditioning",
                    "Flat-screen TV",
                    "Wi-Fi",
                    "Ensuite bathroom"
                ],
                price: 75
            }
        ]
    }
];



module.exports = function seedDB() {
    Accommodation.deleteMany({}, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("--- Removed all accommodation from database.");
            accommodationData.forEach(function(accommodation){
                Accommodation.create(accommodation, function(err, accommodation){
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(`+ Added ${accommodation.name}`);
                    }
                });
            });
            Booking.deleteMany({}, function(err){
                if (err) {
                    console.log(err);
                } else {
                    console.log("--- Removed all bookings from database.");
                }
            });
        }
    });
}