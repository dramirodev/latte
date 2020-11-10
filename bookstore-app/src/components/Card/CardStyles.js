import styled from 'styled-components';
import {neutral} from 'styles';

export const CardWrapper = styled.div`
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 345px;
  padding: 0;
  margin: 0;

  background-color: ${neutral[100]};
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  
  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-font-smoothing: antialiased;
`;

export const CardContainer = styled.button`
  text-align: inherit;
  color: inherit;
  border: 0;
  cursor: pointer;
  text-decoration: none;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  padding: 0;
`;

export const ImageWrapper = styled.div`
  height: 150px;
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.image});
  text-align: inherit;
  color: inherit;
  cursor: pointer;
  user-select: none;
`;

export const DescriptionContainer = styled.div`
  padding: 1rem;
  text-align: inherit;
`;