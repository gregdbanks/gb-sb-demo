import React from 'react';
import styled from 'styled-components';
import FunButton from './FunButton';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background-color: #F2F2F2;
`;

const App = () => (
  <ButtonContainer>
    <FunButton size="small" variation="outline" theme="dark">Button 1</FunButton>
    <FunButton size="medium" variation="default" theme="colorful">Button 2</FunButton>
    <FunButton size="large" variation="ghost" theme="light">Button 3</FunButton>
  </ButtonContainer>
);

export default App;
