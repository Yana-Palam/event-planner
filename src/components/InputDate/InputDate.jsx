import React, { useState, useRef } from "react";
import Calendar from "react-calendar";
import { format, parseISO } from "date-fns";
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
import { ReactComponent as IconPrev } from "../../assets/images/IconPrev.svg";
import { ReactComponent as IconNext } from "../../assets/images/IconNext.svg";
function InputDate({
  field,
  form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  options,
  label,
  error,
  meta,
  ...props
}) {
  const formValue = field.value ? parseISO(field.value) : null;
  const [value, setValue] = useState(formValue);
  const [changeValue, setChangeValue] = useState(formValue);
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
    togglePopup();

    form.setFieldValue(field.name, value);
  };

  return (
    <Wrap ref={inputRef}>
      <WrapInput>
        <Input $error={error} onClick={togglePopup}>
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
            nextLabel={<IconNext />}
            prevLabel={<IconPrev />}
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
