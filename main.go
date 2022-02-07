package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"net/http"
	"time"
)

type People struct {
	Name      string        `json:"name"`
	Height    string        `json:"height"`
	Mass      string        `json:"mass"`
	HairColor string        `json:"hair_color"`
	SkinColor string        `json:"skin_color"`
	EyeColor  string        `json:"eye_color"`
	BirthYear string        `json:"birth_year"`
	Gender    string        `json:"gender"`
	Homeworld string        `json:"homeworld"`
	Films     []string      `json:"films"`
	Species   []interface{} `json:"species"`
	Vehicles  []string      `json:"vehicles"`
	Starships []string      `json:"starships"`
	Created   time.Time     `json:"created"`
	Edited    time.Time     `json:"edited"`
	URL       string        `json:"url"`
}

type Planets struct {
	Name           string    `json:"name"`
	RotationPeriod string    `json:"rotation_period"`
	OrbitalPeriod  string    `json:"orbital_period"`
	Diameter       string    `json:"diameter"`
	Climate        string    `json:"climate"`
	Gravity        string    `json:"gravity"`
	Terrain        string    `json:"terrain"`
	SurfaceWater   string    `json:"surface_water"`
	Population     string    `json:"population"`
	Residents      []string  `json:"residents"`
	Films          []string  `json:"films"`
	Created        time.Time `json:"created"`
	Edited         time.Time `json:"edited"`
	URL            string    `json:"url"`
}

type Films struct {
	Title        string    `json:"title"`
	EpisodeID    int       `json:"episode_id"`
	OpeningCrawl string    `json:"opening_crawl"`
	Director     string    `json:"director"`
	Producer     string    `json:"producer"`
	ReleaseDate  string    `json:"release_date"`
	Characters   []string  `json:"characters"`
	Planets      []string  `json:"planets"`
	Starships    []string  `json:"starships"`
	Vehicles     []string  `json:"vehicles"`
	Species      []string  `json:"species"`
	Created      time.Time `json:"created"`
	Edited       time.Time `json:"edited"`
	URL          string    `json:"url"`
}

type Species struct {
	Name            string    `json:"name"`
	Classification  string    `json:"classification"`
	Designation     string    `json:"designation"`
	AverageHeight   string    `json:"average_height"`
	SkinColors      string    `json:"skin_colors"`
	HairColors      string    `json:"hair_colors"`
	EyeColors       string    `json:"eye_colors"`
	AverageLifespan string    `json:"average_lifespan"`
	Homeworld       string    `json:"homeworld"`
	Language        string    `json:"language"`
	People          []string  `json:"people"`
	Films           []string  `json:"films"`
	Created         time.Time `json:"created"`
	Edited          time.Time `json:"edited"`
	URL             string    `json:"url"`
}

type Vehicles struct {
	Name                 string        `json:"name"`
	Model                string        `json:"model"`
	Manufacturer         string        `json:"manufacturer"`
	CostInCredits        string        `json:"cost_in_credits"`
	Length               string        `json:"length"`
	MaxAtmospheringSpeed string        `json:"max_atmosphering_speed"`
	Crew                 string        `json:"crew"`
	Passengers           string        `json:"passengers"`
	CargoCapacity        string        `json:"cargo_capacity"`
	Consumables          string        `json:"consumables"`
	VehicleClass         string        `json:"vehicle_class"`
	Pilots               []interface{} `json:"pilots"`
	Films                []string      `json:"films"`
	Created              time.Time     `json:"created"`
	Edited               time.Time     `json:"edited"`
	URL                  string        `json:"url"`
}

type Starships struct {
	Name                 string        `json:"name"`
	Model                string        `json:"model"`
	Manufacturer         string        `json:"manufacturer"`
	CostInCredits        string        `json:"cost_in_credits"`
	Length               string        `json:"length"`
	MaxAtmospheringSpeed string        `json:"max_atmosphering_speed"`
	Crew                 string        `json:"crew"`
	Passengers           string        `json:"passengers"`
	CargoCapacity        string        `json:"cargo_capacity"`
	Consumables          string        `json:"consumables"`
	HyperdriveRating     string        `json:"hyperdrive_rating"`
	Mglt                 string        `json:"MGLT"`
	StarshipClass        string        `json:"starship_class"`
	Pilots               []interface{} `json:"pilots"`
	Films                []string      `json:"films"`
	Created              time.Time     `json:"created"`
	Edited               time.Time     `json:"edited"`
	URL                  string        `json:"url"`
}

func main() {
	PeopleData()
	PlanetsData()
	FilmsData()
	SpeciesData()
	VehiclesData()
	StarshipsData()
	fmt.Println("Server Open In http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}

func PeopleData() {
	maintemp := OpenTemplate("index")
	http.HandleFunc("/", func(rw http.ResponseWriter, r *http.Request) {
		data := &People{}
		listOfPeople := []People{}
		for i := 1; i <= 83; i++ {
			searchInApi(fmt.Sprintf("people/%d", i), data)
			listOfPeople = append(listOfPeople, *data)
		}
		//fmt.Println(listOfPeople[82])
		maintemp.Execute(rw, listOfPeople)
	})
}

func PlanetsData() {
	maintemp := OpenTemplate("planets")
	data := &Planets{}
	listOfPlanets := []Planets{}
	http.HandleFunc("/planets", func(rw http.ResponseWriter, r *http.Request) {
		for i := 1; i <= 60; i++ {
			searchInApi(fmt.Sprintf("planets/%d", i), data)
			listOfPlanets = append(listOfPlanets, *data)
		}

		maintemp.Execute(rw, listOfPlanets)
	})
	//fmt.Println(listOfPlanets[59])
}

func FilmsData() {
	maintemp := OpenTemplate("films")
	data := &Films{}
	listOfFilms := []Films{}
	http.HandleFunc("/films", func(rw http.ResponseWriter, r *http.Request) {
		for i := 1; i <= 6; i++ {
			searchInApi(fmt.Sprintf("films/%d", i), data)
			listOfFilms = append(listOfFilms, *data)
		}
		//fmt.Println(listOfFilms[5])
		maintemp.Execute(rw, listOfFilms)

	})
}

func SpeciesData() {
	maintemp := OpenTemplate("species")
	data := &Species{}
	listOfSpecies := []Species{}
	http.HandleFunc("/species", func(rw http.ResponseWriter, r *http.Request) {
		for i := 1; i <= 37; i++ {
			searchInApi(fmt.Sprintf("species/%d", i), data)
			listOfSpecies = append(listOfSpecies, *data)
		}
		//fmt.Println(listOfSpecies[36])
		maintemp.Execute(rw, listOfSpecies)
	})
}

func VehiclesData() {
	maintemp := OpenTemplate("vehicles")
	data := &Vehicles{}
	listOfVehicles := []Vehicles{}
	http.HandleFunc("/vehicles", func(rw http.ResponseWriter, r *http.Request) {
		for i := 4; i <= 38; i++ {
			searchInApi(fmt.Sprintf("vehicles/%d", i), data)
			listOfVehicles = append(listOfVehicles, *data)
		}
		//fmt.Println(listOfVehicles[37])
		maintemp.Execute(rw, listOfVehicles)
	})
}

func StarshipsData() {
	maintemp := OpenTemplate("starships")
	data := &Starships{}
	listOfStarships := []Starships{}
	http.HandleFunc("/starships", func(rw http.ResponseWriter, r *http.Request) {

		for i := 2; i <= 3; i++ {
			searchInApi(fmt.Sprintf("starships/%d", i), data)
			listOfStarships = append(listOfStarships, *data)
		}
		for i := 5; i <= 5; i++ {
			searchInApi(fmt.Sprintf("starships/%d", i), data)
			listOfStarships = append(listOfStarships, *data)
		}
		for i := 9; i <= 13; i++ {
			searchInApi(fmt.Sprintf("starships/%d", i), data)
			listOfStarships = append(listOfStarships, *data)
		}
		for i := 15; i <= 15; i++ {
			searchInApi(fmt.Sprintf("starships/%d", i), data)
			listOfStarships = append(listOfStarships, *data)
		}
		for i := 17; i <= 17; i++ {
			searchInApi(fmt.Sprintf("starships/%d", i), data)
			listOfStarships = append(listOfStarships, *data)
		}
		for i := 21; i <= 23; i++ {
			searchInApi(fmt.Sprintf("starships/%d", i), data)
			listOfStarships = append(listOfStarships, *data)
		}
		for i := 27; i <= 29; i++ {
			searchInApi(fmt.Sprintf("starships/%d", i), data)
			listOfStarships = append(listOfStarships, *data)
		}
		for i := 31; i <= 32; i++ {
			searchInApi(fmt.Sprintf("starships/%d", i), data)
			listOfStarships = append(listOfStarships, *data)
		}
		for i := 39; i <= 41; i++ {
			searchInApi(fmt.Sprintf("starships/%d", i), data)
			listOfStarships = append(listOfStarships, *data)
		}

		//fmt.Println(listOfStarships[31])
		maintemp.Execute(rw, listOfStarships)
	})
}

func searchInApi(endOfUrl string, target interface{}) error {
	var url string
	if endOfUrl == "" {
		url = "https://swapi.dev/api"
	} else {
		url = fmt.Sprintf("https://swapi.dev/api/%s", endOfUrl)
	}

	res, err := http.Get(url)

	if err != nil {
		return err
	}

	return json.NewDecoder(res.Body).Decode(target)
}

func OpenTemplate(fileName string) *template.Template {
	tmpl, err := template.ParseFiles(fmt.Sprintf("./templates/%s.html", fileName))
	if err != nil {
		fmt.Println(err.Error())
	}
	return tmpl
}
