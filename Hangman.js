// Define the alphabet
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Function to create letter buttons
function createLetterButtons() {
    const letterButtonsContainer = document.getElementById('letter-buttons');

    // Create a button for each letter in the alphabet
    for (let letter of alphabet) {
        const button = document.createElement('button');
        button.textContent = letter;
        button.addEventListener('click', () => handleButtonClick(letter));
        letterButtonsContainer.appendChild(button);
    }
}

// Function to handle button click
function handleButtonClick(letter) {
    // Add your Hangman game logic here
    console.log(`Button ${letter} clicked`);
}

// Call the function to create letter buttons
createLetterButtons();
