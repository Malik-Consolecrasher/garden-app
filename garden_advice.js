
let season = (prompt("What season would you like advice on?").toLowerCase()); 
let plantType = (prompt("What plant would you like advice on?").toLowerCase());

// Variable to hold gardening advice
let advice = "";

// Determine advice based on the season
if (season === "summer") {
    advice += "Water your plants regularly and provide some shade.\n";
} else if (season === "winter") {
    advice += "Protect your plants from frost with covers.\n";
} else if (season === "spring") {
    advice += "Keep a look out for flowers, and not to overwater your plants.\n";
} else if (season === "autumn") {
    advice += "Tend to plants carefully as they start to lose leaves, as well as clean them regularly.\n";
} else {
    advice += "No advice for this season.\n";
}

// Determine advice based on the plant type
if (plantType === "flower") {
    advice += "Use fertiliser to encourage blooms.";
} else if (plantType === "vegetable") {
    advice += "Keep an eye out for pests!";
} else if (plantType === "fruit") {
    advice += "Water regularly and use nutrient rich soil for best quality fruit.\n";
} else if (plantType === "herb") {
    advice += "Only take off little bits at a time to allow the plant time to recover.\n";
} else {
    advice += "No advice for this type of plant.";
}

// Log the generated advice to the console
console.log(advice);

