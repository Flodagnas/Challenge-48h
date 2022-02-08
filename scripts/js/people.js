console.log("Script display loaded");

let linesInTab = [];
let pageNumero = 1;

// Traitement du tableu de données
const loadTab = (persoes) => {
    const table = document.getElementById("tableau");
    const tbody = document.createElement("tbody");
    persoes.forEach((perso) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${perso.name}</td>`;
        tr.innerHTML += `<td>${perso.height}</td>`;
        tr.innerHTML += `<td>${perso.mass}</td>`;
        tr.innerHTML += `<td>${perso.hair_color}</td>`;
        tr.innerHTML += `<td>${perso.skin_color}</td>`;
        tr.innerHTML += `<td>${perso.eye_color}</td>`;
        tr.innerHTML += `<td>${perso.birth_year}</td>`;
        tr.innerHTML += `<td>${perso.gender}</td>`;
        tr.innerHTML += `<td>${perso.homeworld}</td>`;
        tr.innerHTML += `<td>${perso.films}</td>`;
        tr.innerHTML += `<td>${perso.species}</td>`;
        tr.innerHTML += `<td>${perso.vehicles}</td>`;
        tr.innerHTML += `<td>${perso.starships}</td>`;
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
};

// Chargement du JSON et des fonctions associées
const callJson = async (page = pageNumero) => {
    while (page != 10) {
      const people = await fetch(`https://swapi.dev/api/people/?page=${page}`)
      .then((res) => res.json());
      loadTab(people.results);
      page += 1
    }
};

const callJson2 = async (page = pageNumero) => {
    const planets = await fetch(
        `https://swapi.dev/api/planets/?page=${page}`
    )
    .then((res) => res.json());
    loadTab(planets.results);
};

// Création et affichage des lignes du tableau
function makeLine(perso) {
    let tbody = document.getElementById("elements");
    let tr = document.createElement("tr");
    tr.classList.add("line");

    // Colonnes
    let tdName = document.createElement("td");
    let tdheight = document.createElement("td");
    let tdmass = document.createElement("td");
    let tdhair_color = document.createElement("td");
    let tdskin_color = document.createElement("td");
    let tdeye_color = document.createElement("td");
    let tdbirth_year = document.createElement("td");
    let tdgender = document.createElement("td");
    let tdhomeworld = document.createElement("td");
    let tdfilms = document.createElement("td");
    let tdspecies = document.createElement("td");
    let tdvehicles = document.createElement("td");
    let tdstarships = document.createElement("td");


    // Contenus
    tdName.appendChild(document.createTextNode(people.name));
    tdheight.appendChild(document.createTextNode(people.height));
    tdmass.appendChild(document.createTextNode(people.mass));
    tdhair_color.appendChild(document.createTextNode(people.hair_color));
    tdskin_color.appendChild(document.createTextNode(people.skin_color));
    tdeye_color.appendChild(document.createTextNode(people.eye_color));
    tdbirth_year.appendChild(document.createTextNode(people.birth_year));
    tdgender.appendChild(document.createTextNode(people.gender));
    tdhomeworld.appendChild(document.createTextNode(planets.name));
    tdfilms.appendChild(document.createTextNode(people.films));
    tdspecies.appendChild(document.createTextNode(people.species));
    tdvehicles.appendChild(document.createTextNode(people.vehicles));
    tdstarships.appendChild(document.createTextNode(people.starships));
    tr.appendChild(tdName);
    tr.appendChild(tdheight);
    tr.appendChild(tdmass);
    tr.appendChild(tdhair_color);
    tr.appendChild(tdskin_color);
    tr.appendChild(tdeye_color);
    tr.appendChild(tdbirth_year);
    tr.appendChild(tdgender);
    tr.appendChild(tdhomeworld);
    tr.appendChild(tdfilms);
    tr.appendChild(tdspecies);
    tr.appendChild(tdvehicles);
    tr.appendChild(tdstarships);

    tabLines.push(tr);
    tbody.appendChild(tr);
}

callJson();
