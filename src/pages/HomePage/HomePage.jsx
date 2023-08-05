import React, { useEffect } from "react";
import EventsList from "../../components/EventsList/EventsList";
import ButtonAddEvent from "../../components/ButtonAddEvent/ButtonAddEvent";
import Sort from "../../components/Sort/Sort";
import Filter from "../../components/Filter/Filter";
import Loader from "../../components/Loader/Loader";
import { useLocation } from "react-router-dom";
import { Wrap, MessageListEmpty, StyledWrapper } from "./HomePage.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../redux/events/eventsOperations";
import { selectIsLoading } from "../../redux/events/eventsSelectors";
import { selectVisibleEvents } from "../../redux/events/eventsSelectors";
import { selectSortProperty } from "../../redux/sort/sortSelectors";
import { selectFilterValue } from "../../redux/filter/filterSelectors";

function HomePage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoading = useSelector(selectIsLoading);
  const events = useSelector(selectVisibleEvents);
  const sortProperty = useSelector(selectSortProperty);
  const filterValue = useSelector(selectFilterValue);

  const fetchData = async () => {
    dispatch(fetchEvents());
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Wrap>
        <StyledWrapper $filter={filterValue}>
          <Filter />
        </StyledWrapper>
        <StyledWrapper $sort={sortProperty}>
          <Sort />
        </StyledWrapper>
        <ButtonAddEvent />
      </Wrap>
      {isLoading && <Loader />}
      <EventsList locationState={location} />
      {!isLoading && !events.length && (
        <MessageListEmpty>Sorry, there are no events.</MessageListEmpty>
      )}
    </div>
  );
}

export default HomePage;
