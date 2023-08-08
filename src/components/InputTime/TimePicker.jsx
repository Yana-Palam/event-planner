import React, { useState, useEffect, useRef } from "react";
import debounce from "lodash.debounce";
import { hours, minutes, amPm } from "../../helpers/timePicker";
import {
  StyledTimePicker,
  TimeOptions,
  Divider,
  BtnOption,
  AmPmOptions,
  BtnAmPm,
} from "./TimePicker.styled";

function TimePicker({ onSelect, value }) {
  const [hour, setHour] = useState("01");
  const [minute, setMinute] = useState("00");
  const [ampm, setAmpm] = useState("am");

  const hourContainerRef = useRef(null);
  const minuteContainerRef = useRef(null);
  const ampmContainerRef = useRef(null);

  let selectedButton = null;
  let currentScrollContainer = null;

  useEffect(() => {
    const container = document.getElementById("time-picker");
    const columns = container.querySelectorAll("[data-time-picker-columns]");

    columns.forEach((column) => {
      column.addEventListener("scroll", debouncedScroll);

      if (!value) {
        const firstButton = column.querySelector("[data-time-picker-button]");
        firstButton.dataset.selected = true;
      }
    });

    return () => {
      columns.forEach((column) =>
        column.removeEventListener("scroll", debouncedScroll)
      );
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    return () => {
      onSelect(hour, minute, ampm);
    };
    // eslint-disable-next-line
  }, [hour, minute, ampm]);

  useEffect(() => {
    if (value) {
      const [initTime, initAmpm] = value.split(" ");
      const [initHour, initMinute] = initTime.split(":");

      setHour(initHour);
      setMinute(initMinute);
      setAmpm(initAmpm);

      scrollToAndMarkInitialButton(initHour, hourContainerRef.current);
      scrollToAndMarkInitialButton(initMinute, minuteContainerRef.current);
      scrollToAndMarkInitialButton(initAmpm, ampmContainerRef.current);
    }
    // eslint-disable-next-line
  }, []);

  const scrollToAndMarkInitialButton = (value, containerRef) => {
    if (!containerRef) return;

    const buttons = containerRef.querySelectorAll("[data-time-picker-button]");
    buttons.forEach((button) => {
      if (button.innerText.toLowerCase() === value) {
        button.dataset.selected = true;

        const containerCenter = containerRef.clientHeight / 2;
        const selectedButtonTop = button.offsetTop;
        const scrollOffset =
          selectedButtonTop - containerCenter + button.clientHeight / 2;
        containerRef.scrollTop = scrollOffset;
      } else {
        button.dataset.selected = false;
      }
    });
  };

  const onContainerScroll = (event) => {
    currentScrollContainer = event.target;

    const container = document.getElementById("time-picker");

    const containerHeight = container.clientHeight;
    const containerRect = container.getBoundingClientRect();
    const containerScrollTop = containerRect.top;
    const centralOffset = containerHeight / 2;

    const buttons = currentScrollContainer.querySelectorAll(
      "[data-time-picker-button]"
    );

    markCentralButton(buttons, containerScrollTop, centralOffset);

    if (selectedButton) {
      const selectedButtonTop =
        selectedButton.getBoundingClientRect().top - containerScrollTop;
      const scrollOffset =
        selectedButtonTop - centralOffset + selectedButton.clientHeight / 2;

      currentScrollContainer.scrollTop += scrollOffset;
    }
  };

  const markCentralButton = async (
    buttons,
    containerScrollTop,
    centralOffset
  ) => {
    buttons.forEach((button) => {
      const buttonTop = button.getBoundingClientRect().top - containerScrollTop;
      const buttonBottom = buttonTop + button.clientHeight;

      if (buttonTop <= centralOffset && buttonBottom >= centralOffset) {
        button.dataset.selected = true;
        selectedButton = button;

        switch (currentScrollContainer.id) {
          case "hours":
            setHour(selectedButton.innerText);
            onSelect(selectedButton.innerText, minute, ampm);
            break;
          case "minutes":
            setMinute(selectedButton.innerText);
            onSelect(hour, selectedButton.innerText, ampm);
            break;
          case "ampm":
            setAmpm(selectedButton.innerText);
            onSelect(hour, minute, selectedButton.innerText);
            break;
          default:
            break;
        }
      } else {
        button.dataset.selected = false;
      }
    });
  };

  const debouncedScroll = debounce(onContainerScroll, 100);

  return (
    <StyledTimePicker id="time-picker" data-time-picker>
      <TimeOptions ref={hourContainerRef} data-time-picker-columns id="hours">
        {hours.map((item, index) => (
          <li key={index}>
            <BtnOption data-time-picker-button type="button">
              {item}
            </BtnOption>
          </li>
        ))}
      </TimeOptions>

      <Divider>:</Divider>

      <TimeOptions
        ref={minuteContainerRef}
        data-time-picker-columns
        id="minutes"
      >
        {minutes.map((item, index) => (
          <li key={index}>
            <BtnOption data-time-picker-button type="button">
              {item}
            </BtnOption>
          </li>
        ))}
      </TimeOptions>

      <AmPmOptions ref={ampmContainerRef} data-time-picker-columns id="ampm">
        {amPm.map((item, index) => (
          <li key={index}>
            <BtnAmPm data-time-picker-button type="button">
              {item}
            </BtnAmPm>
          </li>
        ))}
      </AmPmOptions>
    </StyledTimePicker>
  );
}

export default TimePicker;
