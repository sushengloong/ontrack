package main

import (
	"fmt"
	"encoding/json"
	"log"
	"net/http"
	"strconv"
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
	router.HandleFunc("/cards/{id:[0-9]+}", update).Methods("POST")
	router.HandleFunc("/cards/{id:[0-9]+}", destroy).Methods("DELETE")

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

func update(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		log.Println(err.Error())
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	title := r.FormValue("title");
	status := r.FormValue("status");
	priority := r.FormValue("priority");
	assignee := r.FormValue("assignee");

	found := false
	for i, _ := range cards {
		c := &cards[i]
		if c.Id == id {
			found = true
			c.Title = title
			c.Status = status
			c.Priority = priority
			c.Assignee = assignee
			break
		}
	}

	if !found {
		notFoundErr := fmt.Sprintf("Record %d not found", id)
		log.Println(notFoundErr)
		http.Error(w, notFoundErr, http.StatusInternalServerError)
		return
	}
	fmt.Printf("%+v\n", cards);

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
}

func destroy(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		log.Println(err.Error())
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	index := -1
	for i, _ := range cards {
		c := &cards[i]
		if c.Id == id {
			index = i
			break
		}
	}

	if index == -1 {
		notFoundErr := fmt.Sprintf("Record %d not found", id)
		log.Println(notFoundErr)
		http.Error(w, notFoundErr, http.StatusInternalServerError)
		return
	}

	cards = append(cards[:index], cards[index+1:]...)

	fmt.Printf("%+v\n", cards);

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
}
