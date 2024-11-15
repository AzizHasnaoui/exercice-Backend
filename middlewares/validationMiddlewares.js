import Joi from "joi";

///////////////////////////////SIGNUP VALIDATION USING JOI///////////////////////////////////
export const validateSignup = (req, res, next) => {
  const userSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    role: Joi.string().valid("admin", "user").default("user"),
  });

  const { error } = userSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

///////////////////////////////EVENT VALIDATION USING JOI///////////////////////////////////
export const validateEvent = (req, res, next) => {
  const eventSchema = Joi.object({
    title: Joi.string().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().required().greater(Joi.ref("startDate")),
  });

  const { error } = eventSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};
