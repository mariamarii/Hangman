const wordDisplay = document.querySelector(".word-display");
const hangmanImage = document.querySelector(".hangman-image img");
const gameModal = document.querySelector(".game-modal");
const incorrectLetters = document.querySelector("#incorrect-letters b");
const answer = document.querySelector(".content b");
const playAgainButton = document.querySelector(".play-again");
const wordList = [
    { word: "ELEPHANT", hint: "Large land mammal with a trunk" },
    { word: "COMPUTER", hint: "Electronic device for processing data" },
    { word: "MONKEY", hint: "Primate known for its playful behavior" },
    { word: "PIZZA", hint: "Italian dish with cheese and toppings" },
    { word: "BANANA", hint: "Yellow fruit with a peel" },
    { word: "GUITAR", hint: "Musical instrument with strings" },
    { word: "BEACH", hint: "Sandy shore along a body of water" },
    { word: "COWBOY", hint: "Western cattle herder" },
    { word: "SUNSHINE", hint: "Bright light from the sun" },
    { word: "DIAMOND", hint: "Precious gemstone" },
    { word: "RAINBOW", hint: "Multicolored arc in the sky" },
    { word: "BUTTERFLY", hint: "Insect with colorful wings" },
    { word: "LEMONADE", hint: "Citrus-flavored drink" },
    { word: "HAMBURGER", hint: "Sandwich with a beef patty" },
    { word: "CANDLE", hint: "Wax stick with a wick for lighting" },
    { word: "KANGAROO", hint: "Marsupial with a pouch" },
    { word: "TIGER", hint: "Large feline predator with stripes" },
    { word: "VOLCANO", hint: "Mountain that erupts with lava" },
    { word: "EARTHQUAKE", hint: "Sudden shaking of the ground" },
    { word: "WINDMILL", hint: "Device for converting wind energy into rotational energy" },
    { word: "SKYSCRAPER", hint: "Tall building in a city" },
    { word: "MOONLIGHT", hint: "Light from the moon" },
    { word: "CHOCOLATE", hint: "Sweet food made from cacao beans" },
    { word: "SATELLITE", hint: "Object orbiting a planet" },
    { word: "SPACESHIP", hint: "Vehicle designed for travel in outer space" },
    { word: "ZEBRA", hint: "African mammal with black and white stripes" },
    { word: "OCTOPUS", hint: "Marine animal with eight tentacles" },
    { word: "MERMAID", hint: "Mythical creature with the upper body of a human and the tail of a fish" },
    { word: "PIRATE", hint: "Seafarer who engages in maritime piracy" },
    { word: "VAMPIRE", hint: "Mythical creature that feeds on blood" },
    { word: "WITCH", hint: "Practitioner of witchcraft or magic" },
    { word: "GHOST", hint: "Spirit of a deceased person" },
    { word: "WIZARD", hint: "Magical practitioner with supernatural powers" },
    { word: "DRAGON", hint: "Mythical creature with reptilian traits" },
    { word: "UNICORN", hint: "Mythical horse-like creature with a single horn" },
    { word: "FAIRY", hint: "Mythical being with magical powers" },
    { word: "ANGEL", hint: "Spiritual being typically depicted as a benevolent celestial being" },
    { word: "SUPERHERO", hint: "Fictional character with superhuman abilities" },
    { word: "ROBOT", hint: "Mechanical or virtual artificial agent" },
    { word: "ALIEN", hint: "Extraterrestrial being" },
    { word: "JUNGLE", hint: "Dense forest typically found in tropical regions" },
    { word: "OCEAN", hint: "Large body of saltwater" },
    { word: "FOREST", hint: "Dense area of trees and vegetation" },
    { word: "DESERT", hint: "Arid land with little vegetation" },
    { word: "MOUNTAIN", hint: "Elevated landform rising prominently above its surroundings" },
    { word: "RIVER", hint: "Large natural flow of water" },
    { word: "WATERFALL", hint: "Cascade of water flowing over a cliff" },
    { word: "CAVE", hint: "Natural underground chamber or series of chambers" },
    { word: "CASTLE", hint: "Fortified residence of a noble or royal family" },
    { word: "PALACE", hint: "Official residence of a sovereign or high-ranking dignitary" },
    { word: "TEMPLE", hint: "Place of worship typically associated with a religious tradition" },
    { word: "IGLOO", hint: "Dome-shaped shelter made from blocks of ice" },
    { word: "LIGHTHOUSE", hint: "Tower with a bright light used to guide ships at sea" },
    { word: "TORNADO", hint: "Violently rotating column of air" },
    { word: "HURRICANE", hint: "Intense tropical cyclone with strong winds" },
    { word: "BLIZZARD", hint: "Severe snowstorm with strong winds and low visibility" },
    { word: "AVALANCHE", hint: "Sudden and rapid flow of snow down a slope" },
    { word: "THUNDER", hint: "Sound caused by lightning" },
    { word: "LIGHTNING", hint: "Electrical discharge in the atmosphere" },
    { word: "SUNFLOWER", hint: "Flower that turns to face the sun" },
    { word: "LADYBUG", hint: "Small beetle with a red or orange shell" },
    { word: "FIREWORKS", hint: "Explosive pyrotechnic display" },
    { word: "CIRCUS", hint: "Entertainment show with acrobats, clowns, and animals" },
    { word: "CAROUSEL", hint: "Merry-go-round amusement ride" },
    { word: "FERRIS WHEEL", hint: "Giant rotating wheel with passenger cabins" },
    { word: "BALLOON", hint: "Inflatable bag filled with gas or hot air" },
    { word: "AIRPLANE", hint: "Powered flying vehicle with fixed wings" },
    { word: "HELICOPTER", hint: "Aircraft with rotating blades for vertical takeoff and landing" },
    { word: "ROCKET", hint: "Vehicle that travels through space propelled by rocket engines" },
    { word: "ASTRONAUT", hint: "Person trained for traveling in space" },
    { word: "METEOR", hint: "Small body of matter that enters Earth's atmosphere" },
    { word: "COMET", hint: "Celestial object with a tail of gas and dust" },
    { word: "GALAXY", hint: "Huge system of stars, gas, and dust bound together by gravity" },
    { word: "PLANETARIUM", hint: "Facility for observing and learning about celestial objects" },
    { word: "CONSTELLATION", hint: "Group of stars forming a recognizable pattern" },
    
    { word: "ASTEROID", hint: "Small rocky body orbiting the sun" },
    { word: "SPACESHIP", hint: "Vehicle designed for travel in outer space" },
    { word: "MOON", hint: "Natural satellite orbiting a planet" },
    { word: "SUN", hint: "Star at the center of the solar system" },
    { word: "STAR", hint: "Luminous celestial body" },
    
    { word: "NEBULA", hint: "Interstellar cloud of dust, hydrogen, helium, and other gases" },
    { word: "ECLIPSE", hint: "Occurrence when one celestial body obscures another" },
    { word: "SHOOTINGSTAR", hint: "Small, rapidly moving meteor" },
    { word: "TELESCOPE", hint: "Optical instrument for viewing distant objects" },
    { word: "ALIEN", hint: "Extraterrestrial being" },
    { word: "UFO", hint: "Unidentified flying object" },
    { word: "MARTIAN", hint: "Inhabitant or creature from the planet Mars" },
    { word: "SPACEMAN", hint: "Astronaut or cosmonaut" },
    { word: "STARSHIP", hint: "Spacecraft designed for interstellar travel" },
    { word: "EXTRATERRESTRIAL", hint: "Being or object originating from outside the Earth's atmosphere" },
    { word: "ORBIT", hint: "Path followed by one object around another due to gravity" },
    { word: "GRAVITY", hint: "Force that attracts objects toward each other" },
    { word: "COSMONAUT", hint: "Russian astronaut" },
    { word: "SPACECRAFT", hint: "Vehicle or device designed for travel or operation in outer space" },
    
    { word: "ROVER", hint: "Vehicle designed to move across the surface of a planet or other celestial body" }
];
let currentWord, correctGuesses, wrongGuesses;
const maxGuesses = 6;

const resetGame = () => {
    correctGuesses = 0;
    wrongGuesses = 0;
    hangmanImage.src = `images/hangman-${wrongGuesses}.svg`;
    incorrectLetters.innerText = `${wrongGuesses}/${maxGuesses}`;
    const letterButtons = document.querySelectorAll('#letter-buttons button');
    letterButtons.forEach(button => button.disabled = false);
    wordDisplay.innerHTML = currentWord.split("").map(() => ` <li class="letter"></li>`).join("");
    gameModal.classList.remove("show");
}
const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    console.log(word);
    
   
    document.querySelector("#hint-text b").innerText = hint;
    resetGame();
}
// Define the alphabet
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Function to create letter buttons
function createLetterButtons() {
    const letterButtonsContainer = document.getElementById('letter-buttons');

    // Create a button for each letter in the alphabet
    for (let letter of alphabet) {
        const button = document.createElement('button');
        button.textContent = letter;
        button.addEventListener('click', (event) => handleButtonClick(letter, event.target));
        letterButtonsContainer.appendChild(button);
    }
}

const gameOver = (isVictory) => {
    setTimeout(() => {
        const modalText = isVictory ? `Hmmm you won this time..<br/> The correct word was:` : `you are not as smart as you think you are! <br/>
         The correct word was:`;
        gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
        gameModal.querySelector("h4").innerText = `${isVictory ? 'Congrats' : 'GameOver!'}`;
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");
    },300)
}
// Function to handle button click
function handleButtonClick(letter, button) {
    button.disabled = true;
    if (currentWord.includes(letter)) {
        [...currentWord].forEach((indexedletter, index) => {
            if (letter == indexedletter) {
                correctGuesses++;
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        })
    }
    else {
        wrongGuesses++;
        hangmanImage.src = `images/hangman-${wrongGuesses}.svg`;
    }
    
    incorrectLetters.innerText = `${wrongGuesses}/${maxGuesses}`;

    if (wrongGuesses === maxGuesses) return gameOver(false);
    answer.innerText = `${currentWord}`;
    if (correctGuesses === currentWord.length) return gameOver(true);
    console.log(`Button ${letter} clicked`);
}

// Call the functions
createLetterButtons();
getRandomWord();
playAgainButton.addEventListener("click", getRandomWord);