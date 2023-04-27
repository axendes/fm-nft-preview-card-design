"use strict";

const showTrigger = document.querySelector(".content__img-wrapper");

showTrigger.onclick = showEthereum;

function showEthereum() {
    const image = showTrigger.querySelector(".content__img");
    const clone = image.cloneNode(false);
    const wrapper = document.createElement("div");

    wrapper.onclick = () => {
        hideEthereum(wrapper);
    };

    clone.classList.remove("content__img");
    clone.classList.add("enlarged-eth__eth-img");

    wrapper.classList.add("enlarged-eth");
    wrapper.appendChild(clone);

    document.body.insertBefore(wrapper, document.body.firstChild);
}

function hideEthereum(e) {
    document.body.removeChild(e);
}