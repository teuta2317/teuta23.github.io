
const list = [
    'buchet.jpg',
    'fructe.jpg',
    'cana.jpg',
    'set.jpg',
    'seara.jpg',
    'lada.jpg',
    'ceai.jpg',
    'fondarea.jpg',
    'pisica.jpg',
    'F.jpg',
    'c.jpg',
    'ca.jpg',
];

function closeW(e) {
    console.log('wtf')
    document.getElementById('popup').style.display = 'none';
}

function openImage(index) {
    document.getElementById('bgimage').src = `../imgs/${list[index]}`;
    document.getElementById('popup').style.display = 'flex';
}


window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('gallery').innerHTML = list.map((image, index) => `<div onclick="openImage(${index})" class="card" style="background-image: url(../imgs/${image});"></div>`).join('');
});
