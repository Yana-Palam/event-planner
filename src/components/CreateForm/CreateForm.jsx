import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import useMatchMedia from "../../hooks/useMatchMedia";
import { useDispatch } from "react-redux";
import { addEvent } from "../../redux/events/eventsOperations";
import InputSelect from "../InputSelect/InputSelect";
// import { CrossSmall } from "react-swm-icon-pack";
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
import { Field } from "formik";

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
    picture: Yup.string().url().required(),
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
                <Field name="category">
                  {({ field, form, meta }) => (
                    <InputSelect
                      field={field}
                      form={form}
                      meta={meta}
                      label={"Category"}
                      options={categories}
                    />
                  )}
                </Field>
                <FormError name="category" />
              </Wrapper>
              <Wrapper>
                <Label htmlFor="picture">Add picture</Label>
                <Input placeholder="Input" name="picture" />
                <FormError name="picture" />
              </Wrapper>
              <Wrapper>
                <Label htmlFor="priority">Priority</Label>
                <Field name="priority">
                  {({ field, form, meta }) => (
                    <InputSelect
                      field={field}
                      form={form}
                      meta={meta}
                      label={"Priority"}
                      options={priorities}
                    />
                  )}
                </Field>
                <FormError name="priority" />
              </Wrapper>
            </>
          )}
          {isTabletOnly && (
            <>
              <div>
                <Wrapper>
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Input" name="title" />
                  <FormError name="title" />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Input"
                    component="textarea"
                    name="description"
                  />
                  <FormError name="description" />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="date">Input date</Label>
                  <Input id="date" placeholder="Input" name="date" />
                  <FormError name="date" />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="time">Input time</Label>
                  <Input id="time" placeholder="Input" name="time" />
                  <FormError name="time" />
                </Wrapper>
              </div>
              <div>
                <Wrapper>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Input" name="location" />
                  <FormError name="location" />
                </Wrapper>

                <Wrapper>
                  <Label htmlFor="category">Category</Label>
                  <Field id="category" name="category">
                    {({ field, form, meta }) => (
                      <InputSelect
                        field={field}
                        form={form}
                        meta={meta}
                        label={"Category"}
                        options={categories}
                      />
                    )}
                  </Field>
                  <FormError name="category" />
                </Wrapper>

                <Wrapper>
                  <Label htmlFor="picture">Add picture</Label>
                  <Input id="picture" placeholder="Input" name="picture" />
                  <FormError name="picture" />
                </Wrapper>

                <Wrapper>
                  <Label htmlFor="priority">Priority</Label>
                  <Field id="priority" name="priority">
                    {({ field, form, meta }) => (
                      <InputSelect
                        field={field}
                        form={form}
                        meta={meta}
                        label={"Priority"}
                        options={priorities}
                      />
                    )}
                  </Field>
                  <FormError name="priority" />
                </Wrapper>
              </div>
            </>
          )}

          {isDesktop && (
            <>
              <div>
                <Wrapper>
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Input" name="title" />
                  <FormError name="title" />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
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
                  <Input id="date" placeholder="Input" name="date" />
                  <FormError name="date" />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="time">Input time</Label>
                  <Input id="time" placeholder="Input" name="time" />
                  <FormError name="time" />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Input" name="location" />
                  <FormError name="location" />
                </Wrapper>
              </div>
              <div>
                <Wrapper>
                  <Label htmlFor="category">Category</Label>
                  <Field id="category" name="category">
                    {({ field, form, meta }) => (
                      <InputSelect
                        field={field}
                        form={form}
                        meta={meta}
                        label={"Category"}
                        options={categories}
                        s
                      />
                    )}
                  </Field>
                  <FormError name="category" />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="picture">Add picture</Label>
                  <Input id="picture" placeholder="Input" name="picture" />
                  <FormError name="picture" />
                </Wrapper>
                <Wrapper>
                  <Label htmlFor="priority">Priority</Label>
                  <Field id="priority" name="priority">
                    {({ field, form, meta }) => (
                      <InputSelect
                        field={field}
                        form={form}
                        meta={meta}
                        label={"Priority"}
                        options={priorities}
                      />
                    )}
                  </Field>
                  <FormError name="priority" />
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
