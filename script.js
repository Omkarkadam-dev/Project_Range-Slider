// Select slider and display elements
const rangeSlider = document.getElementById('range-slider');
const valueDisplay = document.getElementById('value-display');

// Update value display on input change
rangeSlider.addEventListener('input', () => {
    const value = rangeSlider.value;
    valueDisplay.textContent = value;

    // Adjust background gradient based on value
    const percentage = (value / rangeSlider.max) * 100;
    rangeSlider.style.background = `linear-gradient(90deg, #007acc ${percentage}%, #e5e5e5 ${percentage}%)`;

    // Position the value display dynamically
    const sliderWidth = rangeSlider.offsetWidth;
    const offset = (value / rangeSlider.max) * sliderWidth - valueDisplay.offsetWidth / 2;
    valueDisplay.style.left = `${offset}px`;
});
