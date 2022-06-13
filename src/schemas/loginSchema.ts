import Joi from 'joi';

const LoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export default LoginSchema;