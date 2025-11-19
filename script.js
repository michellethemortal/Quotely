const card = document.querySelector('.card');

card.addEventListener('click', () => {card.classList.toggle('flipped');})

const newQuoteBtn = document.getElementById('new-quote');

const quotes = [
  { text: '"Love thy neighbour."', author: 'Jesus Christ', source: 'Son of God' },
  { text: '"The only thing we have to fear is fear itself."', author: 'Franklin D. Roosevelt'},
  { text: '"I think, therefore I am."', author: 'René Descartes', source: 'Discourse on the Method' },
  { text: '"Be yourself, everyone else is already taken."', author: 'Oscar Wilde', source: 'Quote' }
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const quoteSource = document.getElementById('quote-source');

newQuoteBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent card flip when clicking the circle

  // Pick a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Update front/back content
  quoteText.textContent = randomQuote.text;
  quoteAuthor.textContent = randomQuote.author;
  quoteSource.textContent = randomQuote.source;

  // Reset card to front if it was flipped
  card.classList.remove('flipped');
});

//Only make the instruction appear once
const instructions = document.getElementById('instructions')

const carder = document.getElementById('quote-card')

carder.addEventListener("click", ()=> {
  instructions.style.opacity = "0";
  instructions.classList.add("hidden")
})