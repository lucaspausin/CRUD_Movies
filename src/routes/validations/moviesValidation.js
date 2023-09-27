const {check} = require("express-validator");
module.exports = [
    check("title")
      .notEmpty()
      .withMessage("Es obligatorio")
      .bail()
      .isLength({
        min: 4,
        max: 50,
      })
      .withMessage("Debe tener entre 4 y 20 caracteres"),
    check("rating")
      .notEmpty()
      .withMessage("Es requerida")
      .isDecimal()
      .isFloat({
        gt:0, lt:10
      }).withMessage("ingrese un valor entre 1 y 10")
      
      ,
    check("awards")
      .notEmpty()
      .withMessage("Es obligatorio")
      .isInt({
        gt: 1,
      })
      .withMessage("Debe ser positivo"),
    check("release_date")
    .notEmpty()
    .withMessage('debe ingresar una fecha'),
    
      check('length').notEmpty().withMessage("dato obligatorio").bail()
    .isLength({
      min: 1,
      max: 1000,
    }).withMessage("duracion no valida").bail()
    
  ];
  