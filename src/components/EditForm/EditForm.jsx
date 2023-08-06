import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import InputSelect from "../InputSelect/InputSelect";
import InputDate from "../InputDate/InputDate";
import * as Yup from "yup";
import axios from "axios";
import useMatchMedia from "../../hooks/useMatchMedia";

import {
  StyledForm,
  Input,
  Textarea,
  Label,
  Btn,
  Wrapper,
  ErrorText,
} from "./EditForm.styled";
import { categories, priorities } from "../../helpers/variables";

function EditForm() {
  const navigate = useNavigate();
  const [eventDetails, setEventDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { eventId } = useParams();

  const fetchEvent = async (id) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(id);
      setEventDetails(data);
    } catch (error) {
      navigate(location?.state?.from ?? "/");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchEvent(eventId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isTabletOnly, isMobile, isDesktop } = useMatchMedia();

  const initialValues = {
    ...eventDetails,
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
    date: Yup.date().required(),
    time: Yup.string().required(),
    location: Yup.string().required(),
    category: Yup.string().required(),
    picture: Yup.string().url(),
    priority: Yup.number().required(),
  });

  const onSubmit = async (values, { resetForm }) => {
    console.log(values);
    const event = { ...values, id: eventDetails.id };
    try {
      await axios.put(`/${event.id}`, event);
      resetForm();
    } catch (error) {
      navigate(location?.state?.from ?? "/");
    }

    navigate(location?.state?.from ?? "/");
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

              <Btn type="submit">Add event</Btn>
            </StyledForm>
          </Form>
        )}
      </Formik>
    )
  );
}

export default EditForm;
