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

func main() {
	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/cards", index).Methods("GET")

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
	// vars := mux.Vars(r)
	// log.Println(vars)

	cards := []Card{ Card{Id: 1, Title: "Develop REST API in golang", Status: "In Progress", Priority: "High", Assignee: "SSL"} }
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
