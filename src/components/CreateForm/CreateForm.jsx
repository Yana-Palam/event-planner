import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import useMatchMedia from "../../hooks/useMatchMedia";
import { useDispatch } from "react-redux";
import { addEvent } from "../../redux/events/eventsOperations";
import {
  StyledForm,
  Input,
  Textarea,
  Label,
  Btn,
  Wrapper,
  ErrorText,
} from "./CreateForm.styled";
import { categories, priorities } from "../../helpers/variables";

// const categories = [
//   "Art",
//   "Music",
//   "Business",
//   "Conference",
//   "Workshop",
//   "Party",
//   "Sport",
// ];

// const priorities = [
//   { valueName: "Low", value: 1 },
//   { valueName: "Medium", value: 2 },
//   { valueName: "High", value: 3 },
// ];

function CreateForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isTabletOnly, isMobile, isDesktop } = useMatchMedia();

  const initialValues = {
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "",
    picture: "",
    priority: "",
  };

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={(message) => <ErrorText>{message}</ErrorText>}
      />
    );
  };

  const validationSchema = Yup.object({
    title: Yup.string().required(),
    description: Yup.string().required(),
    date: Yup.string().required(),
    time: Yup.string().required(),
    location: Yup.string().required(),
    category: Yup.string().required(),
    picture: Yup.string().url(),
    priority: Yup.number().required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    dispatch(addEvent(values));
    resetForm();
    navigate("/");
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form autoComplete="off">
        <StyledForm>
          {isMobile && (
            <>
              <Wrapper>
                <Label htmlFor="title">Title</Label>
                <Input placeholder="Input" name="title" />
                <FormError name="title" />
              </Wrapper>
              <Wrapper>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  placeholder="Input"
                  component="textarea"
                  name="description"
                />
                <FormError name="description" />
              </Wrapper>
              <Wrapper>
                <Label htmlFor="date">Input date</Label>
                <Input placeholder="Input" name="date" />
                <FormError name="date" />
              </Wrapper>
              <Wrapper>
                <Label htmlFor="time">Input time</Label>
                <Input placeholder="Input" name="time" />
                <FormError name="time" />
              </Wrapper>

              <Wrapper>
                <Label htmlFor="location">Location</Label>
                <Input placeholder="Input" name="location" />
                <FormError name="location" />
              </Wrapper>
              <Wrapper>
                <Label htmlFor="category">Category</Label>
                <Input placeholder="Input" component="select" name="category">
                  {categories.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </Input>
                <FormError name="category" />
              </Wrapper>
              <Wrapper>
                <Label htmlFor="picture">Add picture</Label>
                <Input placeholder="Input" name="picture" />
                <FormError name="picture" />
              </Wrapper>
              <Wrapper>
                <Label htmlFor="priority">Priority</Label>
                <Input placeholder="Input" component="select" name="priority">
                  {priorities.map((item, index) => (
                    <option key={index} value={item.value}>
                      {item.valueName}
                    </option>
                  ))}
                </Input>
                <FormError name="category" />
              </Wrapper>
            </>
          )}
          {isTabletOnly && (
            <>
              <div>
                <Wrapper>
                  <Label htmlFor="title">Title</Label>
                  <Input placeholder="Input" name="title" />
                  <FormError name="title" />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    placeholder="Input"
                    component="textarea"
                    name="description"
                  />
                  <FormError name="description" />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="date">Input date</Label>
                  <Input placeholder="Input" name="date" />
                  <FormError name="date" />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="time">Input time</Label>
                  <Input placeholder="Input" name="time" />
                  <FormError name="time" />
                </Wrapper>
              </div>
              <div>
                <Wrapper>
                  <Label htmlFor="location">Location</Label>
                  <Input placeholder="Input" name="location" />
                  <FormError name="location" />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="category">Category</Label>
                  <Input placeholder="Input" component="select" name="category">
                    {categories.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </Input>
                  <FormError name="category" />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="picture">Add picture</Label>
                  <Input placeholder="Input" name="picture" />
                  <FormError name="picture" />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="priority">Priority</Label>
                  <Input placeholder="Input" component="select" name="priority">
                    {priorities.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.valueName}
                      </option>
                    ))}
                  </Input>
                  <FormError name="category" />
                </Wrapper>
              </div>
            </>
          )}

          {isDesktop && (
            <>
              <div>
                <Wrapper>
                  <Label htmlFor="title">Title</Label>
                  <Input placeholder="Input" name="title" />
                  <FormError name="title" />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    placeholder="Input"
                    component="textarea"
                    name="description"
                  />
                  <FormError name="description" />
                </Wrapper>
              </div>
              <div>
                <Wrapper>
                  <Label htmlFor="date">Input date</Label>
                  <Input placeholder="Input" name="date" />
                  <FormError name="date" />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="time">Input time</Label>
                  <Input placeholder="Input" name="time" />
                  <FormError name="time" />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="location">Location</Label>
                  <Input placeholder="Input" name="location" />
                  <FormError name="location" />
                </Wrapper>
              </div>
              <div>
                <Wrapper>
                  <Label htmlFor="category">Category</Label>
                  <Input placeholder="Input" component="select" name="category">
                    {categories.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </Input>
                  <FormError name="category" />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="picture">Add picture</Label>
                  <Input placeholder="Input" name="picture" />
                  <FormError name="picture" />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="priority">Priority</Label>
                  <Input placeholder="Input" component="select" name="priority">
                    {priorities.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.valueName}
                      </option>
                    ))}
                  </Input>
                  <FormError name="category" />
                </Wrapper>
              </div>
            </>
          )}

          <Btn type="submit">Add event</Btn>
        </StyledForm>
      </Form>
    </Formik>
  );
}

export default CreateForm;
