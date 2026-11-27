package handlers

import (
	"encoding/json"
	"net/http"

	"iboutix/backend/services"
)

func Events(store *services.JSONStore) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		events, err := store.LoadEvents()
		if err != nil {
			http.Error(w, "could not load events", http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "application/json; charset=utf-8")
		_ = json.NewEncoder(w).Encode(events)
	}
}
