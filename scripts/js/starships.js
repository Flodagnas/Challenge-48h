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
        tr.innerHTML += `<td>${perso.model}</td>`;
        tr.innerHTML += `<td>${perso.manufacturer}</td>`;
        tr.innerHTML += `<td>${perso.cost_in_credits}</td>`;
        tr.innerHTML += `<td>${perso.length}</td>`;
        tr.innerHTML += `<td>${perso.max_atmosphering_speed}</td>`;
        tr.innerHTML += `<td>${perso.crew}</td>`;
        tr.innerHTML += `<td>${perso.passengers}</td>`;
        tr.innerHTML += `<td>${perso.cargo_capacity}</td>`;
        tr.innerHTML += `<td>${perso.consumables}</td>`;
        tr.innerHTML += `<td>${perso.hyperdrive_rating}</td>`;
        tr.innerHTML += `<td>${perso.mglt}</td>`;
        tr.innerHTML += `<td>${perso.starship_class}</td>`;
        tr.innerHTML += `<td>${perso.pilots}</td>`;
        tr.innerHTML += `<td>${perso.films}</td>`;
        tr.innerHTML += `<td>${perso.created}</td>`;
        tr.innerHTML += `<td>${perso.edited}</td>`;
        tr.innerHTML += `<td>${perso.url}</td>`;
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
};

// Chargement du JSON et des fonctions associées
const callJson = async (page = pageNumero) => {
  while (page != 5) {
    const starships = await fetch(`https://swapi.dev/api/starships/?page=${page}`)
    .then((res) => res.json());
    loadTab(starships.results);
    page += 1
  }
};

// Création et affichage des lignes du tableau
function makeLine(perso) {
    let tbody = document.getElementById("elements");
    let tr = document.createElement("tr");
    tr.classList.add("line");

    // Colonnes
    let tdname = document.createElement("td");
    let tdmodel = document.createElement("td");
    let tdmanufacturer = document.createElement("td");
    let tdcost_in_credits = document.createElement("td");
    let tdlength = document.createElement("td");
    let tdmax_atmosphering_speed = document.createElement("td");
    let tdcrew = document.createElement("td");
    let tdpassengers = document.createElement("td");
    let tdcargo_capacity = document.createElement("td");
    let tdconsumables = document.createElement("td");
    let tdhyperdrive_rating = document.createElement("td");
    let tdmglt = document.createElement("td");
    let tdstarship_class = document.createElement("td");
    let tdpilots = document.createElement("td");
    let tdfilms = document.createElement("td");
    let tdcreated = document.createElement("td");
    let tdedited = document.createElement("td");
    let tdurl = document.createElement("td");
    // Contenus
    tdname.appendChild(document.createTextNode(starships.name));
    tdmodel.appendChild(document.createTextNode(starship.model));
    tdmanufacturer.appendChild(document.createTextNode(starships.manufacturer));
    tdcost_in_credits.appendChild(document.createTextNode(starships.cost_in_credits));
    tdlength.appendChild(document.createTextNode(starships.length));
    tdmax_atmosphering_speed.appendChild(document.createTextNode(starships.max_atmosphering_speed));
    tdcrew.appendChild(document.createTextNode(starships.crew));
    tdpassengers.appendChild(document.createTextNode(starships.passengers));
    tdcargo_capacity.appendChild(document.createTextNode(starships.cargo_capacity));
    tdconsumables.appendChild(document.createTextNode(starships.consumables));
    tdhyperdrive_rating.appendChild(document.createTextNode(starships.hyperdrive_rating));
    tdmglt.appendChild(document.createTextNode(starships.mglt));
    tdstarship_class.appendChild(document.createTextNode(starship.starship_class));
    tdpilots.appendChild(document.createTextNode(starships.pilots));
    tdfilms.appendChild(document.createTextNode(starships.films));
    tdcreated.appendChild(document.createTextNode(starships.created));
    tdedites.appendChild(document.createTextNode(starships.edited));
    tdurl.appendChild(document.createTextNode(starships.url));
    tr.appendChild(tdname);
    tr.appendChild(tdmodel);
    tr.appendChild(tdmanufacturer);
    tr.appendChild(tdcost_in_credits);
    tr.appendChild(tdlength);
    tr.appendChild(tdmax_atmosphering_speed);
    tr.appendChild(tdcrew);
    tr.appendChild(tdpassengers);
    tr.appendChild(tdcargo_capacity);
    tr.appendChild(tdconsumables);
    tr.appendChild(tdhyperdrive_rating);
    tr.appendChild(tdmglt);
    tr.appendChild(tdstarship_class);
    tr.appendChild(tdpilots);
    tr.appendChild(tdfilms);
    tr.appendChild(tdcreated);
    tr.appendChild(tdedited);
    tr.appendChild(tdurl);

    tabLines.push(tr);
    tbody.appendChild(tr);
}

callJson();
