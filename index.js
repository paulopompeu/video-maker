const readLine = require('readline-sync')
const robots = {
    text: require('./robots/text.js')
}

async function start(){
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    await robots.text(content)

    function askAndReturnSearchTerm() {
        return readLine.question('Type a Wikepedia search term: ')
    }

    function askAndReturnPrefix(){
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readLine.keyInSelect(prefixes, 'Choose one option')
        const selectedPrefixedText = prefixes[selectedPrefixIndex]
        return(selectedPrefixedText)
    }

    console.log(content)
}

start()