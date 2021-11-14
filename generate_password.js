function generatePassword(options) {

  // Define password combinations user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // Create a collection user picked up
  let collection = []

  if (options.lowercase) {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase) {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers) {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols) {
    collection = collection.concat(symbols.split(''))
  }

  // Eliminate characters user doesn't want
  if (options.excludeCharacters) {
    collection = collection.filter(characters => {
      return !options.excludeCharacters.includes(characters)
    })
  }

  // Check if collection is empty
  if (collection.length === 0) {
    return 'Empty combination for password.'
  }

  // Random generate password
  let password = ''
  for (let i = 0; i < options.length; i++) {
    let charIndex = Math.floor(Math.random() * collection.length)
    password += collection[charIndex]
  }

  // Return password
  return password
}

// Export function for other files to use
module.exports = generatePassword