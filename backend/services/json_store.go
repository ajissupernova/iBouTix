package services

import (
	"encoding/json"
	"os"
	"path/filepath"

	"iboutix/backend/models"
)

type JSONStore struct {
	dataDir string
}

func NewJSONStore(dataDir string) *JSONStore {
	return &JSONStore{dataDir: dataDir}
}

func (s *JSONStore) LoadEvents() ([]models.Event, error) {
	file, err := os.Open(filepath.Join(s.dataDir, "events.json"))
	if err != nil {
		return nil, err
	}
	defer file.Close()

	var events []models.Event
	err = json.NewDecoder(file).Decode(&events)
	return events, err
}
