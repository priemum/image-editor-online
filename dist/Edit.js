"use strict";
const Edit = () => {
    const img = document.getElementById('output');
    const sepia = parseFloat(document.querySelector('#sepia').value);
    const bright = parseFloat(document.querySelector('#brightness').value);
    const contrast = parseFloat(document.querySelector('#contrast').value);
    const grayscale = parseFloat(document.querySelector('#grayscale').value);
    const saturation = parseFloat(document.querySelector('#saturation').value);
    const hue = parseFloat(document.querySelector('#hue').value);
    img.style.filter = `sepia(${sepia}%) brightness(${bright}%) contrast(${contrast}%) grayscale(${grayscale}%) saturate(${saturation}%) hue-rotate(${hue}deg)`;
};
