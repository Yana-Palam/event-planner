import styled from "styled-components";
import { Field } from "formik";
import { device } from "../../utils/device";
import { ChevronSmallDown } from "react-swm-icon-pack";

export const StyledForm = styled.div`
  position: relative;
  padding: 40px 16px;
  text-align: left;
  width: 100%;
  background-color: ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.radii.md};
  box-shadow: ${(p) => p.theme.boxShadow.box};

  @media ${device.tablet} {
    padding: 40px 24px 100px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 656px;

    gap: 20px 24px;
  }
  @media ${device.desktop} {
    padding: 40px 40px 170px;
    height: 490px;
    column-gap: 42px;
  }
`;

export const Wrapper = styled.div`
  position: relative;

  @media ${device.phabletAndMobileOnly} {
    margin-bottom: 20px;
  }

  @media ${device.tablet} {
    width: 308px;
  }
  @media ${device.desktop} {
    width: 372px;
  }
`;

export const Label = styled.label`
  color: ${(p) => p.theme.colors.form.label};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.formLabel};
  letter-spacing: ${(p) => p.theme.letterSpacing.l};
  margin-bottom: 8px;
  display: inline-block;
`;

export const Input = styled(Field)`
  display: block;
  width: 100%;
  padding: 12px 36px 12px 16px;
  height: 56px;
  outline: none;
  border-radius: ${(p) => p.theme.radii.md};
  border: ${(p) => p.theme.borders.thin} ${(p) => p.theme.colors.form.border};
  color: ${(p) => p.theme.colors.form.input};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-family: inherit;
  line-height: ${(p) => p.theme.lineHeights.formInput};
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  &:focus {
    border-color: ${(p) => p.theme.colors.accent};
  }

  &::placeholder {
    color: ${(p) => p.theme.colors.form.input};
    font-family: inherit;
    line-height: ${(p) => p.theme.lineHeights.formInput};
    font-size: ${(p) => p.theme.fontSizes.s};
  }

  border-color: ${(p) => p.$error && p.theme.colors.form.error};
`;

export const Textarea = styled(Input)`
  resize: none;
  min-height: 156px;
`;

export const ErrorText = styled.p`
  position: absolute;
  color: ${(p) => p.theme.colors.form.error};
  font-size: 12px;
  right: 19px;
  margin-top: 4px;
`;

export const Btn = styled.button`
  min-width: 193px;
  padding: 16px 12px;
  border: none;
  border-radius: ${(p) => p.theme.radii.md};
  background-color: ${(p) => p.theme.colors.accent};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.text};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-family: inherit;
  color: ${(p) => p.theme.colors.white};
  line-height: ${(p) => p.theme.lineHeights.title};
  transition: background-color ${(p) => p.theme.animation.cubic};

  &:hover {
    background-color: ${(p) => p.theme.colors.hover};
  }

  @media ${device.phabletAndMobileOnly} {
    width: 100%;
    margin-top: 40px;
  }

  @media ${device.tablet} {
    position: absolute;
    right: 24px;
    bottom: 40px;
  }

  @media ${device.desktop} {
    right: 40px;
    bottom: 54px;
  }
`;

export const StyledWrap = styled.div``;

export const ClearBtn = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  right: 12px;
  top: 40px;
`;
