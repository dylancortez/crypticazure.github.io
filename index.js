const inspirationMachine = (quote, author) => {
    return {
    quote,
    author
    }
}

const quote1 = inspirationMachine('We cannot solve problems with the kind of thinking we employed when we came up with them.', 'Albert Einstein');
const quote2 = inspirationMachine('Learn as if you will live forever, live like you will die tomorrow.', 'Mahatma Gandhi');
const quote3 = inspirationMachine('When you give joy to other people, you get more joy in return.', 'Eleanor Roosevelt');
const quote4 = inspirationMachine('It is only when we take chances, when our lives improve.', 'Walter Anderson');
const quote5 = inspirationMachine('It is better to fail in originality than to succeed in imitation.', 'Herman Melville');
const quote6 = inspirationMachine('Success is getting what you want, happiness is wanting what you get.', 'W. P. Kinsella');
const quote7 = inspirationMachine('Don\'t let yesterday take up too much of today.', 'Will Rogers');
const quote8 = inspirationMachine('Either you run the day, or the day runs you.', 'Jim Rohn');
const quote9 = inspirationMachine('The most difficult thing is the decision to act, the rest is merely tenacity.', 'Amelia Earhart');
const quote0 = inspirationMachine('I am not a product of my circumstances. I am a product of my decisions.', 'Stephen R Covey');
const quoteArray = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote0];

function quoteFetcher() {
    let newQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)]
    document.getElementById('quote').innerHTML = `Inspirational Quote: ${newQuote.quote} by ${newQuote.author}`
}

console.log(quoteFetcher())
