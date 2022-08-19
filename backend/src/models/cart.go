package models

type Cart struct {
	Id          uint   `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Price       uint   `json:"price"`
	Amount      uint   `json:"amount"`
}
