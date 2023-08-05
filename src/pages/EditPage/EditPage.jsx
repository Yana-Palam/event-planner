import React from "react";

import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/events/eventsSelectors";
import Title from "../../components/Title/Title";
import Loader from "../../components/Loader/Loader";
import EditForm from "../../components/EditForm/EditForm";

function EditPage() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <GoBackBtn>Back</GoBackBtn>
      <Title>Edit event</Title>
      <EditForm />
      {isLoading && <Loader />}
    </>
  );
}

export default EditPage;
