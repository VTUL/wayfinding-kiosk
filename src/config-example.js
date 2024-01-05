import logo from "./assets/logo.svg?raw"
import takePhoto from "./assets/take-photo.svg?raw"
import tapScreen from "./assets/tap-screen.svg?raw"
import floor1 from "./assets/1stFloor.svg?raw"
import floor2 from "./assets/2ndFloor.svg?raw"

export default {
    appearance: {
        textColor: "rgba(255, 255, 255, 0.87)",
        backgroundColor: "#2c2d2d",
        takePhoto: takePhoto,
        tapScreen: tapScreen,
        logo: logo,
        headerText: "Tap your library destination to get interactive directions",
        subHeaderText: false,
        nearestText: "or find the nearest...",
        specialEventText: "Special Events",
        sortText: "Sort ",
        byAlphaText: "A - Z",
        byFloorText: "by Floor",
        navigatingText: "Navigating from ",
    },
    behavior: {
        routeDrawDuration: 8, // a factor based on how long the path is. Higher means it will take longer to draw.
        routeDrawDelay: 1000, // in milliseconds, the time between when one route animation ends and the next begins
        resetTime: 60000, // in milliseconds, the amount of time after the route animation finished before the kiosk resets to the default screen
        routeClass: "route", // the class of the draw routes for each location in your svg file
        markerDistance: "-35px", // the height the kiosk marker starts at during its animation. This number will depend on the scale of your maps
        alphaCount: 32, // Number of rows in the alphabetical display before it cuts over to a new column. Might change based on screen resolution
        globalTimeout: 1800000, // The amount of time that should pass before the kiosk resets, in milliseconds. Good for making sure the system picks up changes in code
        tapDelay: 15000, // The amount of time before the tap icon appears on screen to indicate the kiosk is able to be interacted with, in milliseconds
        tapFadeOut: 1000, // The amount of time it takes the tap icon to fade away at the end of its animation, in milliseconds
        mapFadeIn: 500, // The amount of time for the second map to fade in on multistory directions, in milliseconds
        markerDropDuration: 2500, // The amount of time it takes the kiosk marker to drop into place, in milliseconds
    },
    metadata: {
        maps: [
            {
                floor: 1,
                file: floor1,
                name: "1st Floor",
            },
            {
                floor: 2,
                file: floor2,
                name: "2nd Floor",
            },
        ],
        kiosk: import.meta.env.VITE_KIOSK || "location-name",
        kioskId: import.meta.env.VITE_KIOSK_ID || "kiosk1",
        kioskFloor: parseInt(import.meta.env.VITE_KIOSK_FLOOR) || 1,
        buildingName: "John Doe Library",
    },
    locations: [
        {
            name: "Computer Lab",
            roomNumber: "124",
            floor: 1,
            id: "computers",
        },
        {
            name: "Makerspace",
            roomNumber: "1040",
            floor: 1,
            id: "makerspace",
        },
        {
            name: "User Services",
            roomNumber: "2010",
            floor: 2,
            id: "userservices",
        },
        {
            name: "Writing Center",
            roomNumber: "2034",
            floor: 2,
            id: "writingcenter",
        },               
    ],
    nearest: [
        {
            name: "Restroom",
            id: "nrestroom",
        },
        {
            name: "Accessible Restroom",
            id: "narestroom",
        },
        {
            name: "Elevator",
            id: "nelevator",
        },
        {
            name: "Stairs",
            id: "nstairs",
        },
        {
            name: "Exit",
            id: "nexit",
        },
    ],
    specialEvents: [
        {
            name: "Holiday Party",
            roomNumber: "227",
            floor: 2,
            id: "party",
        },
    ]
};