package main

import (
	data "./data"
	"html/template"
	"net/http"
)

var home *template.Template
var people *template.Template
/*var planets *template.Template
var films *template.Template
var species *template.Template
var vehicles *template.Template
var starships *template.Template*/

func People(w http.ResponseWriter, r *http.Request) {
	apiData := data.PeopleData()
	people.Execute(w, apiData)
}

/*func Planets(w http.ResponseWriter, r *http.Request) {
	planets.Execute(w, nil)
}

func Films(w http.ResponseWriter, r *http.Request) {
	films.Execute(w, nil)
}

func Species(w http.ResponseWriter, r *http.Request) {
	species.Execute(w, nil)
}

func Vehicles(w http.ResponseWriter, r *http.Request) {
	vehicles.Execute(w, nil)
}

func Starships(w http.ResponseWriter, r *http.Request) {
	starships.Execute(w, nil)
}*/

func Home(w http.ResponseWriter, r *http.Request) {
	home.Execute(w, nil)
}

func main() {
	people = template.Must(template.ParseFiles("./html/people.html"))
/*	planets = template.Must(template.ParseFiles("./html/planets.html"))
	films = template.Must(template.ParseFiles("./html/films.html"))
	species = template.Must(template.ParseFiles("./html/species.html"))
	vehicles = template.Must(template.ParseFiles("./html/vehicles.html"))
	starships = template.Must(template.ParseFiles("./html/starships.html"))*/
	home = template.Must(template.ParseFiles("./html/home.html"))
	http.HandleFunc("/people", People)
/*	http.HandleFunc("/planets", Planets)
	http.HandleFunc("/films", Films)
	http.HandleFunc("/species", Species)
	http.HandleFunc("/vehicles", Vehicles)
	http.HandleFunc("/starships", Starships)*/
	http.HandleFunc("/home", Home)
	http.ListenAndServe(":8080", nil)
}
