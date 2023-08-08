import styled from "styled-components";
import { device } from "../../utils/device";

const Container = styled.div`
  margin: 0 auto;
  padding: 0 24px;

  @media ${device.phabletOnly} {
    width: 480px;
  }

  @media ${device.tabletOnly} {
    width: 768px;
    padding: 0 40px;
  }

  @media ${device.desktop} {
    width: 1280px;
    padding: 0;
  }
`;

export default Container;
