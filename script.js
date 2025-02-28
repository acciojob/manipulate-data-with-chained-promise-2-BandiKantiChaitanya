let output = document.getElementById('output');
let arr = [1, 2, 3, 4];

// Function to filter out odd numbers and handle even numbers
function findOdd(arr) {
  setTimeout(() => {
    let oddNumbers = [];
    let evenNumbers = [];
    
    // Filter odd and even numbers
    for (let x of arr) {
      if (x % 2 !== 0) {
        oddNumbers.push(x); // Collect odd numbers
      } else {
        evenNumbers.push(x); // Collect even numbers
      }
    }

    // Display odd numbers or move to findEven for even numbers
    if (oddNumbers.length > 0) {
      output.innerHTML = `${evenNumbers.join(', ')}`;
      findEven(evenNumbers); // Call findEven directly for even numbers
    } else {
      output.innerHTML = 'No odd numbers found.';
    }
  }, 1000); // 1 second delay for finding odd numbers
}

// Function to multiply even numbers by 2
function findEven(num) {
  setTimeout(() => {
    if (num.length > 0) {
      // Multiply each even number by 2
      let multipliedEvens = num.map(x => x * 2);
      
      // Display the result in output div
      output.innerHTML = ` ${multipliedEvens.join(', ')}`;
    } else {
      output.innerHTML += `<br>No even numbers found.`;
    }
  }, 2000); // 2 seconds delay for multiplying even numbers
}

findOdd(arr);
