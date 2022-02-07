package main

import (
	"html/template"
	"net/http"
)

var home *template.Template

func Home(w http.ResponseWriter, r *http.Request) {
	home.Execute(w, nil)
}

func main() {
	home = template.Must(template.ParseFiles("./html/home.html"))
	http.HandleFunc("/home", Home)
	http.ListenAndServe(":8080", nil)
}