// Bank some good vibe options
const vibes = [
    "...and you are awesome!",
    "...have a wonderful day!",
    "...and your partner is doing well!",
    "...and so is this puppy! 🐶"
];

// choose a random good vibe
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector(".vibe").append(vibe);