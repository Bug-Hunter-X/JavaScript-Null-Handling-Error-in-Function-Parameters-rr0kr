function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  // ... rest of your function
  return a + b; 
} 
console.log(foo(5, 6)) // Output 11
console.log(foo(null, 6)); // Output null
console.log(foo(5, null)); //Output null