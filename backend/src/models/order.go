package models

type Order struct {
	Id         uint        `json:"id"`
	TotalPrice uint        `json:"total_price"`
	OrderItems []OrderItem `json:"order_items" gorm:"foreignKey:OrderId"`
}

type OrderItem struct {
	Id      uint
	OrderId uint   `json:"order_id"`
	Name    string `json:"name"`
	Price   uint   `json:"price"`
	Amount  uint   `json:"amount"`
}
