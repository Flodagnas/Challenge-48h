


var link 
let request = new XMLHttpRequest(); {
request.open("GET","https://swapi.dev/api/films/1")
request.send();
request.onload = () => {
    link = JSON.parse(request.response).vehicles[0]
    console.log(link);


let request2 = new XMLHttpRequest();
request2.open("GET",link)
request2.send();
request2.onload = () => {
    var link2 = JSON.parse(request2.response).name
    console.log(link2);
}

}
}