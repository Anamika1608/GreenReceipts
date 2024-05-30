const typedTextElement = document.getElementById('typed-text');
const text = 'Track your impact, unlock rewards, shop sustainably.';
let letterIndex = 0;

function typeWriter() {
  if (letterIndex < text.length) {
    typedTextElement.textContent += text.charAt(letterIndex);
    letterIndex++;
  } else {
    letterIndex = 0;
    typedTextElement.textContent = ""; // Clear the text before retyping
  }
}

const typingInterval = setInterval(() => {
  typeWriter();
}, 100); // Adjust speed (every 200 milliseconds, adjust as needed)

// This interval will keep calling typeWriter() continuously
