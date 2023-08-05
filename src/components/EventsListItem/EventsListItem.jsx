import React from "react";
import {
  Card,
  ImgWrap,
  DateText,
  Descr,
  Title,
  Text,
  Labels,
  Category,
  Priority,
  ItemLink,
} from "./EventsListItem.styled";

function EventsListItem({
  id,
  title,
  date,
  time,
  location,
  description,
  category,
  priority,
  priorityName,
  picture,
  path,
  locationState,
}) {
  return (
    <Card>
      <ImgWrap style={{ backgroundImage: `url(${picture})` }}>
        <Labels>
          <Category>{category}</Category>
          <Priority $priority={`${priority}`}>{priorityName}</Priority>
        </Labels>
        <DateText>
          <div>
            {date} at {time}
          </div>
          <p>{location}</p>
        </DateText>
      </ImgWrap>
      <Descr>
        <Title>{title}</Title>
        <Text>{description}</Text>
        <ItemLink to={path} state={{ from: locationState }}>
          More info
        </ItemLink>
      </Descr>
    </Card>
  );
}

export default EventsListItem;
