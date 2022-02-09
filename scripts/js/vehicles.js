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
        tr.innerHTML += `<td>${perso.vehicle_class}</td>`;
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
      const vehicles = await fetch(`https://swapi.dev/api/vehicles/?page=${page}`)
      .then((res) => res.json());
      loadTab(vehicles.results);
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
    let tdvehicle_class = document.createElement("td");
    let tdpilots = document.createElement("td");
    let tdfilms = document.createElement("td");
    let tdcreated = document.createElement("td");
    let tdedited = document.createElement("td");
    let tdurl = document.createElement("td");
    // Contenus
    tdname.appendChild(document.createTextNode(vehicles.name));
    tdmodel.appendChild(document.createTextNode(vehicles.model));
    tdmanufacturer.appendChild(document.createTextNode(vehicles.manufacturer));
    tdcost_in_credits.appendChild(document.createTextNode(vehicles.cost_in_credits));
    tdlength.appendChild(document.createTextNode(vehicles.length));
    tdmax_atmosphering_speed.appendChild(document.createTextNode(vehicles.max_atmosphering_speed));
    tdcrew.appendChild(document.createTextNode(vehicles.crew));
    tdpassengers.appendChild(document.createTextNode(vehicles.passengers));
    tdcargo_capacity.appendChild(document.createTextNode(vehicles.cargo_capacity));
    tdconsumables.appendChild(document.createTextNode(vehicles.consumables));
    tdvehicle_class.appendChild(document.createTextNode(vehicles.vehicle_class));
    tdpilots.appendChild(document.createTextNode(vehicles.pilots));
    tdfilms.appendChild(document.createTextNode(vehicles.films));
    tdcreated.appendChild(document.createTextNode(vehicles.created));
    tdedites.appendChild(document.createTextNode(vehicles.edited));
    tdurl.appendChild(document.createTextNode(vehicles.url));
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
    tr.appendChild(tdvehicle_class);
    tr.appendChild(tdpilots);
    tr.appendChild(tdfilms);
    tr.appendChild(tdcreated);
    tr.appendChild(tdedited);
    tr.appendChild(tdurl);

    tabLines.push(tr);
    tbody.appendChild(tr);
}

callJson();
