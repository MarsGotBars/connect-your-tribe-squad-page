const peopleContainer = document.querySelector(".list");
const people = Array.from(peopleContainer.children)

const min = 5;
const max = 90;
const fontSizeClasses = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];

// Keeping in mind the last used number for use in topPlacement()
let lastNumber;
const randomPlacement = () => {
  peopleContainer.classList.add("interaction");
  people.forEach((person) => {
    const randomTextSize = Math.floor(Math.random() * fontSizeClasses.length + 1)
    const randomNumber = topPlacement();
    // Update lastNumber for the next element
    lastNumber = randomNumber;  
    person.style.top = `${randomNumber}%`;
    person.classList.add(fontSizeClasses[randomTextSize])
  });
};

const topPlacement = () => {
  // Generate a random number between min and max
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // Ensure the random number is not too close to the last number (spacing constraint)
  if (lastNumber !== undefined && Math.abs(randomNumber - lastNumber) < 10) {
    // Retry if the number is too close to the last one
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; 
  }

  return randomNumber;
};

randomPlacement();
