async function getNoticias(){
    let resposta = await fetch('http://newsapi.org/v2/top-headlines?apiKey=8725218afcf646439082421b27906a47&country=br&category=technology')
    
    let noticias = await resposta.json();
    console.log(noticias.articles);
    let listaNoticias = document.querySelector('#listaDeNoticias');

    for(let i = 0; i < noticias.articles.length; i++){
        let noticia = noticias.articles[i];

        let card = `
        <div class="col-3">
        <div class="card">
            <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${noticia.title}</h5>
            <p class="card-text">${noticia.description}</p>
            <a href="${noticia.url}" class="btn btn-primary">Ver Noticia</a>
            </div>
        </div>
        </div> `;

        listaNoticias.innerHTML += card;
        


    }
}
getNoticias();




