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
    tr.innerHTML += `<td>${perso.rotation_period}</td>`;
    tr.innerHTML += `<td>${perso.orbital_period}</td>`;
    tr.innerHTML += `<td>${perso.diameter}</td>`;
    tr.innerHTML += `<td>${perso.climate}</td>`;
    tr.innerHTML += `<td>${perso.gravity}</td>`;
    tr.innerHTML += `<td>${perso.terrain}</td>`;
    tr.innerHTML += `<td>${perso.surface_water}</td>`;
    tr.innerHTML += `<td>${perso.population}</td>`;
    tr.innerHTML += `<td>${perso.created}</td>`;
    tr.innerHTML += `<td>${perso.edited}</td>`;
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
};

// Chargement du JSON et des fonctions associées
const callJson = async (page = pageNumero) => {
  while (page != 7) {
    const planets = await fetch(`https://swapi.dev/api/planets/?page=${page}`)
    .then((res) => res.json());
    loadTab(planets.results);
    page += 1
  }
};

// Création et affichage des lignes du tableau
function makeLine(perso) {
  let tbody = document.getElementById("elements");
  let tr = document.createElement("tr");
  tr.classList.add("line");

  // Colonnes
  let tdName = document.createElement("td");
  let tdrotation_period = document.createElement("td");
  let tdorbital_period = document.createElement("td");
  let tddiameter = document.createElement("td");
  let tdclimate = document.createElement("td");
  let tdgravity = document.createElement("td");
  let tdterrain = document.createElement("td");
  let tdsurface_water = document.createElement("td");
  let tdpopulation = document.createElement("td");
  let tdcreated = document.createElement("td");
  let tdedited = document.createElement("td");

  // Contenus
  tdName.appendChild(document.createTextNode(people.name));
  tdrotation_period.appendChild(document.createTextNode(people.rotation_period));
  tdorbital_period.appendChild(document.createTextNode(people.orbital_period));
  tddiameter.appendChild(document.createTextNode(people.diameter));
  tdclimate.appendChild(document.createTextNode(people.climate));
  tdgravity.appendChild(document.createTextNode(people.gravity));
  tdterrain.appendChild(document.createTextNode(people.terrain));
  tdsurface_water.appendChild(document.createTextNode(people.surface_water));
  tdpopulation.appendChild(document.createTextNode(people.population));
  tdcreated.appendChild(document.createTextNode(people.created));
  tdedited.appendChild(document.createTextNode(people.edited));
  tr.appendChild(tdName);
  tr.appendChild(tdrotation_period);
  tr.appendChild(tdorbital_period);
  tr.appendChild(tddiameter);
  tr.appendChild(tdclimate);
  tr.appendChild(tdgravity);
  tr.appendChild(tdterrain);
  tr.appendChild(tdsurface_water);
  tr.appendChild(tdpopulation);
  tr.appendChild(tdcreated);
  tr.appendChild(tdedited);

  tabLines.push(tr);
  tbody.appendChild(tr);
}

callJson();
