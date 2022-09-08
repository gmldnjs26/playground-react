package models

type Comment struct {
	Id       uint   `json:"id"`
	QuoteId  uint   `json:"quote_id"`
	Contents string `json:"contents"`
}
