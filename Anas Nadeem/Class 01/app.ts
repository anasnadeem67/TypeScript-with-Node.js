// Name App Program
// Author: Anas Nadeem
// Date: 25 November 2023

// Storing a person’s name in a variable
let myname: string = 'Anas';
console.log(myname);

// Creating a message using the stored name
const message: string = `Hello ${myname}, would you like to learn some Python today?`;
console.log(message);

// Converting the name to lowercase
const lowercasename = myname.toLowerCase();
console.log(`Lowercase: ${lowercasename}`);

// Converting the name to uppercase
const uppercasename = myname.toUpperCase();
console.log(`Uppercase: ${uppercasename}`);

// Converting the name to titlecase
const titlecasename: string = myname.replace(/\b\w/g, (match) => match.toUpperCase());
console.log(`Titlecase: ${titlecasename}`);

// Favorite Number Program
// Author: Anas Nadeem
// Date: 25 November 2023

// Storing the favorite number in a variable
const favoritenumber: number = 6;

// Creating a message to reveal the favorite number
const msg2: string = `My favorite number is ${favoritenumber}. `;
console.log(msg2);

// Name Program
// Author: Anas Nadeem
// Date: 25 November 2023

// Storing names in an array
const names: string[] = ["Abdurrehman", "Ahad", "Hussam", "Ali"];

// Printing each person's name one at a time
console.log("List of Names: ");
for (const name of names) {
    console.log(name);
}

console.log("Personalized Greetings: ");
for(const name of names){
    console.log(`Hello ${name}, would you like to catch up over coffee?`);
}

// Transportation Program
// Author: Anas Nadeem
// Date: 25 November 2023

const favoritetransportation: string[] = ["Tesla Modell S", "Honda Motorcycle", "Toyota Prius", "BMW X5"];

// Printing statements about each item in the array
console.log("Favorite Transportation List:");
for (const transportation of favoritetransportation) {
    console.log(`I would like to own a ${transportation}.`);
}

// Dinner Invitation Program
// Author: Anas Nadeem
// Date: 25 November 2023

// Storing a list of people to invite to dinner
const guestList: string[] = ["Ali", "Hussam", "Faisal"];

// Printing personalized invitation messages
console.log("Dinner Invitation Messages:");
for (const guest of guestList) {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner. We would be honored to have your presence.`);
}

// Dinner New Invitation Program
// Author: Anas Nadeem
// Date: 25 November 2023

// Storing the original list of people to invite to dinner


// Storing the guest who can't make it
const guestCannotMakeIt: string = "Faisal";

// Printing the original invitation messages
console.log("Original Dinner Invitation Messages:");
for (const guest of guestList) {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner. We would be honored to have your presence.`);
}

// Printing the name of the guest who can't make it
console.log(`Unfortunately, ${guestCannotMakeIt} can't make it to the dinner.\n`);

// Modifying the list by replacing the guest who can't make it with a new guest
const newGuest: string = "Taha";
const updatedGuestList: string[] = [...guestList.filter(guest => guest !== guestCannotMakeIt), newGuest];

// Printing the updated invitation messages
console.log("Updated Dinner Invitation Messages:");
for (const guest of updatedGuestList) {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner. We would be honored to have your presence.`);
}

// Bigger Dinner Table Program
// Author: Anas Nadeem
// Date: 25 November 2023

// Storing the original list of people to invite to dinner


// Storing the guest who can't make it
const guestCannotMakeIt2: string = "Faisal";

// Informing about the bigger dinner table
console.log("Good news! We found a bigger dinner table.\n");

// Adding new guests to the array
const newGuests: string[] = ["Fahad", "Yasir"];
const updatedGuestList2: string[] = [
    ...newGuests.slice(0, 1),  // Add the first new guest to the beginning
    ...guestList.filter(guest => guest !== guestCannotMakeIt),  // Remove the guest who can't make it
    ...newGuests.slice(1),  // Add the second new guest to the middle
];

// Appending one more guest to the end of the list
updatedGuestList.push("Ibad");

// Printing the updated invitation messages
console.log("Updated Dinner Invitation Messages:");
for (const guest of updatedGuestList) {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner. We would be honored to have your presence.`);
}




// Shrinking Guest List Program
// Author: Anas Nadeem
// Date: 25 November 2023

// Storing the original list of people to invite to dinner
const originalGuestList: string[] = ["Ali", "Hussam", "Faisal", "Taha", "Ibad"];

// Informing about the smaller dinner table
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.\n");

// Removing guests until only two names remain
while (originalGuestList.length > 2) {
    const removedGuest = originalGuestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Printing a message to each of the two people still on the list
console.log("\nInvitations for the remaining guests:");
for (const remainingGuest of originalGuestList) {
    console.log(`Dear ${remainingGuest},\nYou are still invited to dinner. We would be honored to have your presence.`);
}

// Removing the last two names from the list
originalGuestList.pop();
originalGuestList.pop();

// Printing the empty list
console.log("\nEmpty Guest List:");
console.log(originalGuestList);

// Seeing the World Program
// Author: Anas Nadeem
// Date: 25 November 2023

// Storing places to visit in an array (not in alphabetical order)
const placesToVisit: string[] = ["Tokyo", "Paris", "Machu Picchu", "New York", "Great Barrier Reef"];

// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical Order (without modifying original):");
console.log([...placesToVisit].sort());

// Show that the array is still in its original order
console.log("\nOriginal Order (unchanged):");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse Alphabetical Order (without modifying original):");
console.log([...placesToVisit].sort().reverse());

// Show that the array is still in its original order
console.log("\nOriginal Order (unchanged):");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();
console.log("\nOriginal Order (after double reversal):");
console.log(placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nAlphabetical Order (after sorting):");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nReverse Alphabetical Order (after sorting):");
console.log(placesToVisit);


// Dinner Invitation Program
// Author: Anas Nadeem
// Date: 25 November 2023

// Storing a list of people to invite to dinner

// Printing the number of people invited to dinner
console.log(`Number of people invited to dinner: ${guestList.length}`);

// Printing personalized invitation messages
console.log("Dinner Invitation Messages:");
for (const guest of guestList) {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner. We would be honored to have your presence.`);
}


// Programming Languages Program
// Author: Anas Nadeem
// Date: 25 November 2023

// Storing a list of programming languages in an array
const programmingLanguages: string[] = ["JavaScript", "Python", "Java", "TypeScript", "C#", "Ruby", "Go"];

// Printing the list of programming languages
console.log("List of Programming Languages:");
for (const language of programmingLanguages) {
    console.log(language);
}

// Countries Information Program
// Author: Anas Nadeem
// Date: 25 November 2023

// Creating objects containing information about different countries
const country1: { name: string; capital: string; population: number } = {
    name: "United States",
    capital: "Washington, D.C.",
    population: 331002651,
};

const country2: { name: string; capital: string; population: number } = {
    name: "India",
    capital: "New Delhi",
    population: 1380004385,
};

const country3: { name: string; capital: string; population: number } = {
    name: "Pakistan",
    capital: "Islamabad",
    population: 225199937,
};

// Printing information about each country
console.log("Information about Countries:");
console.log(country1);
console.log(country2);
console.log(country3);

// Intentional Error in Countries Information Program
// Author: Anas Nadeem
// Date: 25 November 2023


const countries: { name: string; capital: string; population: number }[] = [country1, country2];

// Attempting to access an index that doesn't exist (intentional error)
const nonExistentCountry = countries[2];  // Error: Index 2 is out of bounds

// Correcting the error by checking the array length
if (nonExistentCountry) {
    console.log("Information about the non-existent country:", nonExistentCountry);
} else {
    console.log("No information available for the non-existent country. Index out of bounds.");
}

// Condition check
// Author: Anas Nadeem
// Date: 25 November 2023

let car: string = 'subaru';

// Test 1: Is car == 'subaru'? I predict True.
console.log(car === 'subaru');

// Test 2: Is car !== 'honda'? I predict True.
console.log(car !== 'honda');

// Test 3: Is car.length > 0? I predict True.
console.log(car.length > 0);

// Test 4: Is car.length < 5? I predict False.
console.log(car.length < 5);

// Test 5: Is car.toLowerCase() == 'subaru'? I predict True.
console.log(car.toLowerCase() === 'subaru');

// Test 6: Is car.toUpperCase() == 'SUBARU'? I predict False.
console.log(car.toUpperCase() === 'SUBARU');

// Test 7: Is car.includes('u')? I predict True.
console.log(car.includes('u'));

// Test 8: Is car.includes('z')? I predict False.
console.log(car.includes('z'));

// Test 9: Is car.charAt(2) == 'b'? I predict True.
console.log(car.charAt(2) === 'b');

// Test 10: Is car.charAt(0) == 'S'? I predict False.
console.log(car.charAt(0) === 'S');

// More Conditional check
// Author: Anas Nadeem
// Date: 25 November 2023

let fruit: string = 'apple';
let number1: number = 5;
let number2: number = 10;
let colors: string[] = ['red', 'green', 'blue'];

// Tests for equality and inequality with strings
console.log("Test 1: Is fruit == 'orange'? I predict False.");
console.log(fruit === 'orange');

console.log("Test 2: Is fruit != 'banana'? I predict True.");
console.log(fruit !== 'banana');

// Tests using the lower case function
console.log("Test 3: Is fruit.toLowerCase() == 'apple'? I predict True.");
console.log(fruit.toLowerCase() === 'apple');

// Numerical tests
console.log("Test 4: Is number1 < number2? I predict True.");
console.log(number1 < number2);

console.log("Test 5: Is number1 + number2 >= 15? I predict True.");
console.log(number1 + number2 >= 15);

// Tests using "and" and "or" operators
console.log("Test 6: Is number1 > 3 and number2 < 15? I predict True.");
console.log(number1 > 3 && number2 < 15);

console.log("Test 7: Is number1 > 5 or number2 > 12? I predict False.");
console.log(number1 > 5 || number2 > 12);

// Test whether an item is in an array
console.log("Test 8: Is 'red' in colors? I predict True.");
console.log(colors.includes('red'));

// Test whether an item is not in an array
console.log("Test 9: Is 'yellow' not in colors? I predict True.");
console.log(!colors.includes('yellow'));

// Alien Colors #1 Program
// Author: Anas Nadeem
// Date: 25 November 2023

let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}

alien_color = 'red';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}

// Alien Colors #2 Program
// Author: Anas Nadeem
// Date: 25 November 2023

// Version 1: Running the if block (alien_color is 'green')
alien_color = 'green';

if (alien_color === 'green') {
    console.log("Version 1: Congratulations! You just earned 5 points for shooting the alien.");
} else {
    console.log("Version 1: Congratulations! You just earned 10 points for shooting the alien.");
}

// Version 2: Running the else block (alien_color is not 'green')
let alien_color_2: string = 'red';

if (alien_color_2 === 'green') {
    console.log("Version 2: Congratulations! You just earned 5 points for shooting the alien.");
} else {
    console.log("Version 2: Congratulations! You just earned 10 points for shooting the alien.");
}


// Alien Colors #3 Program
// Author: Anas Nadeem
// Date: 25 November 2023

// Version 1: Green Alien
alien_color = 'green';

if (alien_color === 'green') {
    console.log("Version 1: Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color === 'yellow') {
    console.log("Version 1: Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alien_color === 'red') {
    console.log("Version 1: Congratulations! You just earned 15 points for shooting the red alien.");
}

// Version 2: Yellow Alien
alien_color = 'yellow';

if (alien_color_2 === 'green') {
    console.log("Version 2: Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color_2 === 'yellow') {
    console.log("Version 2: Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alien_color_2 === 'red') {
    console.log("Version 2: Congratulations! You just earned 15 points for shooting the red alien.");
}

// Version 3: Red Alien
alien_color = 'red';

if (alien_color === 'green') {
    console.log("Version 3: Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color === 'yellow') {
    console.log("Version 3: Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alien_color === 'red') {
    console.log("Version 3: Congratulations! You just earned 15 points for shooting the red alien.");
}


// Stages of Life Program
// Author: Anas Nadeem
// Date: 25 November 2023

// Set a value for the variable age
let age: number = 25;

// Determine the person's stage of life using an if-else chain
if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}


// Favorite Fruit Program
// Author: Anas Nadeem
// Date: 25 November 2023

// Make an array of favorite fruits
const favorite_fruits: string[] = ['banana', 'apple', 'strawberry'];

// Write five independent if statements
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}

// Additional if statements for other fruits
if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}

if (favorite_fruits.includes('kiwi')) {
    console.log("You really like kiwis!");
}

// Greeting Program
// Author: Anas Nadeem
// Date: 25 November 2023

// Make an array of usernames
const usernames: string[] = ['admin', 'Faisal', 'Riaz', 'Kamran', 'Zubair'];

// Loop through the array and print greetings
for (const username of usernames) {
    if (username.toLowerCase() === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}

// Greeting Program with No Users Check
// Author: Anas Nadeem
// Date: 25 November 2023

// use an array of usernames
let usernames1: string[] = ['admin', 'Faisal', 'Riaz', 'Kamran', 'Zubair'];

// Check if the list of users is not empty
if (usernames.length > 0) {
    // Loop through the array and print greetings
    for (const username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
} else {
    console.log("We need to find some users!");
}

// Remove all usernames from the array
usernames1 = [];

// Check if the list of users is not empty after removal
if (usernames.length > 0) {
    // This part will not be executed if the list is empty
    for (const username of usernames) {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
} else {
    console.log("We need to find some users!");
}


// Checking Usernames Program
// Author: Anas Nadeem
// Date: 25 November 2023

// Make a list of current usernames
const current_users: string[] = ['Anas', 'Faisal', 'admin', 'Kaif', 'Subhan'];

// Make a list of new usernames
const new_users: string[] = ['Taha', 'Yasir', 'Jabbar', 'kazi', 'Subhan'];

// Loop through the new_users list to check for uniqueness
for (const new_user of new_users) {
    // Check if the new username exists in the current usernames list (case-insensitive)
    const isUsernameTaken: boolean = current_users.some(
        (current_user) => current_user.toLowerCase() === new_user.toLowerCase()
    );

    // Print messages based on the uniqueness of the username
    if (isUsernameTaken) {
        console.log(`Sorry, ${new_user} is already taken. Please enter a new username.`);
    } else {
        console.log(`${new_user} is available.`);
    }
}

// Ordinal Numbers Program
// Author: Anas Nadeem
// Date: 25 November 2023

// Store the numbers 1 through 9 in an array
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array and print the proper ordinal ending for each number
for (const number of numbers) {
    let ordinal: string;

    // Use an if-else chain to determine the proper ordinal ending
    if (number === 1) {
        ordinal = 'st';
    } else if (number === 2) {
        ordinal = 'nd';
    } else if (number === 3) {
        ordinal = 'rd';
    } else {
        ordinal = 'th';
    }

    // Print the result
    console.log(`${number}${ordinal}`);
}

// Pizzas Program
// Author: Anas Nadeem
// Date: 25 November 2023

// Store three kinds of favorite pizza in an array
const favorite_pizzas: string[] = ['Bihari tikka', 'Fajita', 'BBQ Chicken'];

// Use a for loop to print the name of each pizza
console.log("Pizza Names:");
for (const pizza of favorite_pizzas) {
    console.log(pizza);
}

// Modify the for loop to print a sentence using the name of the pizza
console.log("\nPizza Statements:");
for (const pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Add a line outside the for loop to state how much you like pizza
console.log("\nI really love pizza!");


// Animals Program
// Author: Anas Nadeem
// Date: 25 November 2023

// Store three different animals with a common characteristic in an array
const common_animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// Use a for loop to print the name of each animal
console.log("Animal Names:");
for (const animal of common_animals) {
    console.log(animal);
}

// Modify the for loop to print a statement about each animal
console.log("\nAnimal Statements:");
for (const animal of common_animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Add a line outside the for loop to state what these animals have in common
console.log("\nAny of these animals would make a great pet!");


// T-Shirt Program
// Author: Anas Nadeem
// Date: 25 November 2023

// Define the make_shirt function
function make_shirt(size: string, message: string): void {
    console.log(`Shirt Size: ${size.toUpperCase()}`);
    console.log(`Message: ${message}`);
}

// Call the make_shirt function
make_shirt('medium', 'I ❤️ TypeScript');


// Large Shirts Program
// Author: Anas Nadeem
// Date: 25 November 2023

// Modified make_shirt function with default values
function make_shirt2(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`Shirt Size: ${size.toUpperCase()}`);
    console.log(`Message: ${message}`);
}

// Create a large shirt with the default message
make_shirt2();

// Create a medium shirt with the default message
make_shirt2('medium');

// Create a shirt of any size with a different message
make_shirt('small', 'TypeScript is fun!');

// Cities Program
// Author: Anas Nadeem
// Date: 25 November 2023

// Define the describe_city function with a default country value
function describe_city(city: string, country: string = 'Default Country'): void {
    console.log(`${city} is in ${country}.`);
}

// Call the describe_city function for three different cities
describe_city('Karachi', 'Pakistan');
describe_city('Paris', 'France');
describe_city('New York'); // Uses the default country value

// City Names Program
// Author: Anas Nadeem
// Date: 26 November 2023

// Define the city_country function
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with three city-country pairs and print the values
const location1 = city_country('Lahore', 'Pakistan');
const location2 = city_country('Paris', 'France');
const location3 = city_country('New York', 'USA');

console.log(location1);
console.log(location2);
console.log(location3);

// Album Program
// Author: Anas Nadeem
// Date: 26 November 2023

// Define the make_album function
function make_album(artist: string, title: string, tracks?: number): Record<string, string | number> {
    const album: Record<string, string | number> = {
        artist: artist,
        title: title,
    };

    // Add the number of tracks if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Make three dictionaries representing different albums
const album1 = make_album('Artist1', 'Album1', 10);
const album2 = make_album('Artist2', 'Album2');
const album3 = make_album('Artist3', 'Album3', 15);

// Print each return value
console.log(album1);
console.log(album2);
console.log(album3);

// Magicians Program
// Author: Anas Nadeem
// Date: 26 November 2023

// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Create an array of magician's names
const magicianNames: string[] = ['Merlin', 'Houdini', 'David Copperfield', 'Penn', 'Teller'];

// Call the show_magicians function and pass the array
show_magicians(magicianNames);

// Great Magicians Program
// Author: Anas Nadeem
// Date: 26 November 2023

// Define the show_magicians function
function show_magicians2(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Define the make_great function to modify the array
function make_great(magicians: string[]): string[] {
    // Create a new array with "the Great" added to each magician's name
    return magicians.map(magician => `${magician} the Great`);
}

// Create an array of magician's names
const magicianNames2: string[] = ['Merlin', 'Houdini', 'David Copperfield', 'Penn', 'Teller'];

// Call the make_great function to modify the array
const greatMagicians = make_great(magicianNames);

// Call the show_magicians function to see the modified list
show_magicians(greatMagicians);


// Unchanged Magicians Program
// Author: Anas Nadeem
// Date: 26 November 2023

// Define the show_magicians function
function show_magicians3(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Define the make_great function to modify a copy of the array
function make_great3(magicians: string[]): string[] {
    // Create a new array with "the Great" added to each magician's name
    return magicians.map(magician => `${magician} the Great`);
}

// Create an array of magician's names
const magicianNames3: string[] = ['Merlin', 'Houdini', 'David Copperfield', 'Penn', 'Teller'];

// Call the make_great function with a copy of the array
const greatMagicians3 = make_great([...magicianNames]); // Using the spread operator to create a copy

// Call the show_magicians function with the original and modified arrays
console.log("Original Magicians:");
show_magicians(magicianNames);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);

// Sandwiches Program
// Author: Anas Nadeem
// Date: 26 November 2023

// Define the order_sandwich function
function order_sandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items selected. Please choose some items for your sandwich.");
    } else {
        console.log(`You ordered a sandwich with: ${items.join(', ')}`);
    }
    console.log(); // Empty line for better readability
}

// Call the order_sandwich function with different numbers of arguments
order_sandwich('Turkey', 'Cheese', 'Lettuce', 'Tomato');
order_sandwich('Chicken', 'Mayonnaise');
order_sandwich(); // No items selected


// Cars Program
// Author: Anas Nadeem
// Date: 26 November 2023

// Define the createCar function
function createCar(manufacturer: string, modelName: string, options: Record<string, any>): Record<string, any> {
    const carInfo: Record<string, any> = {
        manufacturer: manufacturer,
        modelName: modelName,
        ...options, // Spread the options into the carInfo Object
    };

    return carInfo;
}

// Call the createCar function with required and optional information
const myCar = createCar('Toyota', 'Camry', { color: 'Blue', features: ['Sunroof', 'Navigation'] });
console.log(myCar);

