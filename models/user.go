package models

import (
	"github.com/jinzhu/gorm"
)

type User struct {
	gorm.Model
	Email string `json:"email"`
	HashedPassword string
}