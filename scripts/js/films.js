console.log("Script display loaded");

let linesInTab = [];
let pageNumero = 1;
let select = document.getElementById("nb-elem").value;

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
    const films = await fetch(
        `https://swapi.dev/api/films/?page=${page}`
    )
    .then((res) => res.json());
    pagination(films.results)
    loadTab(films.results);
};

const nextRes = () => {
    document.getElementById("tableau").querySelector("tbody").remove();
    pageNumero++;
    callJson(pageNumero);
};

const previousRes = () => {
    document.getElementById("tableau").querySelector("tbody").remove();
    pageNumero--;
    callJson(pageNumero);
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
    let vehicles = document.createElement("td");
    let tdstarships = document.createElement("td");

    // Contenus
    tdtitle.appendChild(document.createTextNode(people.title));
    tdopening_crawl.appendChild(document.createTextNode(people.opening_crawl));
    tddirector.appendChild(document.createTextNode(people.director));
    tdproducer.appendChild(document.createTextNode(people.producer));
    tdrelease_date.appendChild(document.createTextNode(people.release_date));
    tdcharacters.appendChild(document.createTextNode(people.characters));
    tdplanets.appendChild(document.createTextNode(people.planets));
    tdstarships.appendChild(document.createTextNode(people.starships));
    tdvehicles.appendChild(document.createTextNode(people.vehicles));
    tdspecies.appendChild(document.createTextNode(people.species));
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

// Pagination du tableau
function pagination() {
    let tbody = document.getElementById("elements");
    let lines = document.querySelectorAll(".line");
    lines.forEach((line) => {
        line.remove();
    });
    if (select === "") {
        for (let i = 0; i < linesInTab.length; i++) {
        tbody.appendChild(linesInTab[i]);
        }
    } else {
        let start = parseInt(pageNumero) * parseInt(select);
        let end = parseInt(start) + parseInt(select) - 1;
        let tri = linesInTab.slice(start, end);
        for (let line of tri) {
        tbody.appendChild(line);
        }
    }
}

// Boutons 'next' et 'previous' pour pagination
document.getElementsByName("previous")[0].addEventListener("click", () => {
    pageNumero -= 1;
    pagination();
});
document.getElementsByName("previous")[1].addEventListener("click", () => {
    pageNumero -= 1;
    pagination();
});
document.getElementsByName("next")[0].addEventListener("click", () => {
    pageNumero += 1;
    pagination();
});
document.getElementsByName("next")[1].addEventListener("click", () => {
    pageNumero += 1;
    pagination();
});

// Liste à choix pour pagination
document.getElementById("nb-elem").addEventListener("change", () => {
    select = document.getElementById("nb-elem").value;
    console.log(select);
    pagination();
});

callJson();
