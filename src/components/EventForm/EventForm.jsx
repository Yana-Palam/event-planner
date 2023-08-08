import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import InputSelect from "../InputSelect/InputSelect";
import InputDate from "../InputDate/InputDate";
import InputTime from "../InputTime/InputTime";
import { validationSchema } from "../../helpers/schemas";
import {
  StyledForm,
  Input,
  Textarea,
  Label,
  Btn,
  Wrapper,
  ErrorText,
} from "./EventForm.styled";
import { CrossSmall } from "react-swm-icon-pack";
import { categories, priorities } from "../../helpers/variables";

function EventForm({ onSubmit, initialValues, isLoading = false, btnText }) {
  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={(message) => <ErrorText>{message}</ErrorText>}
      />
    );
  };

  return (
    !isLoading && (
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit} autoComplete="off">
            <StyledForm>
              <Wrapper>
                <Label htmlFor="title">Title</Label>
                <Input
                  $error={props.errors.title && props.touched.title}
                  id="title"
                  placeholder="Input"
                  name="title"
                />

                <FormError name="title" />
              </Wrapper>
              <Wrapper>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  $error={props.errors.description && props.touched.description}
                  id="description"
                  placeholder="Input"
                  component="textarea"
                  name="description"
                />
                <FormError name="description" />
              </Wrapper>
              <Wrapper>
                <Label htmlFor="date">Input date</Label>
                <Field id="date" name="date">
                  {({ field, form, meta }) => (
                    <InputDate
                      error={props.errors.date && props.touched.date}
                      field={field}
                      form={form}
                      meta={meta}
                      label={"Date"}
                    />
                  )}
                </Field>
                <FormError name="date" />
              </Wrapper>

              <Wrapper>
                <Label htmlFor="time">Input time</Label>
                <Field id="time" name="time">
                  {({ field, form, meta }) => (
                    <InputTime
                      error={props.errors.time && props.touched.time}
                      field={field}
                      form={form}
                      meta={meta}
                      label={"Time"}
                    />
                  )}
                </Field>
                <FormError name="time" />
              </Wrapper>

              <Wrapper>
                <Label htmlFor="location">Location</Label>
                <Input
                  $error={props.errors.location && props.touched.location}
                  id="location"
                  placeholder="Input"
                  name="location"
                />
                <FormError name="location" />
              </Wrapper>

              <Wrapper>
                <Label htmlFor="category">Category</Label>
                <Field id="category" name="category">
                  {({ field, form, meta }) => (
                    <InputSelect
                      error={props.errors.category && props.touched.category}
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
                <Input
                  $error={props.errors.picture && props.touched.picture}
                  id="picture"
                  placeholder="Input"
                  name="picture"
                />
                <FormError name="picture" />
              </Wrapper>

              <Wrapper>
                <Label htmlFor="priority">Priority</Label>
                <Field id="priority" name="priority">
                  {({ field, form, meta }) => (
                    <InputSelect
                      error={props.errors.priority && props.touched.priority}
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

              <Btn type="submit">{btnText}</Btn>
            </StyledForm>
          </Form>
        )}
      </Formik>
    )
  );
}

export default EventForm;
