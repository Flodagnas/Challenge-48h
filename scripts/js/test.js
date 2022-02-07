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

