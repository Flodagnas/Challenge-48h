console.log("Script display loaded")

let linesInTab = []
let pageNumero = 0
let select = document.getElementById('nb-elem').value

callJson()

// Traitement du tableu de données
function loadTab(persoes) {
    deleteLines()

    for (let i in persoes) {
        let perso = persoes[i]
        if (search != "") {
            if (eval('perso.' + searchSelect + '.includes(search)')) {
                makeLine(perso)
            }
        } else {
            makeLine(perso)
        }
    }
}

// Chargement du JSON et des fonctions associées
function callJson() {
    fetch('https://swapi.dev/api/people')
    .then((response) => response.json()) // parse the response from JSON
    .then(loadTab) // .then will call the function with the JSON value
    .then(() => {
        linesInTab = []
        document.querySelectorAll('.line').forEach(tr => {
            linesInTab.push(tr)
        })
    })
    .then(pagination)
}

// Création et affichage des lignes du tableau
function makeLine(perso) {
    let tbody = document.getElementById('elements')
    let tr = document.createElement('tr')
    tr.classList.add('line')

    // Colonnes
    let tdName = document.createElement('td')
    let tdheight = document.createElement('td')
    let tdmass = document.createElement('td')
    let tdhair_color = document.createElement('td')
    let tdskin_color = document.createElement('td')
    let tdeye_color = document.createElement('td')
    let tdbirth_year = document.createElement('td')
    let tdgender = document.createElement('td')

    // Contenus
    tdName.appendChild(document.createTextNode(perso.name))
    tdheight.appendChild(document.createTextNode(perso.biography.height))
    tdmass.appendChild(document.createTextNode(perso.appearance.mass))
    tdhair_color.appendChild(document.createTextNode(perso.appearance.hair_color))
    tdskin_color.appendChild(document.createTextNode(perso.appearance.skin_color))
    tdeye_color.appendChild(document.createTextNode(perso.appearance.eye_color))
    tdbirth_year.appendChild(document.createTextNode(perso.biography.birth_year))
    tdgender.appendChild(document.createTextNode(perso.biography.alignment))
    tr.appendChild(tdName); tr.appendChild(tdheight); tr.appendChild(tdmass); tr.appendChild(tdhair_color); tr.appendChild(tdskin_color); tr.appendChild(tdeye_color); tr.appendChild(tdbirth_year); tr.appendChild(tdgender)

    tabLines.push(tr)
    tbody.appendChild(tr)   
    
}

// Pagination du tableau
function pagination() {
    
    let tbody = document.getElementById('elements')
    let lines = document.querySelectorAll('.line')
    lines.forEach(line => {
        line.remove()
    })
    if (select === "") {
        for (let i = 0; i < linesInTab.length; i++) {
            tbody.appendChild(linesInTab[i])
        }
    } else {
        let start = parseInt(pageNumero) * parseInt(select)
        let end = parseInt(start) + parseInt(select) - 1
        let tri = linesInTab.slice(start, end)
        for (let line of tri) {
            tbody.appendChild(line)
        }  
    }
}

// Boutons 'next' et 'previous' pour pagination
document.getElementsByName('previous')[0].addEventListener('click', () => {
    pageNumero -= 1
    pagination()
})
document.getElementsByName('previous')[1].addEventListener('click', () => {
    pageNumero -= 1
    pagination()
})
document.getElementsByName('next')[0].addEventListener('click', () => {
    pageNumero += 1
    pagination()
})
document.getElementsByName('next')[1].addEventListener('click', () => {
    pageNumero += 1
    pagination()
})

// Liste à choix pour pagination
document.getElementById('nb-elem').addEventListener('change', () => {
    select = document.getElementById('nb-elem').value
    console.log(select)
    pagination()
})