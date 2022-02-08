console.log("Script display loaded");

let linesInTab = [];
let pageNumero = 1;

// Traitement du tableu de données
const loadTab = (persoes) => {
    const table = document.getElementById("tableau");
    const tbody = document.createElement("tbody");
    persoes.forEach((perso) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${perso.title}</td>`;
        tr.innerHTML += `<td>${perso.opening_crawl}</td>`;
        tr.innerHTML += `<td>${perso.director}</td>`;
        tr.innerHTML += `<td>${perso.producer}</td>`;
        tr.innerHTML += `<td>${perso.release_date}</td>`;
        tr.innerHTML += `<td>${perso.characters}</td>`;
        tr.innerHTML += `<td>${perso.planets}</td>`;
        tr.innerHTML += `<td>${perso.starships}</td>`;
        tr.innerHTML += `<td>${perso.vehicles}</td>`;
        tr.innerHTML += `<td>${perso.species}</td>`;
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
};

// Chargement du JSON et des fonctions associées
const callJson = async (page = pageNumero) => {
    while (page != 2) {
      const films = await fetch(`https://swapi.dev/api/films/?page=${page}`)
      .then((res) => res.json());
      loadTab(films.results);
      page += 1
      link1 = films.results[0].species[0] ;
    }
};

// Création et affichage des lignes du tableau
function makeLine(perso) {
    let tbody = document.getElementById("elements");
    let tr = document.createElement("tr");
    tr.classList.add("line");

    // Colonnes
    let tdtitle = document.createElement("td");
    let tdopening_crawl = document.createElement("td");
    let tddirector = document.createElement("td");
    let tdproducer = document.createElement("td");
    let tdrelease_date = document.createElement("td");
    let tdcharacters = document.createElement("td");
    let tdplanets = document.createElement("td");
    let tdstarships = document.createElement("td");
    let tdvehicles = document.createElement("td");
    let tdspecies = document.createElement("td");

    // Contenus
    tdtitle.appendChild(document.createTextNode(films.title));
    tdopening_crawl.appendChild(document.createTextNode(films.opening_crawl));
    tddirector.appendChild(document.createTextNode(films.director));
    tdproducer.appendChild(document.createTextNode(films.producer));
    tdrelease_date.appendChild(document.createTextNode(films.release_date));
    tdcharacters.appendChild(document.createTextNode(films.characters));
    tdplanets.appendChild(document.createTextNode(films.planets));
    tdstarships.appendChild(document.createTextNode(films.starships));
    tdvehicles.appendChild(document.createTextNode(films.vehicles));
    tdspecies.appendChild(document.createTextNode(films.species));
    tr.appendChild(tdtitle);
    tr.appendChild(tdopening_crawl);
    tr.appendChild(tddirector);
    tr.appendChild(tdproducer);
    tr.appendChild(tdrelease_date);
    tr.appendChild(tdcharacters);
    tr.appendChild(tdplanets);
    tr.appendChild(tdstarships);
    tr.appendChild(tdvehicles);
    tr.appendChild(tdspecies);

    tabLines.push(tr);
    tbody.appendChild(tr);
}

callJson();
