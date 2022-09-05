package main

import (
	"math/rand"

	"chore-api/src/db"
	"chore-api/src/models"

	"github.com/bxcodec/faker/v3"
)

func main() {
	db.Connect()

	for i := 0; i < 10; i++ {
		var comments []models.Comment

		for j := 0; j < rand.Intn(5); j++ {
			comments = append(comments, models.Comment{
				Contents: faker.Word(),
			})
		}

		db.DB.Create(&models.Quote{
			Author:   faker.FirstName(),
			Contents: faker.Word(),
			Comments: comments,
		})
	}
}
