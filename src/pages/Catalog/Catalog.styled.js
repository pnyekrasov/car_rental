import styled from 'styled-components';

export const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 29px;
  row-gap: 50px;
  padding: 150px 128px;
`;


export const Item = styled.div`
 width: calc((100% - 87px) / 4);
`;