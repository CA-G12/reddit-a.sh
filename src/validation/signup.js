const joi = require('joi');

const signupSchema = joi.object({
  firstname: joi.string().required(),
  lastname: joi.string().required(),
  username: joi.string().alphanum().required(),
  email: joi.string().email().required(),
  password: joi.string().alphanum().min(8).required(),
  confirmPassword: joi.ref('password'),
  img: joi.string().default('https://external-preview.redd.it/5kh5OreeLd85QsqYO1Xz_4XSLYwZntfjqou-8fyBFoE.png?auto=webp&s=dbdabd04c399ce9c761ff899f5d38656d1de87c2'),
  created: joi.date().default(Date.now),
});

module.exports = signupSchema;
