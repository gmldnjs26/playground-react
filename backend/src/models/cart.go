package models

type Cart struct {
	Id          uint   `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Price       uint   `json:"price"`
	Amount      uint   `json:"amount"`
}
