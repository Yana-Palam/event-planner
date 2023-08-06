import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import DetailsBox from "../../components/DetailsBox/DetailsBox";
import Loader from "../../components/Loader/Loader";
import { TitleDetails, Wrap } from "./DetailsPage.styled.js";
import { priorities } from "../../helpers/variables";
//

function DetailsPage() {
  const navigate = useNavigate();
  const [eventDetails, setEventDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const locationState = useLocation();
  const { eventId } = useParams();

  const fetchEvent = async (id) => {
    try {
      const { data } = await axios.get(id);
      setEventDetails(data);
    } catch (error) {
      navigate("/");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchEvent(eventId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    id,
    title,
    date,
    time,
    location,
    description,
    category,
    priority,
    picture,
  } = eventDetails;
  const priorityItem = priorities.find((item) => item.value === priority);
  const valueName = priorityItem?.valueName;

  return (
    <div>
      <GoBackBtn />
      {isLoading && <Loader />}
      {!isLoading && (
        <Wrap>
          <TitleDetails>{title}</TitleDetails>
          <DetailsBox
            id={id}
            title={title}
            date={date}
            time={time}
            location={location}
            description={description}
            category={category}
            priority={priority}
            priorityName={valueName}
            picture={picture}
            locationState={locationState}
          />
        </Wrap>
      )}
    </div>
  );
}

export default DetailsPage;
