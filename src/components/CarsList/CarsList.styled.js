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

export const BtnLoadMore = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  transition: linear color 0.3s;

  border: none;
  background-color: inherit;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  cursor: pointer; 

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;