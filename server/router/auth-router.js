const express = require("express");
const authControllers = require("../controllers/auth-controller");
const {validationSchema,validateSchema} = require("../middlewares/validate-middleware");

const router = express.Router();

router
  .route("/register")
  .post(validateSchema(validationSchema), authControllers.register);

router.route("/users").get(authControllers.users);

module.exports = router;
