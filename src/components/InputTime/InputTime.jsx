import React, { useState, useRef } from "react";
import useOutsideClick from "../../hooks/useOutsideHook";
import {
  Wrap,
  WrapInput,
  Input,
  StyledIconUp,
  StyledIconDown,
  Popup,
  Text,
} from "./InputTime.styled";
import TimePicker from "./TimePicker";

function InputTime({
  field,
  form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  options,
  label,
  meta,
  ...props
}) {
  // const val = field.value;
  const [value, setValue] = useState(field.value);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  const onSelect = (hours, minute, ampm) => {
    const timeValue = `${hours}:${minute} ${ampm.toLowerCase()}`;
    setValue(timeValue);
    form.setFieldValue(field.name, timeValue);
  };

  const onClickInput = () => {
    togglePopup();
    form.setFieldValue(field.name, value);
  };

  const outsideClickHandler = () => {
    setIsOpen(false);
  };

  useOutsideClick(inputRef, outsideClickHandler);

  return (
    <Wrap ref={inputRef}>
      <WrapInput>
        <Input onClick={onClickInput}>
          <Text $select={value}>
            {!isOpen && <>{value ? value : "Select"}</>}
            {isOpen && `Select ${label}`}
          </Text>
        </Input>
        {!isOpen ? (
          <StyledIconDown onClick={onClickInput} color="#7B61FF" />
        ) : (
          <StyledIconUp onClick={onClickInput} color="#7B61FF" />
        )}
      </WrapInput>
      {isOpen && (
        <Popup>
          <TimePicker onSelect={onSelect} value={value} />
        </Popup>
      )}
    </Wrap>
  );
}

export default InputTime;
