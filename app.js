// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below

// Function to validate credit card numbers
const validateCred = (arr) => {

    // Create an empty array to store modified values
    const modifiedArr = [];

    // Create a variable to hold the decision
    let decision;

    // Loop through the array backwards
    for (let i = arr.length - 1; i >= 0; i--){

        // Double every other digit starting from the second to last
        if (i % 2 !== 0) {
            modifiedArr.unshift(arr[i]*2)
        }
        else {
            modifiedArr.unshift(arr[i])
        }

        // If a number in the modified array is greater than 9, subtract 9 from it
        const completeModifiedArr = modifiedArr.map(num => {
            if (num > 9) {
              return num - 9
            }
            else {
              return num
            }
          })

        // Add up all the numbers in the modified array
        const sum = completeModifiedArr.reduce((accumulator, currentValue) => accumulator + currentValue)

        // If the sum is not divisible by 10, the card is invalid
        if (sum % 10 !== 0) {
            decision = 'Invalid Number'
        }
        else {
            decision = 'Valid Number'
        }
    }

    // Return the decision
    return decision;
}

// Function to find invalid credit cards in a batch
const findInvalidCards = (arr) => {

    // Create an empty array to store invalid cards
    const invalidCards = [];

    // Loop through the batch array
    for (let i = 0; i < arr.length; i++) {

        // If the card is invalid, add it to the invalidCards array
        if (validateCred(arr[i]) === 'Invalid Number') {
            invalidCards.push(arr[i])
        }
    }

    // Return the invalidCards array
    return invalidCards
}

// Function to identify the issuers of invalid credit cards
const idInvalidCardCompanies = (arr) => {

    // Create an empty array to store the card issuer names
    let cardCompanies = []

    // Loop through the invalid credit card array
    for (let i = 0; i < arr.length; i++) {

        // Get the first digit of the card number
        let firstDigit = arr[i][0]

        // Identify the card issuer based on the first digit and add it to the cardCompanies array
        if (firstDigit === 3) {
            if (!cardCompanies.includes('Amex (American Express)')) {
                cardCompanies.push('Amex (American Express)')
            }
        }
        else if (firstDigit === 4) {
            if (!cardCompanies.includes('Visa')) {
                cardCompanies.push('Visa')
            }
        }
        else if (firstDigit === 5) {
            if (!cardCompanies.includes('Mastercard')) {
                cardCompanies.push('Mastercard')
            }
        }
        else if (firstDigit === 6) {
            if (!cardCompanies.includes('Discover')) {
                cardCompanies.push('Discover')
            }
        }
        else {
            console.log('Company not found')
        }
    }

    // Return the cardCompanies array
    return cardCompanies
}

// Test the functions
console.log(findInvalidCards(batch))
console.log(idInvalidCardCompanies(findInvalidCards(batch)))


