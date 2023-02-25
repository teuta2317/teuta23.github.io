function loadHeader() {
    document.getElementById('header').className = 'header';
    document.getElementById('header').innerHTML = `
 
    <div class="header">
    <a href="../index.html" class="">Acasă</a>
    <a href="../pages/desprenoi.html" class="">Despre noi</a>
    <a href="../pages/galerie.html" class="">Galerie</a>
    <a href="../pages/produse.html" class="">Produse</a>
    
    </div>
    `
}

function loadElements() {
    loadHeader();
}

window.onload = loadElements;



function nume(gtr) {
    console.log('HELLO', nume)
}
