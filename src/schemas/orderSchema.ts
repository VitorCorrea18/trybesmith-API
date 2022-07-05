import Joi from 'joi';

// https://github.com/tryber/sd-017-project-trybesmith/pull/5
const ordersSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number()).min(1).required()
    .messages({
      'array.min': '"productsIds" must include only numbers',
    }),
});

export default ordersSchema;