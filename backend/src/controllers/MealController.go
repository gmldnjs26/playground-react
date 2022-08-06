package controllers

import (
	"chore-api/src/db"
	"chore-api/src/models"

	"github.com/gofiber/fiber/v2"
)

func Meals(c *fiber.Ctx) error {
	var meals []models.Meal

	db.DB.Find(&meals)

	return c.JSON(meals)
}
