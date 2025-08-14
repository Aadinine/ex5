function calculate(operation) {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
    
    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = "Please enter valid numbers";
        return;
    }
    
    // Perform calculation based on operation
    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                document.getElementById('result').textContent = "Cannot divide by zero";
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = "Invalid operation";
    }
    
    // Display result
    document.getElementById('result').textContent = `Result: ${result}`;
}