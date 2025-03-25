//your JS code here. If required.
function updateWindowSize() {
const width = window.innerWidth;
const height = window.innerHeight;
document.getElementById('width').textContent = width;
document.getElementById('height').textContent = height;
 }
window.addEventListener('resize', updateWindowSize);
updateWindowSize();