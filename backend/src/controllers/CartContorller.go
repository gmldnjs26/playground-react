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

func CreateOrUpdateCart(c *fiber.Ctx) {
}
