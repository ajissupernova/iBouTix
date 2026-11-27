package main

import (
	"log"
	"net/http"
	"os"

	"iboutix/backend/handlers"
	"iboutix/backend/services"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	store := services.NewJSONStore("../data")
	mux := http.NewServeMux()
	mux.HandleFunc("GET /api/health", handlers.Health)
	mux.HandleFunc("GET /api/events", handlers.Events(store))

	addr := ":" + port
	log.Printf("iBouTix API listening on %s", addr)
	log.Fatal(http.ListenAndServe(addr, mux))
}
