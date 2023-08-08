import styled from "styled-components";

export const StyledTimePicker = styled.div`
  display: flex;
  gap: 48px;
  width: 100%;
  height: 160px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 56px;
    z-index: 1;
    height: 1px;
    width: 100%;
    background-color: ${(p) => p.theme.colors.form.border};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 56px;
    z-index: 1;
    height: 1px;
    width: 100%;
    background-color: ${(p) => p.theme.colors.form.border};
  }
`;

export const TimeOptions = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 48px;
  padding: 56px 0;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const AmPmOptions = styled.ul`
  width: 73px;
  padding: 56px 0;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const BtnOption = styled.button`
  width: 100%;
  padding: 12px;
  color: ${(p) => p.theme.colors.form.text};
  border: none;
  background-color: transparent;
  text-align: center;
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.formInput};

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &[data-selected="true"] {
    color: ${(p) => p.theme.colors.form.input};
    font-weight: ${(p) => p.theme.fontWeights.semiBold};
  }
`;

export const BtnAmPm = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  background-color: transparent;
  color: ${(p) => p.theme.colors.form.text};
  text-align: center;
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.formInput};

  &:not(:last-child) {
    margin-bottom: 8px;
  }
  &[data-selected="true"] {
    color: ${(p) => p.theme.colors.form.input};
    font-weight: ${(p) => p.theme.fontWeights.semiBold};
  }
`;

export const Divider = styled.span`
  position: absolute;
  top: 50%;
  left: 70px;
  transform: translateY(-50%);
  width: 12px;
  text-align: center;
  color: ${(p) => p.theme.colors.form.input};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
`;
