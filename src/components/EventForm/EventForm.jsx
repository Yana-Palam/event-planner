import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import InputSelect from "../InputSelect/InputSelect";
import InputDate from "../InputDate/InputDate";
import useMatchMedia from "../../hooks/useMatchMedia";
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
  const { isTabletOnly, isMobile, isDesktop } = useMatchMedia();

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
                    <Field id="date" name="date">
                      {({ field, form, meta }) => (
                        <InputDate
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
                      <Field id="date" name="date">
                        {({ field, form, meta }) => (
                          <InputDate
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
                      <Input id="time" placeholder="Input" name="time" />
                      <FormError name="time" />
                    </Wrapper>
                  </div>
                  <div>
                    <Wrapper>
                      <Label htmlFor="location">Location</Label>
                      <Input
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
                      <Field id="date" name="date">
                        {({ field, form, meta }) => (
                          <InputDate
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
                      <Input id="time" placeholder="Input" name="time" />
                      <FormError name="time" />
                    </Wrapper>
                    <Wrapper>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        placeholder="Input"
                        name="location"
                      />
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

              <Btn type="submit">{btnText}</Btn>
            </StyledForm>
          </Form>
        )}
      </Formik>
    )
  );
}

export default EventForm;
