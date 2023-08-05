import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/events/eventsSelectors";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import CreateForm from "../../components/CreateForm/CreateForm";
import Title from "../../components/Title/Title";
import Loader from "../../components/Loader/Loader";

function CreatePage() {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <GoBackBtn>Back</GoBackBtn>
      <Title>Create new event</Title>
      <CreateForm />
      {isLoading && <Loader />}
    </>
  );
}

export default CreatePage;
