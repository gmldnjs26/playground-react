package models

type Quote struct {
	Id       uint      `json:"id"`
	Author   string    `json:"author"`
	Contents string    `json:"contents"`
	Comments []Comment `json:"comments" gorm:"foreignKey:QuoteId"`
}
