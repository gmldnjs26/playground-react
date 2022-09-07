package controllers

import (
	"strconv"

	"chore-api/src/db"
	"chore-api/src/models"

	"github.com/gofiber/fiber/v2"
)

func Quotes(c *fiber.Ctx) error {
	var quotes []models.Quote

	db.DB.Find(&quotes)

	return c.JSON(quotes)
}

func GetCommentsByQuoteId(c *fiber.Ctx) error {
	var comments []models.Comment
	id, _ := strconv.Atoi(c.Params("id"))

	db.DB.Where("id = ?", id).Find(&comments)

	return c.JSON(comments)
}

func GetQuote(c *fiber.Ctx) error {
	var quote models.Quote
	id, _ := strconv.Atoi(c.Params("id"))

	db.DB.Where("id = ?", id).Find(&quote)

	return c.JSON(quote)
}

type CreateQuoteRequest struct {
	Author   string `json:"author"`
	Contents string `json:"contents"`
}

func CreateQuote(c *fiber.Ctx) error {
	var quote models.Quote
	var request CreateQuoteRequest

	if err := c.BodyParser(&request); err != nil {
		return err
	}

	// create
	quote = models.Quote{
		Author:   request.Author,
		Contents: request.Contents,
	}
	db.DB.Model(&quote).Create(&quote)
	return c.JSON(quote)
}

type CreateCommentRequest struct {
	QuoteId  int    `json:"quote_id"`
	Contents string `json:"contents"`
}

func CreateComment(c *fiber.Ctx) error {
	var comment models.Comment
	var request CreateCommentRequest

	if err := c.BodyParser(&request); err != nil {
		return err
	}

	// db.DB.Where("id = ?", request.QuoteId).Find(&cart)

	// if cart.Id == 0 {

	// create
	comment = models.Comment{
		QuoteId:  uint(request.QuoteId),
		Contents: request.Contents,
	}
	db.DB.Model(&comment).Create(&comment)
	return c.JSON(comment)
}
