const books = [
    {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "assets/things-fall-apart.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
    },
    {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "imageLink": "assets/fairy-tales.jpg",
        "language": "Danish",
        "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
    },
    {
        "author": "Dante Alighieri",
        "country": "Italy",
        "imageLink": "assets/the-divine-comedy.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315
    },
    {
        "author": "Unknown",
        "country": "Sumer and Akkadian Empire",
        "imageLink": "assets/the-epic-of-gilgamesh.jpg",
        "language": "Akkadian",
        "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        "pages": 160,
        "title": "The Epic Of Gilgamesh",
        "year": -1700
    },
    {
        "author": "Unknown",
        "country": "Achaemenid Empire",
        "imageLink": "assets/the-book-of-job.jpg",
        "language": "Hebrew",
        "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
        "pages": 176,
        "title": "The Book Of Job",
        "year": -600
    }]

    const principal = document.createElement("main");
    const seccion = document.createElement("section");
    principal.appendChild(seccion);

    const cuerpo = document.querySelector("body");
    cuerpo.appendChild(principal);

    const faldon = document.querySelector("footer");
    document.querySelector("footer").insertBefore(principal, faldon);
function writeCards() {

    
    for (let i = 0; i < books.length; i++) {

        const art = document.createElement("article");
        let encabezado = document.createElement("h3");
        encabezado.innerHTML = "Author: " + books[i].author;
        art.appendChild(encabezado);
        let pais = document.createElement("p");
        pais.innerHTML = "Country: " + books[i].country;
        art.appendChild(pais);
        let imagen = document.createElement("img");
        imagen.src = books[i].imageLink;
        art.appendChild(imagen)
        let idioma = document.createElement("p");
        idioma.innerHTML = "Language: " + books[i].language;
        art.appendChild(idioma);
        let enlace = document.createElement("a");
        let textoEnlace = document.createTextNode("Enlace a Wikipedia");
        enlace.appendChild(textoEnlace);
        enlace.title = books[i].link;
        enlace.href = books[i].link;
        enlace.target = "_blank";
        art.appendChild(enlace);
        let paginas = document.createElement("p");
        paginas.innerHTML = "Pages: " + books[i].pages;
        art.appendChild(paginas);
        let titulo = document.createElement("p");
        titulo.innerHTML = "Title: " + books[i].title;
        art.appendChild(titulo);
        let año = document.createElement("p");
        año.innerHTML = "Year: " + books[i].year;
        art.appendChild(año);

        seccion.appendChild(art);

    }

    
    //const faldon = document.querySelector("footer");
    //principal.insertBefore(principal, faldon);

}




