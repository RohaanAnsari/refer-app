import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';


export const Wrapper = styled.div`
  background-color: #4E4EDD;
  max-width: 400px;
  margin: 0 auto;
  height: 5rem;
`;

export const Container = styled.div`
  background: transparent;
  margin: 0 1.5rem;
  color: white;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    background: transparent;
    width: max-content;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
  }  
  `;

export const IconSearch = styled(SearchIcon)`
  color: white;
  background: transparent;
`;