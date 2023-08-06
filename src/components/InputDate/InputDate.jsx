import React, { useState, useRef } from "react";
import Calendar from "react-calendar";
import { format } from "date-fns";
import useOutsideClick from "../../hooks/useOutsideHook";
import {
  Wrap,
  WrapInput,
  Input,
  StyledIconUp,
  StyledIconDown,
  Popup,
  Text,
  BtnWrap,
  BtnCancel,
  BtnChoose,
} from "./InputDate.styled";
import "react-calendar/dist/Calendar.css";

function InputDate({
  field,
  form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  options,
  label,
  meta,
  ...props
}) {
  const [value, setValue] = useState(null);
  const [changeValue, setChangeValue] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const outsideClickHandler = () => {
    setIsOpen(false);
  };

  useOutsideClick(inputRef, outsideClickHandler);

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  const onChange = (value) => {
    setChangeValue(value);
  };

  const onChoose = (value) => {
    setValue(value);
    console.log(form.values[field.name]);
    console.log(value);
    togglePopup();

    form.setFieldValue(field.name, value);
  };

  return (
    <Wrap ref={inputRef}>
      <WrapInput>
        <Input onClick={togglePopup}>
          <Text $select={value}>
            {!isOpen && <>{value ? format(value, "dd.MM") : "Select"}</>}
            {isOpen && `Select ${label}`}
          </Text>
        </Input>
        {!isOpen ? (
          <StyledIconDown onClick={togglePopup} color="#7B61FF" />
        ) : (
          <StyledIconUp onClick={togglePopup} color="#7B61FF" />
        )}
      </WrapInput>

      {isOpen && (
        <Popup>
          <Calendar
            calendarType="gregory"
            locale="en-EN"
            next2Label={null}
            prev2Label={null}
            showNeighboringMonth={false}
            onChange={onChange}
            value={changeValue}
          />
          <BtnWrap>
            <BtnCancel onClick={togglePopup} type="button">
              Cancel
            </BtnCancel>
            <BtnChoose
              onClick={() => {
                onChoose(changeValue);
              }}
              type="button"
            >
              Choose date
            </BtnChoose>
          </BtnWrap>
        </Popup>
      )}
    </Wrap>
  );
}

export default InputDate;
