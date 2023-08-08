import * as Yup from "yup";

export const validationSchema = Yup.object({
  title: Yup.string().trim().max(30).required(),
  description: Yup.string().trim().max(200).required(),
  date: Yup.date().min(new Date()).required(),
  time: Yup.string().required(),
  location: Yup.string().trim().max(20).required(),
  category: Yup.string()
    .trim()
    .matches(/(Art|Music|Business|Conference|Workshop|Party|Sport)/)
    .required(),
  picture: Yup.string().trim().url().required(),
  priority: Yup.number().required(),
});
