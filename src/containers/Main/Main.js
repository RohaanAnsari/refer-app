import React from 'react';
import { Container, Wrapper, BottomContainer } from './styles'
import Home from '../Home/Home';
import { NavBottom, SubHeader } from '../../components';

const Main = () => {
  return (
    <Wrapper>
      <Container>
        <SubHeader />
        <Home />
      </Container>
      <BottomContainer>
        <NavBottom />
      </BottomContainer>
    </Wrapper>
  )
}

export default Main
