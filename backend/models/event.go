package models

type Event struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Date        string `json:"date"`
	Venue       string `json:"venue"`
	City        string `json:"city"`
}
