function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m
    const bmiValue = document.getElementById('bmi-value');
    const bmiStatus = document.getElementById('bmi-status');

    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        const roundedBMI = bmi.toFixed(1);
        bmiValue.textContent = roundedBMI;

        // Determine status with color coding
        if (bmi < 18.5) {
            updateStatus("Underweight", "#3498db");
        } else if (bmi < 25) {
            updateStatus("Normal", "#2ecc71");
        } else if (bmi < 30) {
            updateStatus("Overweight", "#f39c12");
        } else {
            updateStatus("Obese", "#e74c3c");
        }
    } else {
        bmiValue.textContent = "-";
        bmiStatus.textContent = "Enter valid values";
        bmiStatus.style.color = "#7f8c8d";
    }
}

function updateStatus(status, color) {
    const bmiStatus = document.getElementById('bmi-status');
    bmiStatus.textContent = status;
    bmiStatus.style.color = color;
    document.getElementById('bmi-value').style.color = color;
}