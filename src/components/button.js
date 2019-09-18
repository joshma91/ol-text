import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Button({
  text,
  loadingText,
  loading,
  onClick = () => {}
}) {
  return (
    <ButtonFrame loading={loading} onClick={() => onClick()}>
      <ButtonText>
        {loading ? <ButtonLoader icon={faSpinner} pulse /> : null}
        {loading ? loadingText : text}
      </ButtonText>
    </ButtonFrame>
  );
}

const ButtonFrame = styled.button`
  padding: 0;
  text-align: center;
  border-radius: 24px;
  box-sizing: border-box;
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: center;
  border-width: 1px;
  outline: 0;
  border: none;
  cursor: pointer;
  opacity: ${props => {
    return props.loading ? 0.7 : 1;
  }};
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.secondary};
`;

const ButtonLoader = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const ButtonText = styled.span`
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1;
`;
