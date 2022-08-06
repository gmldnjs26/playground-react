package main

import (
	"chore-api/src/db"
	"chore-api/src/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	// DB
	db.Connect()
	db.AutoMigrate()

	// Set App Routes and Cors
	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))
	routes.Setup(app)

	app.Listen(":3030")
}
