let metroAreaCenterCoordinates = [44.96, -93.2]  // Array of latitude and longitude 
let zoomLevel = 1  // 1 = whole world, 10 = large city, 20 = city blocks

// Create the map 
let map = L.map('bridge-map').setView(metroAreaCenterCoordinates, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)



bridgeData = [
    {
        "name": "Verrazano-Narrows Bridge",
        "span": 1298.4,
        "span_text": "1298.4",
        "city": "New York, NY",
        "location": [
            40.6066,
            -74.0447
        ]
    },
    {
        "name": "Golden Gate Bridge",
        "span": 1280.2,
        "span_text": "1280.2",
        "city": "San Francisco and Marin, CA",
        "location": [
            37.8199,
            -122.4783
        ]
    },
    {
        "name": "Mackinac Bridge",
        "span": 1158.0,
        "span_text": "1,688m",
        "city": "Mackinaw and St Ignace, MI",
        "location": [
            45.8174,
            -84.7278
        ]
    },
    {
        "name": "George Washington Bridge",
        "span": 1067.0,
        "span_text": "1067.0",
        "city": "New York, NY and New Jersey, NJ",
        "location": [
            40.8517,
            -73.9527
        ]
    },
    {
        "name": "Tacoma Narrows Bridge",
        "span": 853.44,
        "span_text": "853.44",
        "city": "Tacoma and Kitsap, WA",
        "location": [
            47.2690,
            -122.5517
        ]
    }
]    

bridgeData.forEach(element => {
    let coordinates = element.location
    let ciity = element.city
    let spaan = element.span
    maarker = L.marker(coordinates)
    .bindPopup(ciity + '<br> Span Of ' + spaan)
    .addTo(map)
    
});



    

