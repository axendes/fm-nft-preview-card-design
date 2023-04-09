"use strict";

const imageContainer = document.querySelector(".image-container");
const popup = document.querySelector(".popup-bg");

imageContainer.onclick = showHidePopup;
popup.onclick = showHidePopup;

function showHidePopup() {
    popup.classList.toggle("popup-open-state");
}