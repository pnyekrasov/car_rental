import styled from 'styled-components';

export const Photo = styled.img`
  height: 268px;
  border-radius: 12px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  margin-bottom: 8px;
  color: #121417;
  font-size: 16px;
  font-weight: 500;
`;

export const Subtitle = styled.span`
  color: #3470ff;
`;

export const Text = styled.p`
  margin-bottom: 4px;
`;

export const Button = styled.button`
  margin-top: 28px;
  padding-top: 12px;
  padding-bottom: 12px;
  width: 100%;
  font-family: 'Manrope';
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  border: transparent;
  border-radius: 12px;
  background: #3470ff;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

export const ModalPhoto = styled.img`
  width: 100%;
  height: 248px;
  border-radius: 14px;
`;

export const ModalTitle = styled.p`
  margin-top: 14px;
  margin-bottom: 8px;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

export const Lead = styled.p`
  margin-bottom: 14px;
`;

export const Desc = styled.p`
  color: #121417;
  font-size: 14px;
  line-height: 1.43;
`;

export const Tagline = styled.p`
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const Gallery = styled.ul`
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
`;

export const Block = styled.li`
  padding: 7px 14px;
  color: #363535;
  border-radius: 35px;
  background: #f9f9f9;
`;
