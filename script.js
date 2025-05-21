const container = document.getElementById;


fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.nomCommercial);
    console.log(data.phraseAccroche);


})


function data(produits) {
    console.log(data);
    document.createElement(data.nomCommercial);
    document.createElement(data.phraseAccroche);
    document.createElement(data.button);
}




















