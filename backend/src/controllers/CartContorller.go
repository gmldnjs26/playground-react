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
	title       string
	price       int
	amount      int
	description string
}

func CreateOrUpdateCart(c *fiber.Ctx) error {
	var cart models.Cart
	var request CreateOrUpdateOrderRequest

	if err := c.BodyParser(&request); err != nil {
		return err
	}

	db.DB.Where("title = ?", request.title).Find(&cart)

	if cart.Id == 0 {
		// create
	} else {
		// update
	}

	// database.DB.Where("user_id = ?", id).Find(&links)

	// for _, cart := range carts {
	// 	if cart.Title == request.title {
	// 		temp := models.Cart{
	// 			Id:     cart.Id,
	// 			Amount: cart.Amount + uint(request.amount),
	// 		}
	// 		db.DB.Model(&temp).Updates(&temp)
	// 	}
	// }
}
