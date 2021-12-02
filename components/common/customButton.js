import { Button } from "antd";
import styled from "styled-components";

const CustomButton = ({ children, type, ...props }) => {
  return (
    <ButtonContainer {...props}>
      <Button type={type}>{children}</Button>
    </ButtonContainer>
  );
};

export default CustomButton;

const ButtonContainer = styled.div`
  .ant-btn {
    min-height: 53px;
    font-weight: 500;
    font-size: 1.7rem;
    color: #fff;
    border: 0.1rem solid #fff;
    background-color: transparent;
    border-radius: 0.2rem;
    padding: 0.2rem 2rem;
    background-size: 250%;
    background-image: linear-gradient(
      120deg,
      transparent,
      transparent 50%,
      #fff 0
    );
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

    &:hover {
      background-position: 100%;
      color: #000;
    }
  }
`;
