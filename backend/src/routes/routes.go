package routes

import (
	"chore-api/src/controllers"

	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	api := app.Group("api")

	api.Get("/meals", controllers.Meals)
	api.Get("/carts", controllers.Carts)
	api.Post("/carts", controllers.CreateOrUpdateCart)
}
