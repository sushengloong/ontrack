package main

import (
	"fmt"
	"encoding/json"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
)

type Card struct {
	Id int `json:"id"`
	Title string `json:"title"`
	Status string `json:"status"`
	Priority string `json:"priority"`
	Assignee string `json:"assignee"`
}

type CardJsonData struct {
	Cards []Card `json:"cards"`
}

var cards = []Card{ Card{Id: 1, Title: "Develop REST API in golang", Status: "Developing", Priority: "High", Assignee: "SSL"} }

func main() {
	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/cards", index).Methods("GET")
	router.HandleFunc("/cards", create).Methods("POST")

	server := &http.Server{
		Handler:      router,
		Addr:         "127.0.0.1:8000",
		// Good practice: enforce timeouts for servers you create!
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}
	fmt.Println("Listening", server.Addr)
	log.Fatal(server.ListenAndServe())
}

func index(w http.ResponseWriter, r *http.Request) {
	cardJsonData := CardJsonData{Cards: cards}

	cardJson, err := json.Marshal(cardJsonData)

	if err != nil {
		log.Println(err.Error())
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	fmt.Fprintln(w, string(cardJson));
}

func create(w http.ResponseWriter, r *http.Request) {
	// r.ParseForm()
	// b, _ := json.MarshalIndent(r.Form, "", "  ")

	title := r.FormValue("title");
	status := r.FormValue("status");
	priority := r.FormValue("priority");
	assignee := r.FormValue("assignee");
	card := Card{Id: len(cards)+1, Title: title, Status: status, Priority: priority, Assignee: assignee}
	cards = append(cards, card)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
}
