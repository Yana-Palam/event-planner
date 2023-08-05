import React from "react";
import EventsListItem from "../EventsListItem/EventsListItem";
import { List, Item } from "./EventsList.styled";
import { useSelector } from "react-redux";
import { selectVisibleEvents } from "../../redux/events/eventsSelectors";
import { priorities } from "../../helpers/variables";

function EventsList({ locationState }) {
  const events = useSelector(selectVisibleEvents);

  return (
    <List>
      {events.map(
        ({
          id,
          title,
          date,
          time,
          location,
          description,
          category,
          priority,
          picture,
        }) => {
          const priorityItem = priorities.find(
            (item) => item.value === priority
          );
          const value = priorityItem.value;
          const valueName = priorityItem.valueName;
          const path = `/events/${id}`;
          return (
            <Item key={id}>
              <EventsListItem
                title={title}
                date={date}
                time={time}
                location={location}
                description={description}
                category={category}
                priorityName={valueName}
                priority={value}
                picture={picture}
                path={path}
                locationState={locationState}
              />
            </Item>
          );
        }
      )}
    </List>
  );
}

export default EventsList;
