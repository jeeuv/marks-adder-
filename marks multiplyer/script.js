document.addEventListener("DOMContentLoaded", function () {
    let currentValue = 0;
    const currentValueElement = document.getElementById("currentValue");
    const addQuarterButton = document.getElementById("addQuarter");
    const addHalfButton = document.getElementById("addHalf");
    const addthreeQuarterButton = document.getElementById("addthreeQuarter");
	const addoneButton = document.getElementById("addone");
	const addtwoButton = document.getElementById("addtwo");
	const addthreeButton = document.getElementById("addthree");

    addQuarterButton.addEventListener("click", function () {
        currentValue += 0.25;
        updateValue();
    });

    addHalfButton.addEventListener("click", function () {
        currentValue += 0.5;
        updateValue();
    });

    addthreeQuarterButton.addEventListener("click", function () {
        currentValue += 0.75;
        updateValue();
    });
	
	addoneButton.addEventListener("click", function () {
        currentValue += 1.0;
        updateValue();
    });
	addtwoButton.addEventListener("click", function () {
        currentValue += 2.0;
        updateValue();
    });
	addthreeButton.addEventListener("click", function () {
        currentValue += 3.0;
        updateValue();
    });

    function updateValue() {
        currentValueElement.innerText = currentValue.toFixed(2);
    }
});
