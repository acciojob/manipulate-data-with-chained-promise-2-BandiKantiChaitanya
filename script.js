let output = document.getElementById('output');

// Initial array
let inputArray = [1, 2, 3, 4];

// Function to update the output
function updateOutput(arr) {
  output.innerHTML = arr.join(',');
}

// Step 1: Filter even numbers and display after 1 second
function filterEvenNumbers() {
  return new Promise(resolve => {
    setTimeout(() => {
      // Filter even numbers from the original array
      const evenNumbers = inputArray.filter(num => num % 2 === 0);
      updateOutput(evenNumbers); // Update the output div
      resolve(evenNumbers); // Resolve the promise with the even numbers
    }, 1000); // 1-second delay
  });
}

// Step 2: Multiply even numbers by 2 and display after 3 seconds (additional delay)
function multiplyByTwo(numbers) {
  return new Promise(resolve => {
    setTimeout(() => {
      // Multiply each number by 2
      const multiplied = numbers.map(num => num * 2);
      updateOutput(multiplied); // Update the output div
      resolve(multiplied); // Resolve the promise with the transformed numbers
    }, 2000); // 2-second delay
  });
}

// Execute the steps in sequence using async/await
async function transformArray() {
  const evenNumbers = await filterEvenNumbers(); // Step 1
  await multiplyByTwo(evenNumbers); // Step 2
}

// Call the transform function when the page loads
transformArray();
