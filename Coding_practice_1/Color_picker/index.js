let colorPickerConainerElement = document.getElementById("colorPickerContainer");
let SelectedColorHexCodeElement = document.getElementById("selectedColorHex");

function changeBgToGrayAndUpdateText() {
    colorPickerConainerElement.style.backgroundColor = "#e0e0e0";
    SelectedColorHexCodeElement.textContent = "#e0e0e0";
}

function changeBgToGreenAndUpdateText() {
    colorPickerConainerElement.style.backgroundColor = "#6fcf97";
    SelectedColorHexCodeElement.textContent = "#6fcf97";
}

function changeBgToBlueAndUpdateText() {
    colorPickerConainerElement.style.backgroundColor = "#56ccf2";
    SelectedColorHexCodeElement.textContent = "#56ccf2";
}

function changeBgToPurpleAndUpdateText() {
    colorPickerConainerElement.style.backgroundColor = "#bb6bd9";
    SelectedColorHexCodeElement.textContent = "#bb6bd9";
}
