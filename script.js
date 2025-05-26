// 💻📝 Rendu final JS – Génération d'un site web dynamique à partir des données d'une API
// Objectif : utilisation de fetch() pour récupérer des données JSON, manipulation DOM, boucles, gestion d'images et cartes interactives.
// 🟢 Niveau 1 – Récupérer les données de l'API
// Utilise fetch() pour récupérer les données JSON depuis l'API https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/.
// Tu as le choix du sujet, donc clique bien sur le sujet de ton choix pour avoir l'URL finale.
// Vérifie si la réponse de l'API est correcte. Si oui, passe les données à une fonction qui affichera le contenu du site.
// 🟡 Niveau 2 – Affichage du contenu principal
// Dans la fonction, crée un élément div pour afficher le nom de l'entreprise, sa phrase d'accroche et un bouton d'appel à l'action.
// Affiche ces informations dynamiquement avec les données récupérées depuis l'API.
// 🔴 Niveau 3 – Afficher les activités
// Pour chaque activité dans les données JSON, crée dynamiquement une div contenant un titre, une description et une image.
// Affiche ces informations dans une section dédiée, avec une carte pour chaque activité si les données contiennent un lien vers une image.
// 🔴🔴 Niveau 4 – Afficher les témoignages
// Pour chaque témoignage dans les données JSON, crée dynamiquement une div contenant le prénom, le commentaire.
// Ajoute ces témoignages sous les activités dans la page.
// 🔴🔴🔴 Niveau 5 (optionnel) – Ajouter une carte interactive
// Ajoute une carte interactive à la page à l’aide de la bibliothèque Leaflet.js.
// Utilise les coordonnées fournies dans les données JSON pour centrer la carte et y ajouter un fond de carte interactif.
// 💎 Bonus – Design et personnalisation
// Fonts personnalisées : Ajoute des fonts depuis Google Fonts
// Icônes : Utilise une bibliothèque comme Font Awesome ou Material Icons
// Favicon personnalisé : via balise <link rel="icon" ...>
// Design : styles CSS avec couleurs, espaces, ombres, transitions, animations légères


// 🟢 Niveau 1 – Récupérer les données de l'API
// Utilise fetch() pour récupérer les données JSON depuis l'API https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/.


fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json')
    .then(response => response.json()) // transforme la réponse en JSON
    .then(data => {
        // Vérifie si la réponse de l'API est correcte. Si oui, passe les données à une fonction qui affichera le contenu du site.
        // ici on utilise les données reçues
        // 🟡 Niveau 2 – Affichage du contenu principal 
        // Dans la fonction, crée un élément div pour afficher le nom de l'entreprise, sa phrase d'accroche et un bouton d'appel à l'action.
        let div = document.createElement("div")
        document.body.insertBefore(div, document.body.firstChild);


        // avec textContent
        // creer un h1 create element
        let h1 = document.createElement("h1");
        // lui mettre du contenu (data.nomCommercial) div.innerHTML  // div.textContent 
        h1.textContent = data.nomCommercial;
        console.log(h1);
        // mettre le h1 dans la div
        div.append(h1);

        // creer un p create element
        let p = document.createElement("p");
        // lui mettre du contenu (data.phraseAccroche) p.textContent
        p.textContent = data.phraseAccroche;
        console.log(p);
        // mettre le p dans la div
        div.append(p);

        // creer un button create element
        let button = document.createElement("button");
        // lui mettre du contenu (data.texteAppelAction) button.textContent
        button.textContent = data.texteAppelAction;
        console.log(button);
        // mettre le button dans la div
        div.append(button);


        let ContainerProduit = document.getElementById("ContainerProduit");
        let produits = data.produits;

        produits.forEach(element => {
            let card = document.createElement(div);
            let titre = document.createElement(h3);
            let para = document.createElement(p);
            let image = document.createElement(img);
                //injecter les données dans les éléments 
                InjectJsScript






        });



    })
    .catch(error => {
        // ici on gère les erreurs
        console.error('Erreur lors du fetch :', error);
    });





















