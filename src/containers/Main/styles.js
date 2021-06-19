import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: -1.8rem auto 0 auto;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  height:100vh;
  background: #f1f1f1;
  max-width: 400px;
  `;

export const Container = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  margin-top: -1.8rem;
  height: 100%;
  background: red;
`;

export const BottomContainer = styled.div`
  /* margin-left: 1.5rem;
  margin-right: 1.5rem; */
  background-color: transparent;
  height: 4rem;
  position: absolute;
  bottom: 0;
  left:0;
  right:0;
  top: 100%;
  display: flex;
  width: inherit;
  align-items: flex-end;
`;