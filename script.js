const card = document.querySelector('.card');

card.addEventListener('click', () => {card.classList.toggle('flipped');})

const newQuoteBtn = document.getElementById('new-quote');

const quotes = [
  { text: '"Love thy neighbour."', author: 'Jesus Christ', source: 'Son of God' },
  { text: '"You rock! Thank you for checking out my work"', author: 'Michelle'},
  { text: '"I think, therefore I am."', author: 'René Descartes', source: 'Discourse on the Method' },
  { text: '"Be yourself, everyone else is already taken."', author: 'Oscar Wilde', source: 'Quote' },
  { text: '"Find someone who loves who you are, not who you could be."', author: 'Anonymous', source: 'Quote' },
  { text: '"When we are no longer able to change a situation - we are challenged to change ourselves."', author: 'Viktor Frankl', source: "Man's search for meaning" },
  { text: '"Find someone who loves who you are, not who you could be."', author: 'Anonymous', source: 'Quote' },
  { text: '"The best way to keep a prisoner from escaping is to make sure he never knows he is in prison."', author: 'Fyodor Dostoevsky', source: 'Quote' },
  { text: "The only one that's judging you is yourself.", author: 'Tame Impala', source: 'Alter Ego - The Innerspeaker Album' },

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