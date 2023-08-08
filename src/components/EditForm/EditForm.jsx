import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import EventForm from "../EventForm/EventForm";

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
    <EventForm
      onSubmit={onSubmit}
      isLoading={isLoading}
      initialValues={eventDetails}
      btnText="Save"
    />
  );
}

export default EditForm;
