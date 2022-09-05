package main // main으로 해야 main이라고 인식되서 실행을 할 수 있게된다.

import (
	"math/rand"

	"chore-api/src/db"
	"chore-api/src/models"

	"github.com/bxcodec/faker/v3"
)

func main2() {
	db.Connect()

	for i := 0; i < 10; i++ {
		meals := models.Meal{
			Name:        faker.Username(),
			Description: faker.Username(),
			Price:       uint(rand.Intn(90) + 10),
		}
		db.DB.Create(&meals)
	}
}
