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
    tr.innerHTML += `<td>${perso.classification}</td>`;
    tr.innerHTML += `<td>${perso.designation}</td>`;
    tr.innerHTML += `<td>${perso.average_height}</td>`;
    tr.innerHTML += `<td>${perso.skin_colors}</td>`;
    tr.innerHTML += `<td>${perso.hair_colors}</td>`;
    tr.innerHTML += `<td>${perso.eye_colors}</td>`;
    tr.innerHTML += `<td>${perso.average_lifespan}</td>`;
    tr.innerHTML += `<td>${perso.homeworld}</td>`;
    tr.innerHTML += `<td>${perso.language}</td>`;
    tr.innerHTML += `<td>${perso.people}</td>`;
    tr.innerHTML += `<td>${perso.films}</td>`;
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
};

// Chargement du JSON et des fonctions associées
const callJson = async (page = pageNumero) => {
    const species = await fetch(
        `https://swapi.dev/api/species/?page=${page}`
    )
    .then((res) => res.json());
    loadTab(species.results);
};

// Création et affichage des lignes du tableau
function makeLine(perso) {
  let tbody = document.getElementById("elements");
  let tr = document.createElement("tr");
  tr.classList.add("line");

  // Colonnes
  let tdName = document.createElement("td");
  let tdclassification = document.createElement("td");
  let tddesignation = document.createElement("td");
  let tdaverage_height = document.createElement("td");
  let tdskin_colors = document.createElement("td");
  let tdhair_colors = document.createElement("td");
  let tdeye_colors = document.createElement("td");
  let tdaverage_lifespan = document.createElement("td");
  let tdhomeworld = document.createElement("td");
  let tdlanguage = document.createElement("td");
  let tdpeople = document.createElement("td");
  let tdfilms = document.createElement("td");

  // Contenus
  tdName.appendChild(document.createTextNode(films.name));
  tdclassification.appendChild(document.createTextNode(films.classification));
  tddesignation.appendChild(document.createTextNode(films.designation));
  tdaverage_height.appendChild(document.createTextNode(films.average_height));
  tdskin_colors.appendChild(document.createTextNode(films.skin_colors));
  tdhair_colors.appendChild(document.createTextNode(films.hair_colors));
  tdeye_colors.appendChild(document.createTextNode(films.eye_colors));
  tdaverage_lifespan.appendChild(document.createTextNode(films.average_lifespan));
  tdhomeworld.appendChild(document.createTextNode(films.homeworld));
  tdlanguage.appendChild(document.createTextNode(films.language));
  tdpeople.appendChild(document.createTextNode(films.people));
  tdfilms.appendChild(document.createTextNode(films.films));
  tr.appendChild(tdName);
  tr.appendChild(tdclassification);
  tr.appendChild(tddesignation);
  tr.appendChild(tdaverage_height);
  tr.appendChild(tdskin_colors);
  tr.appendChild(tdhair_colors);
  tr.appendChild(tdeye_colors);
  tr.appendChild(tdaverage_lifespan);
  tr.appendChild(tdhomeworld);
  tr.appendChild(tdlanguage);
  tr.appendChild(tdpeople);
  tr.appendChild(tdfilms);

  tabLines.push(tr);
  tbody.appendChild(tr);
}

callJson();
