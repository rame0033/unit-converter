const numInput = document.getElementById("num-con")
const convertBtn = document.getElementById("convert")
const lengthEl = document.getElementById("con-length")
const volumeEl = document.getElementById("con-volume")
const massEl = document.getElementById("con-mass")

// Limit the number of 5 characters in the input field
numInput.addEventListener("input", function () {
    if (this.value.length > 5) {
        this.value = this.value.substring(0, 5);
    }
})

// Set conversion values
const meter2feet = 3.281
const feet2meter = 0.3048
const liter2gallon = 0.264
const gallon2liter = 3.785
const kg2pound = 2.205
const pound2kg = 0.4536

// Conversion functions
convertBtn.addEventListener("click", function () {

    try {
        // Retrieve the input value
        const baseNum = parseFloat(numInput.value)

        // Check if the input is a number 
        if (isNaN(baseNum)) {
            throw new Error("Please enter a valid number")
        } else {
            console.log(`Base number: ${baseNum}`)
        }


        // length conversion (meter to feet and vice versa)
        lengthEl.textContent = `${baseNum} meters = ${(baseNum * meter2feet).toFixed(3)} feet | ${baseNum} feet = ${(baseNum * feet2meter).toFixed(2)} meters`;

        // volume conversion (liter to gallon and vice versa)
        volumeEl.textContent = `${baseNum} liters = ${(baseNum * liter2gallon).toFixed(3)} gallons | ${baseNum} gallons = ${(baseNum * gallon2liter).toFixed(2)} liters`;

        // mass conversion (kg to pound and vice versa)
        massEl.textContent = `${baseNum} kilograms = ${(baseNum * kg2pound).toFixed(3)} pounds | ${baseNum} pounds = ${(baseNum * pound2kg).toFixed(2)} kilograms`;

    } catch (error) {
        alert("Please enter a valid number")
    }
});