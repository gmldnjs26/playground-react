package controllers

import (
	"chore-api/src/db"
	"chore-api/src/models"

	"github.com/gofiber/fiber/v2"
)

func Carts(c *fiber.Ctx) error {
	var carts []models.Cart

	db.DB.Find(&carts)

	return c.JSON(carts)
}

type CreateOrUpdateOrderRequest struct {
	Title       string `json:"title"`
	Price       int    `json:"price"`
	Amount      int    `json:"amount"`
	Description string `json:"description"`
}

func CreateOrUpdateCart(c *fiber.Ctx) error {
	var cart models.Cart
	var request CreateOrUpdateOrderRequest

	if err := c.BodyParser(&request); err != nil {
		return err
	}

	db.DB.Where("title = ?", request.Title).Find(&cart)

	if cart.Id == 0 {
		// create
		cart = models.Cart{
			Title:       request.Title,
			Description: request.Description,
			Price:       uint(request.Price),
			Amount:      uint(request.Amount),
		}
		db.DB.Model(&cart).Create(&cart)
	} else {
		// update
		cart.Amount = cart.Amount + uint(request.Amount)
		db.DB.Model(&cart).Updates(&cart)
	}
	return c.JSON(cart)
}
