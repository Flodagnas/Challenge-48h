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

async function buffedFetch(obj, property){
    var link1 = new Array()
    var link2 = new Array()
    var result = new Array()
    var result2 = new Array
    //console.log(obj[5][property][0]);
    for (let j=0; j<6; j++){ 
        link1 = obj[j][property];
        for (let i = 0; i <link1.length; i++ ){
        //console.log("j=", j,"i=", i, link1[i]);
        link2 = link1[i]
        //console.log("link2", link2);
        let response = await fetch(link2);
        let response1 = await response.json();
          //console.log("f", response.name, "t", typeof response.name);
        result[i] = response1.name 
        //console.log("j=",j, 'i=',i, response1.name);
        //console.log(result2)
        result2[j] = result
        }   
        result = []
      }      
     return result2;
};

// Chargement du JSON et des fonctions associées
const callJson = async (page = pageNumero) => {
    while (page != 2) {
      const films = await fetch(`https://swapi.dev/api/films/?page=${page}`)
      .then((res) => res.json());
      loadTab(films.results);
      page += 1
      /*console.log((films.results));*/
    species = await buffedFetch(films.results, "species")
     console.log("species", species);
     planets = await buffedFetch(films.results, "planets")
     console.log("planets", planets);
      vehicles = await buffedFetch(films.results, "vehicles")
     console.log("vehicles", vehicles);
     starships = await buffedFetch(films.results, "starships")
     console.log("starships", starships);
      /*console.log(buffedFetch(films.results, 'planets').then);
      console.log(buffedFetch(films.results, 'vehicles').then);
      console.log(buffedFetch(films.results, 'starships').then;
      console.log(buffedFetch(films.results, 'people'));*/
      /*=for (var j=0; j<6; j++){ 
      link1 = films.results[j].species;
      for (var i = 0; i < link1.length; i++ ){
      link2 = link1[i]
      fetch(link2).then(response =>{
          return response.json()
      }).then(response =>{
        console.log(response.name);
      })
      }
    }*/
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
