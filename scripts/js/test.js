console.log("Script display loaded");

people = people.slice(1, people.length - 1).split("  ");

let linesInTab = [];
let pageNumero = 1;
let select = document.getElementById("nb-elem").value;

// Traitement du tableu de données
const loadTab = (persoes) => {
  const table = document.getElementById("tableau");
  const tbody = document.createElement("tbody");
  persoes.forEach((perso) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${perso.name}</td>`;
    tr.innerHTML += `<td>${perso.height}</td>`;
    tr.innerHTML += `<td>${perso.mass}</td>`;
    tr.innerHTML += `<td>${perso.race}</td>`;
    tr.innerHTML += `<td>${perso.hair_color}</td>`;
    tr.innerHTML += `<td>${perso.skin_color}</td>`;
    tr.innerHTML += `<td>${perso.eye_color}</td>`;
    tr.innerHTML += `<td>${perso.birth_year}</td>`;
    tr.innerHTML += `<td>${perso.gender}</td>`;
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
};

// Chargement du JSON et des fonctions associées
const callJson = async (page = pageNumero) => {
  const peoples = await fetch(
    `https://swapi.dev/api/people/?page=${page}`
  ).then((res) => res.json());
  loadTab(peoples.results);
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
  let tdName = document.createElement("td");
  let tdheight = document.createElement("td");
  let tdmass = document.createElement("td");
  let tdrace = document.createElement("td");
  let tdhair_color = document.createElement("td");
  let tdskin_color = document.createElement("td");
  let tdeye_color = document.createElement("td");
  let tdbirth_year = document.createElement("td");
  let tdgender = document.createElement("td");

  // Contenus
  tdName.appendChild(document.createTextNode(people.name));
  tdheight.appendChild(document.createTextNode(people.height));
  tdmass.appendChild(document.createTextNode(people.mass));
  tdrace.appendChild(document.createTextNode(people.race));
  tdhair_color.appendChild(document.createTextNode(people.hair_color));
  tdskin_color.appendChild(document.createTextNode(people.skin_color));
  tdeye_color.appendChild(document.createTextNode(people.eye_color));
  tdbirth_year.appendChild(document.createTextNode(people.birth_year));
  tdgender.appendChild(document.createTextNode(people.alignment));
  tr.appendChild(tdName);
  tr.appendChild(tdheight);
  tr.appendChild(tdmass);
  tr.appendChild(tdrace);
  tr.appendChild(tdhair_color);
  tr.appendChild(tdskin_color);
  tr.appendChild(tdeye_color);
  tr.appendChild(tdbirth_year);
  tr.appendChild(tdgender);

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
